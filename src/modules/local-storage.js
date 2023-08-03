import { updateTaskDisplay, updateListDisplay } from './update-displays';
import { myProjects, myTasks } from '../index';

function saveTasksLocally() {
	myTasks.forEach((t) => {
		JSON.stringify(t);
	});
	localStorage.setItem('tasks', JSON.stringify(myTasks));
}

function saveProjectsLocally() {
	myProjects.forEach((p) => {
		JSON.stringify(p);
	});
	localStorage.setItem('projects', JSON.stringify(myProjects));
}

function loadLocalStorage() {
	JSON.parse(localStorage.getItem('tasks')).forEach((task) => {
		myTasks.push(task);
	});

	JSON.parse(localStorage.getItem('projects')).forEach((project) => {
		if (project != 'General') myProjects.push(project);
	});

	updateTaskDisplay(myTasks);
	updateListDisplay(myProjects);
}

export { saveTasksLocally, saveProjectsLocally, loadLocalStorage };

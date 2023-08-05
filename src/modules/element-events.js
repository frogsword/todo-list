import { updateTaskDisplay, updateListDisplay, updateProjectChoices } from './update-displays';
import { myTasks, myProjects } from '../index';
import { saveTasksLocally, saveProjectsLocally } from './local-storage';

//edit and remove buttons for tasks
const handleTaskEvents = () => {
	//event listener for remove buttons
	let removeBtn = document.querySelectorAll('.task-trash');
	removeBtn.forEach((btn) => {
		btn.addEventListener('click', function () {
			removeTask(btn.getAttribute('id'));
		});
	});

	//event listener for editing buttons
	let editBtn = document.querySelectorAll('.task-edit');
	editBtn.forEach((btn) => {
		btn.addEventListener('click', function () {
			let inputs = document.querySelectorAll('.task-input');
			let selects = document.querySelectorAll('.form-select');
			let confirmBtn = document.querySelector('.confirm-add-task');

			inputs[0].value = btn.getAttribute('name');
			inputs[1].value = btn.getAttribute('desc');
			inputs[2].value = btn.getAttribute('date');
			selects[0].value = btn.getAttribute('prio');
			selects[1].value = btn.getAttribute('project');

			confirmBtn.addEventListener('click', function () {
				removeTask(btn.getAttribute('id'));
			});
		});
	});

	//remove selected task from tasks array and update display
	function removeTask(idToRemove) {
		myTasks.forEach((task) => {
			if (task.id == idToRemove) {
				myTasks.splice(myTasks.indexOf(task), 1);

				saveTasksLocally(); //after task removal/edit

				updateTaskDisplay(myTasks);
			}
		});
	}
};

const handleListEvents = () => {
	// remove list button event
	let removeListBtn = document.querySelectorAll('.list-trash');
	removeListBtn.forEach((btn) => {
		btn.addEventListener('click', function () {
			removeList(btn.getAttribute('id'));
		});
	});

	//removes list and places tasks belonging to deleted list into general list
	function removeList(projToRemove) {
		myProjects.forEach((project) => {
			if (project === projToRemove) {
				myProjects.splice(myProjects.indexOf(project), 1);
				myTasks.forEach((task) => {
					if (task.project === projToRemove) {
						task.project = 'General';
					}
				});
				saveProjectsLocally(); //after list removal
				saveTasksLocally();

				updateListDisplay(myProjects);
				updateProjectChoices(myProjects);
				updateTaskDisplay(myTasks);
			}
		});
	}
};

export { handleTaskEvents, handleListEvents };

import { updateTaskDisplay, updateListDisplay } from './update-displays';
import { saveTasksLocally, saveProjectsLocally } from './local-storage';
import { myProjects, myTasks } from '../index';

//create new tasks
const createTask = () => {
	function task(taskName, taskDesc, taskDate, taskPrio, projectName, taskId) {
		this.name = taskName;
		this.desc = taskDesc;
		this.date = taskDate;
		this.prio = taskPrio;
		this.project = projectName;
		this.id = taskId;
	}

	let inputs = document.querySelectorAll('.task-input');
	let selects = document.querySelectorAll('.form-select');
	let confirmBtn = document.querySelector('.confirm-add-task');
	let runningId = 0;

	confirmBtn.addEventListener('click', function () {
		if (inputs[0].value.length > 0) {
			let newTask = new task(inputs[0].value, inputs[1].value, inputs[2].value, selects[0].value, selects[1].value, getNextId());
			myTasks.push(newTask);
			updateTaskDisplay(myTasks);
	
			inputs[0].value = '';
			inputs[1].value = '';
			inputs[2].value = '';
			selects[0].value = 'low';
			selects[1].value = 'General';
	
			saveTasksLocally(); //after task creation
		}
	});

	document.querySelector('.modal-content').addEventListener('keypress', function(event) {
		if (event.key === "Enter") {
			confirmBtn.click();
		}
	});

	//keep runningId updated after page refresh
	function getNextId() {
		runningId = 0;
		myTasks.forEach((task) => {
			if (task.id > runningId) {
				runningId = task.id;
			}
		});
		runningId += 1;
		return runningId;
	}
};

//create new lists
const createList = () => {
	let addListInput = document.querySelector('.projects-input');
	let addListButton = document.querySelector('.add-list');
	let originalName;

	function addList() {
		originalName = true;
		//add list to array and call function to update list and project choices
		if (addListInput.value !== '') {
			//check project name originality
			myProjects.forEach((project) => {
				if (project === addListInput.value) {
					originalName = false;
				}
			});

			if (originalName) {
				myProjects.push(addListInput.value);
				addListInput.value = '';
				updateListDisplay(myProjects);
				// updateProjectChoices(myProjects);

				saveProjectsLocally(); //after list creation
			}
		}
	};

	addListButton.addEventListener('click', function() {
		addList();
	});

	addListInput.addEventListener('keypress', function(event) {
		if (event.key === "Enter") {
			addListButton.click();
		}
	});
};

export { createList, createTask, myTasks, myProjects };

import { createTaskAccordion } from '../components/TaskList';
import { handleTaskEvents, handleListEvents } from './element-events';
import { filterByListEvent, filterByTime } from './task-filters';
import { format } from 'date-fns';

//update display of tasks
const updateTaskDisplay = (taskArray) => {
	let taskList = document.querySelector('.main-task-list');
	let prioColor;
	let prioBg;
	let headerText = document.querySelector('.header-text');

	taskList.innerHTML = '';
	headerText.innerHTML = 'All';
	showSelectedFilter(headerText.textContent);

	//sort by name ascending
	taskArray = taskArray.sort((t1, t2) => (t1.name.toLowerCase() < t2.name.toLowerCase()) ? -1 : (t1.name.toLowerCase() > t2.name.toLowerCase()) ? 1 : 0);

	//decide color based on priority
	taskArray.forEach((task) => {
		switch (task.prio) {
			case 'low':
				prioColor = '#14b8a6';
				prioBg = '#d1faf5'
				break;
			case 'medium':
				prioColor = '#3b82f6';
				prioBg = '#cee0fd'
				break;
			case 'high':
				prioColor = '#d946ef';
				prioBg = '#f5d0fb'
				break;
		}

		let date = '';
		try {
			date = format(new Date(task.date.slice(0,4), parseInt(task.date.slice(5, 7))-1, task.date.slice(8, 10)), "MMM dd',' yyyy");
		} catch(error) {}

		taskList.appendChild(createTaskAccordion(task.name, task.desc, task.date, task.prio, task.project, task.id, prioColor, prioBg, date));
	});

	handleTaskEvents();
};

//update display of lists
const updateListDisplay = (list) => {
	// saveProjectsLocally();

	let projectsList = document.querySelector('.projects-lists');

	projectsList.innerHTML = '';

	list.forEach((project) => {
		if (project === 'General') {
			projectsList.innerHTML += `
            <li class="project-list-item">
                <div class="sort-by-project filter-elem" id=${project}>${project}</div>
            </li>
            `;
		} else {
			//adds remove icon for lists except general
			projectsList.innerHTML += `
			<li class="project-list-item">
                <div class="sort-by-project filter-elem" id=${project}>${project}</div>
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="black" class="bi bi-trash3 list-trash" id=${project} viewBox="0 0 16 16">
                    <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z"/>
                </svg>
            </li>`;
		}
	});

	updateProjectChoices(list);

	handleListEvents();
	filterByListEvent();
	filterByTime();
};

//show selected filter
const showSelectedFilter = (headerText) => {
	let filters = document.querySelectorAll('.filter-elem');
	filters.forEach((filter) => {
		let filterText = `> ${filter.getAttribute('id')}`;
		filter.textContent = filter.getAttribute('id');
		if (headerText == filter.textContent) {
			filter.textContent = filterText;
		}
	});
};

//add projects to list of choices in pop-up
function updateProjectChoices(list) {
	let projectChoices = document.querySelector('#choose-project');

	projectChoices.innerHTML = '';

	list.forEach((project) => {
		if (project == 'General') {
			projectChoices.innerHTML += `<option selected value="${project}">${project}</option>`;
		} else {
			projectChoices.innerHTML += `<option value="${project}">${project}</option>`;
		}
	});
}

export { updateTaskDisplay, updateListDisplay, updateProjectChoices, showSelectedFilter };

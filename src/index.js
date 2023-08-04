import './style.scss';
import Header from './components/Header.js';
import Sidebar from './components/Sidebar.js';
import { TaskList } from './components/TaskList.js';
import { createList, createTask } from './modules/create-elements.js';
import { loadLocalStorage } from './modules/local-storage.js';

let myProjects = ['General'];
let myTasks = [];

//initial
const Content = (() => {
	const content = document.querySelector('#content');

	content.appendChild(Header());
	content.appendChild(Sidebar());
	content.appendChild(TaskList());

	createTask();
	createList();

	loadLocalStorage();
})();

export { myTasks, myProjects };
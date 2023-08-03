import { isThisWeek, parseISO } from 'date-fns';
import { myTasks } from '../index';
import { updateTaskDisplay } from './update-displays';

//filter tasks by time
const filterByTime = () => {
	let filterTodayBtn = document.querySelector('.Today-nav');
	let filterWeekBtn = document.querySelector('.Week-nav');
	let headerText = document.querySelector('.header-text');

	//filter by today's tasks
	function filterToday() {
		const filterDay = () => {
			let date = new Date();
			let filteredArr = [];

			//day is in 8th and 9th index of both strings, checking match
			myTasks.forEach((task) => {
				if (task.date.toString().substring(8, 10) === date.toString().substring(8, 10)) {
					filteredArr.push(task);
				}
			});
			updateTaskDisplay(filteredArr);
			headerText.innerHTML = 'Today';
		};

		filterTodayBtn.removeEventListener('click', filterDay);
		filterTodayBtn.addEventListener('click', filterDay);
	}

	//filter by tasks in the week
	function filterThisWeek() {
		const filterWeek = () => {
			let date = new Date();
			let day = date.getDate();
			let filteredArr = [];
			console.log(day);

			myTasks.forEach((task) => {
				if (isThisWeek(parseISO(task.date), { weekStartsOn: day })) {
					filteredArr.push(task);
					console.log(task.date);
				}
			});
			updateTaskDisplay(filteredArr);
			headerText.innerHTML = 'Week';
		};

		filterWeekBtn.removeEventListener('click', filterWeek);
		filterWeekBtn.addEventListener('click', filterWeek);
	}

	//initialize event listeners
	filterToday();
	filterThisWeek();
};

//filter by lists
const filterByListEvent = () => {
	let listButtons = document.querySelectorAll('.sort-by-project');
	let filterAll = document.querySelector('.All-nav');
	let headerText = document.querySelector('.header-text');

	// //display all tasks
	function unfilter() {
		const unfilter = () => {
			updateTaskDisplay(myTasks);
			headerText.innerHTML = 'All';
		};

		filterAll.removeEventListener('click', unfilter);
		filterAll.addEventListener('click', unfilter);
	}

	//filter by selected list
	function filterByList() {
		const filter = (btnId) => {
			let filteredArr = [];
			myTasks.forEach((task) => {
				if (task.project === btnId) {
					filteredArr.push(task);
				}
			});
			updateTaskDisplay(filteredArr);
			headerText.innerHTML = `${btnId}`;
		};

		listButtons.forEach((btn) => btn.removeEventListener('click', filter));
		listButtons.forEach((btn) => btn.addEventListener('click', () => filter(btn.getAttribute('id'))));
	}

	//initialize event listeners
	filterByList();
	unfilter();
};

export { filterByListEvent, filterByTime };

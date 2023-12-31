const TaskList = () => {
	const mainTask = document.createElement('div');
	mainTask.classList.add('main-task');

	const mainTaskHeader = document.createElement('div');
	mainTaskHeader.classList.add('main-task-header');
	mainTaskHeader.innerHTML = `
    <h1 class="header-text">All</h1>
    <button type="button" class="btn btn-primary modal-launch" data-bs-toggle="modal" data-bs-target="#exampleModal">
        Add a Task
    </button>
    `;
	mainTask.appendChild(mainTaskHeader);

	const mainTaskList = document.createElement('div');
	mainTaskList.classList.add('main-task-list');

	mainTask.appendChild(mainTaskList);

	return mainTask;
};

function createTaskAccordion(aName, aDesc, aDate, aPrio, aProject, aId, aPrioColor, aPrioBg, dateString) {
	// let taskList = document.querySelector('.main-task-list');
	let taskAccordion = document.createElement('div');
	taskAccordion.classList.add('accordion', 'task');
	taskAccordion.setAttribute('id', `${aId}`);
	taskAccordion.style = `border-left: 6px solid ${aPrioColor}; border-radius: 10px; --bs-accordion-active-bg: ${aPrioBg};`;

	taskAccordion.innerHTML = `
        <div class="accordion-item">
            <h2 class="accordion-header">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#accordion-${aId}" aria-expanded="true" aria-controls="collapseOne">
                    
                    <h3>${aName}</h3>

                    <div class="task-buttons">
                        <h5>${dateString}</h5>
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="#030712" class="bi bi-pencil-square task-edit" data-bs-toggle="modal" data-bs-target="#exampleModal" name="${aName}" desc="${aDesc}" date="${aDate}" prio="${aPrio}" project="${aProject}" id=${aId} viewBox="0 0 16 16">
                            <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                            <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
                        </svg>
                    
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="#030712" class="bi bi-trash3 task-trash" id=${aId} viewBox="0 0 16 16">
                            <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z"/>
                        </svg>
                    </div>

                </button>
            </h2>

            <div id="accordion-${aId}" class="accordion-collapse collapse" data-bs-parent="accordion-${aId}">
                <div class="accordion-body">
                    <p>${aDesc}</p>
                    <h4 style="color: ${aPrioColor};">${aProject}</h4> 
                </div>
            </div>
        </div>
    `;

	return taskAccordion;
}

export { TaskList, createTaskAccordion };

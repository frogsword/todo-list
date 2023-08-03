import ProjModal from './AddTaskModal';

const Sidebar = () => {
	const sidebar = document.createElement('div');
	sidebar.classList.add('sidebar');

	const topSect = document.createElement('div');
	topSect.classList.add('sidebar-top');
	sidebar.appendChild(topSect);

	topSect.appendChild(createSidebarNavs('All'));
	topSect.appendChild(createSidebarNavs('Today'));
	topSect.appendChild(createSidebarNavs('Week'));
	sidebar.appendChild(projectsList());

	return sidebar;
};

const createSidebarNavs = (text) => {
	const nav = document.createElement('div');
	nav.classList.add('sidebarNav', `${text}-nav`);
	nav.innerHTML = `
    <h3>${text}</h3>
    `;

	return nav;
};

const projectsList = () => {
	const projects = document.createElement('div');
	projects.classList.add('projects-list');

	projects.innerHTML = `
    <div class="list">
        <h1>Lists</h1>
        <ul class="projects-lists">
            <li class="project-list-item">General</li>
        </ul>
    </div>

    <div class="input-group mb-3">
        <input type="text" class="form-control projects-input" placeholder="New List" aria-label="Name" maxlength="12" required>
        <button class="btn btn-outline-secondary add-list" type="button" id="button-addon2">+</button>
    </div>
    `;
	projects.appendChild(ProjModal());

	return projects;
};

export default Sidebar;

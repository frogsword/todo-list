const Header = (() => {
    const head = document.createElement('div');
    head.classList.add('header');
    head.innerHTML = 
    `
    <h1>To-Do List</h1>
    `;

    return head;
})

export default Header;
function navigation() {
    let main = document.createElement('div');
    main.classList.add('navbar');

    let header = document.createElement('h1');
    let welcome = document.createElement('h3');
    let menu = document.createElement('h3');
    let contact = document.createElement('h3');

    header.classList.add('navbar-header');
    welcome.classList.add('navbar-welcome');
    menu.classList.add('navbar-menu');
    contact.classList.add('navbar-contact');

    header.textContent = 'League Restaurant';
    welcome.textContent = 'Main';
    menu.textContent = 'Menu';
    contact.textContent = 'Contact';

    main.appendChild(header);
    main.appendChild(welcome);
    main.appendChild(menu);
    main.appendChild(contact);

    return main;
}

export default navigation;
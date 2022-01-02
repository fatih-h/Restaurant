function navigation() {
    let main = document.createElement('div');
    main.classList.add('navbar');

    let option = document.createElement('div');
    let welcome = document.createElement('h3');
    let menu = document.createElement('h3');
    let contact = document.createElement('h3');

    option.classList.add('navbar-option');
    welcome.classList.add('navbar-welcome');
    menu.classList.add('navbar-menu');
    contact.classList.add('navbar-contact');

    welcome.textContent = 'Main';
    menu.textContent = 'Menu';
    contact.textContent = 'Contact';

    main.append(option);
    option.appendChild(welcome);
    option.appendChild(menu);
    option.appendChild(contact);

    return main;
}

export default navigation;
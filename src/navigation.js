function navigation() {
    let main = document.createElement('div');
    main.classList.add('navbar');

    let logoDiv = document.createElement('div');
    let option = document.createElement('div');
    let welcome = document.createElement('h2');
    let menu = document.createElement('h2');
    let contact = document.createElement('h2');

    option.classList.add('navbar-option');
    logoDiv.classList.add('navbar-logo-div');
    welcome.classList.add('navbar-welcome');
    menu.classList.add('navbar-menu');
    contact.classList.add('navbar-contact');

    welcome.textContent = 'Main';
    menu.textContent = 'Menu';
    contact.textContent = 'Contact';

    main.append(option);
    option.appendChild(logoDiv);
    option.appendChild(welcome);
    option.appendChild(menu);
    option.appendChild(contact);

    return main;
}

export default navigation;
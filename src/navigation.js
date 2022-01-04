
function navigation() {

    let main = document.createElement('div');
    main.classList.add('navbar');

    let logoDiv = document.createElement('div');
    let option = document.createElement('div');
    let welcome = document.createElement('button');
    let menu = document.createElement('button');
    let contact = document.createElement('button');
    welcome.setAttribute('type', 'button');
    menu.setAttribute('type', 'button');
    contact.setAttribute('type', 'button');

    option.classList.add('navbar-option');
    logoDiv.classList.add('navbar-logo-div');

    welcome.classList.add('navbar-welcome');
    welcome.classList.add('navbar-button-ui');
    menu.classList.add('navbar-menu');
    menu.classList.add('navbar-button-ui');
    contact.classList.add('navbar-contact');
    contact.classList.add('navbar-button-ui');

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
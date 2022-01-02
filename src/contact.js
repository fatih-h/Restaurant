function contact() {
    let main = document.createElement('div');
    main.classList.add('contact');

    let header = document.createElement('h2');
    let form = document.createElement('form');
    let inputName = document.createElement('input');
    let inputMail = document.createElement('input');
    let inputText = document.createElement('input');
    let button = document.createElement('button');

    header.classList.add('contact-header');
    form.classList.add('contact-form');
    inputName.classList.add('contact-name');
    inputMail.classList.add('contact-mail');
    inputText.classList.add('contact-text');
    button.classList.add('contact-button');

    header.textContent = 'Contact US';
    form.setAttribute('action', '/');
    inputName.setAttribute('type', 'text');
    inputName.setAttribute('placeholder', 'Name');
    inputMail.setAttribute('type', 'email');
    inputMail.setAttribute('placeholder', 'Mail');
    inputText.setAttribute('type', 'text');
    inputText.setAttribute('placeholder', 'Give us your opinion');
    button.setAttribute('type', 'submit');
    button.textContent = 'Submit';


    main.appendChild(header);
    main.appendChild(form);
    form.appendChild(inputName);
    form.appendChild(inputMail);
    form.appendChild(inputText);
    form.appendChild(button);

    return main;
}

export default contact;
function contact() {
    let main = document.createElement('div');
    main.classList.add('contact');

    let header = document.createElement('h1');

    let div1 = document.createElement('div');
    let form = document.createElement('form');
    let inputName = document.createElement('input');
    let inputMail = document.createElement('input');
    let inputText = document.createElement('input');
    let button = document.createElement('button');
    let div2 = document.createElement('div');
    let display1 = document.createElement('h2');
    let display2 = document.createElement('p');
    let display3 = document.createElement('p');
    let display4 = document.createElement('p');

    header.classList.add('contact-header');

    div1.classList.add('contact-div1');
    form.classList.add('contact-form');
    inputName.classList.add('contact-name');
    inputName.classList.add('input-iu');
    inputMail.classList.add('contact-mail');
    inputMail.classList.add('input-iu');
    inputText.classList.add('contact-text');
    inputText.classList.add('input-iu');
    button.classList.add('contact-button');

    div2.classList.add('contact-div2');
    display1.classList.add('contact-display1');
    display2.classList.add('contact-display2');
    display3.classList.add('contact-display3');
    display4.classList.add('contact-display4');

    header.textContent = 'Contact US';
    form.setAttribute('action', '/');
    inputName.setAttribute('type', 'text');
    inputName.setAttribute('placeholder', 'Name');
    inputMail.setAttribute('type', 'email');
    inputMail.setAttribute('placeholder', 'Mail');
    inputText.setAttribute('type', 'text');
    inputText.setAttribute('placeholder', 'Give us your opinion');
    button.setAttribute('type', 'button');
    button.addEventListener('click', e => {
        alert("Thanks for submitting.");
    });
    button.textContent = 'Submit';

    display1.textContent = "Let's Get in Touch";
    display2.innerHTML = `<i class="fas fa-map-marker-alt"></i> George Street 12th`;
    display3.innerHTML = `<i class="fas fa-phone-alt"></i> +1 532 123 45 67`;
    display4.innerHTML = `<i class="fas fa-envelope"></i> info@unique_restauant.com`;

    main.appendChild(div1);
    main.appendChild(div2);

    div1.appendChild(form);
    form.appendChild(header);
    form.appendChild(inputName);
    form.appendChild(inputMail);
    form.appendChild(inputText);
    form.appendChild(button);

    div2.appendChild(display1);
    div2.appendChild(display2);
    div2.appendChild(display3);
    div2.appendChild(display4);


    return main;
}

export default contact;
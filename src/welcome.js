function welcome() {
    let main = document.createElement('div');
    main.classList.add('welcome');

    let header = document.createElement('h2');
    let subHeader = document.createElement('h3');
    let paragraph = document.createElement('p');
    let chefImg = document.createElement('img');

    header.classList.add('welcome-header');
    subHeader.classList.add('welcome-subHeader');
    paragraph.classList.add('welcome-paragraph');
    chefImg.classList.add('welcome-img');

    header.textContent = 'Welcome to League Restaurant';
    subHeader.textContent = 'Feel the Experience Taste the Flavor';
    paragraph.textContent = 'Best products with a unique taste makes you special in League Restaurant. League Restaurant provide the most quality foods and chefs all over the world.';
    chefImg.setAttribute('src', '../dist/image/open.jpg');
    chefImg.setAttribute('width','100%');


    main.appendChild(header);
    main.appendChild(subHeader);
    main.appendChild(paragraph);
    main.appendChild(chefImg);

    return main;
}

export default welcome;


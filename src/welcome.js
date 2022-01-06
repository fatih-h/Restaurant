import coffee from './image/cof.jpg';
import sashimi from './image/sashimi.jpg';

function welcome() {
    let main = document.createElement('div');
    main.classList.add('welcome');

    let div1 = document.createElement('div');
    let header = document.createElement('h1');

    let div2 = document.createElement('div');
    let subHeader = document.createElement('h2');
    let img1 = document.createElement('img');
    let paragraph = document.createElement('p');
    let img2 = document.createElement('img');

    div1.classList.add('welcome-div1');
    header.classList.add('welcome-header');

    div2.classList.add('welcome-div2');
    subHeader.classList.add('welcome-subHeader');
    img1.classList.add('welcome-img1');
    paragraph.classList.add('welcome-paragraph');
    img2.classList.add('welcome-img2');

    header.textContent = 'Just like\ngrandma used \nto make';
    header.setAttribute('style', 'white-space: pre;');
    subHeader.textContent = 'Our Philosophy';
    paragraph.textContent = 'Best products with a unique taste makes you special in the Restaurant. The Restaurant provide the most quality foods and chefs all over the world.';
    img1.setAttribute('src', `${coffee}`);
    img2.setAttribute('src', `${sashimi}`);


    main.appendChild(div1);
    div1.appendChild(header);

    main.appendChild(subHeader);

    main.appendChild(div2);
    div2.appendChild(img1);
    div2.appendChild(paragraph);
    div2.appendChild(img2);

    return main;
}

export default welcome;


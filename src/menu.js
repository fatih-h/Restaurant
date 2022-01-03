function menu() {
    let main = document.createElement('div');
    main.classList.add('menu');

    let header = document.createElement('h1');
    let div1 = document.createElement('div');
    let div2 = document.createElement('div');
    let div3 = document.createElement('div');
    let div4 = document.createElement('div');

    let subHeader1 = document.createElement('h2');
    let food1 = document.createElement('h4');
    let food2 = document.createElement('h4');
    let food3 = document.createElement('h4');
    let food4 = document.createElement('h4');
    let food5 = document.createElement('h4');
    let food6 = document.createElement('h4');
    let food7 = document.createElement('h4');

    let subHeader2 = document.createElement('h2');
    let food8 = document.createElement('h4');
    let food9 = document.createElement('h4');
    let food10 = document.createElement('h4');


    let subHeader3 = document.createElement('h2');
    let food11 = document.createElement('h4');
    let food12 = document.createElement('h4');
    let food13 = document.createElement('h4');
    let food14 = document.createElement('h4');


    let subHeader4 = document.createElement('h2');
    let food15 = document.createElement('h4');
    let food16 = document.createElement('h4');
    let food17 = document.createElement('h4');
    let food18 = document.createElement('h4');


    header.classList.add('menu-header');
    div1.classList.add('menu-div1');
    div2.classList.add('menu-div2');
    div3.classList.add('menu-div3');
    div4.classList.add('menu-div4');

    subHeader1.classList.add('menu-subHeader1');

    subHeader2.classList.add('menu-subHeader2');
    subHeader3.classList.add('menu-subHeader3');
    subHeader4.classList.add('menu-subHeader4');

    header.textContent = 'MENU';

    subHeader1.textContent = 'Main-Course';
    food1.textContent = '$30 T-bone Steak';
    food2.textContent = '$20 Meatball with Cheese';
    food3.textContent = '$10 Grilled Chicken Wings';
    food4.textContent = '$40.45 Roast Prime Rib of Beef';
    food5.textContent = 'Creamy Beef and Mushroom';
    food6.textContent = '$13.95 The Italian Pizza';
    food7.textContent = '$18.89 Western Bacon Barbeque\nCheeseburger';
    food7.setAttribute('style', 'white-space: pre;');


    subHeader2.textContent = 'SeaFood';
    food8.textContent = '$29 Blue Ribbon';
    food9.textContent = '$17 Spicy Crab Roll';
    food10.textContent = '$23.50 California with King Crab';

    subHeader3.textContent = 'Dessert';
    food11.textContent = '$19.95 Apple Pie';
    food12.textContent = '$5.95 Tarts';
    food13.textContent = '$5.95 Cheesecake';
    food14.textContent = '$54.95 Gingerbread House';

    subHeader4.textContent = 'Drink';
    food15.textContent = '$2.95 Coffee Latte';
    food16.textContent = '$3.75 White Chocolate Mocha';
    food17.textContent = '$5 Turkish Coffee';
    food18.textContent = '$1 Water';


    main.appendChild(header);
    main.appendChild(div1);
    main.appendChild(div2);
    main.appendChild(div3);
    main.appendChild(div4);

    div1.appendChild(subHeader1);
    div1.appendChild(food1);
    div1.appendChild(food2);
    div1.appendChild(food3);
    div1.appendChild(food4);
    div1.appendChild(food5);
    div1.appendChild(food6);
    div1.appendChild(food7);

    div2.appendChild(subHeader2);
    div2.appendChild(food8);
    div2.appendChild(food9);
    div2.appendChild(food10);


    div3.appendChild(subHeader3);
    div3.appendChild(food11);
    div3.appendChild(food12);
    div3.appendChild(food13);
    div3.appendChild(food14);

    div4.appendChild(subHeader4);
    div4.appendChild(food15);
    div4.appendChild(food16);
    div4.appendChild(food17);
    div4.appendChild(food18);

    return main;
}

export default menu;
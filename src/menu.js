function menu(){
    let main = document.createElement('div');
    main.classList.add('menu');

    let header = document.createElement('h2');
    let subHeader1 = document.createElement('h3');
    let subHeader2 = document.createElement('h3');
    let subHeader3 = document.createElement('h3');
    let subHeader4 = document.createElement('h3');

    header.classList.add('menu-header');
    subHeader1.classList.add('menu-subHeader1');
    subHeader2.classList.add('menu-subHeader2');
    subHeader3.classList.add('menu-subHeader3');
    subHeader4.classList.add('menu-subHeader4');
    
    header.textContent = 'MENU';
    subHeader1.textContent = 'Main';
    subHeader2.textContent = 'SeaFood';
    subHeader3.textContent = 'Bakery';
    subHeader4.textContent = 'Beverage';

    main.appendChild(header);
    main.appendChild(subHeader1);
    main.appendChild(subHeader2);
    main.appendChild(subHeader3);
    main.appendChild(subHeader4);
    
    return main;
}

export default menu;
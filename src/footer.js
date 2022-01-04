function footer() {
    let main = document.createElement('div');
    main.classList.add('footer');

    let icons = document.createElement('div');
    let icon1 = document.createElement('i');
    let icon2 = document.createElement('i');
    let icon3 = document.createElement('i');
    let author = document.createElement('h6');

    icons.classList.add('footer-icons');
    author.classList.add('footer-author');
    icon1.classList.add('footer-i');
    icon2.classList.add('footer-i');
    icon3.classList.add('footer-i');

    icon1.innerHTML = '<a href="#"><i style="color:#a8763e;" class="fab fa-facebook-f fa-2x f-button"></i></a>';
    icon2.innerHTML = '<a href="#"><i style="color:#a8763e;" class="fab fa-instagram fa-2x f-button"></i></a>';
    icon3.innerHTML = '<a href="#"><i style="color:#a8763e;" class="fab fa-pinterest fa-2x f-button"></i></a>';
    author.textContent = 'Copyright © Me 2022';

    main.appendChild(icons);
    icons.appendChild(icon1);
    icons.appendChild(icon2);
    icons.appendChild(icon3);
    main.appendChild(author);

    return main;
}

export default footer;
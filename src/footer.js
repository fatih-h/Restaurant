function footer() {
    let main = document.createElement('div');
    main.classList.add('footer');

    let header = document.createElement('h3');
    let icon1 = document.createElement('i');
    let icon2 = document.createElement('i');
    let icon3 = document.createElement('i');
    let icon4 = document.createElement('i');
    let author = document.createElement('h5');

    header.classList.add('footer-header');
    author.classList.add('footer-author');

    main.appendChild(header);
    main.appendChild(author);

    return main;
}

export default footer();
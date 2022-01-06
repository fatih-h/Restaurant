import navigation from "./navigation";
import welcome from "./welcome";
import menu from "./menu";
import contact from "./contact";
import footer from "./footer";
import './style/style.css';



function web() {
    const content = document.getElementById('content');
    content.appendChild(navigation());
    content.appendChild(welcome());
    content.appendChild(footer());

    let count1 = 0, count2 = 0, count3 = 0;

    Array.from(document.getElementsByTagName('button')).forEach(e => {
        e.addEventListener('click', event => {
            if (document.getElementsByTagName('button')[0] == event.target) {
                count1++;
                if (count1 < 2 & (count2 || count3 != 0)) {
                    content.children[1].remove();
                    content.children[1].remove();
                    content.appendChild(welcome());
                    content.appendChild(footer());
                    count2 = 0;
                    count3 = 0;
                }
            }
            if (document.getElementsByTagName('button')[1] == event.target) {
                count2++;
                if (count2 < 2) {
                    content.children[1].remove();
                    content.children[1].remove();
                    content.appendChild(menu());
                    content.appendChild(footer());
                    count1 = 0;
                    count3 = 0;
                }
            }
            if (document.getElementsByTagName('button')[2] == event.target) {
                count3++;
                if (count3 < 2) {
                    content.children[1].remove();
                    content.children[1].remove();
                    content.appendChild(contact());
                    content.appendChild(footer());
                    count1 = 0;
                    count2 = 0;
                }
            }
        });
    });
}


export default web;
import navigation from "./navigation";
import welcome from "./welcome";
import menu from "./menu";
import contact from "./contact";
import footer from "./footer";

function web() {
    const content = document.getElementById('content');

    content.appendChild(navigation());
    content.appendChild(footer());
}


export default web;
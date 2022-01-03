import navigation from "./navigation";
import welcome from "./welcome";
import menu from "./menu";
import contact from "./contact";
import footer from "./footer";

const content = document.getElementById('content');
content.appendChild(navigation());
content.appendChild(menu());
content.appendChild(footer());
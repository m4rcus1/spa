import home from "./views/home.js";
import mouse from "./views/mouse.js";
import keyboard from "./views/keyboard.js";
import headphones from "./views/headphones.js";
import screen from "./views/screen.js";


        
const pathToRegex = path => new RegExp("^" + path.replace(/\//g, "\\/").replace(/:\w+/g, "(.+)") + "$");


const navigateTo = url => {
    history.pushState(null, null, url);
    router();
};

const router = async () => {
    const routes = [
        { path: "/", view: home },
        { path: "/mouse", view: mouse },
        { path: "/keyboard", view: keyboard },
        { path: "/headphones", view: headphones },
        { path: "/screen", view: screen},
    ];


    const potentialMatches = routes.map(route => {
        return {
            route: route,
            result: location.pathname.match(pathToRegex(route.path))
        };
    });

    let match = potentialMatches.find(potentialMatch => potentialMatch.result !== null);

    if (!match) {
        match = {
            route: routes[0],
            result: [location.pathname]
        };
    }

    const view = new match.route.view(match);

    document.querySelector("#part_web").innerHTML = await view.getHtml();
};

window.addEventListener("popstate", router);

document.addEventListener("DOMContentLoaded", () => {
    document.body.addEventListener("click", e => {
        if (e.target.matches("[data-link]")) {
            e.preventDefault();
            navigateTo(e.target.href);
        }
    });

    router();
});
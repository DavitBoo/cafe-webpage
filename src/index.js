import { backgroundImage } from "./backgroundImage"
import { navbar} from  "./navbar"
import { footer } from "./footer";
import { container } from "./container";
import { menu } from "./menu";
import { about } from "./about";

const contentDiv = document.getElementById('content')

contentDiv.appendChild(backgroundImage());
contentDiv.appendChild(navbar());

contentDiv.appendChild(container());
contentDiv.appendChild(menu());
contentDiv.appendChild(about());

contentDiv.appendChild(footer());

const homePage = document.getElementById('home')
const menuPage = document.getElementById('menu')
const aboutPage = document.getElementById('about')

const btnMenu = document.getElementById('btn-menu')

const pages = document.querySelectorAll('nav > ul > li > a')

//default value for Home page => page.classList.add('active')
pages[0].classList.add('active')


const activatePage = (p) => {
    p.classList.remove('hide')
    p.classList.add('not-hide')
}

const deactivatePage = (p) => {
    p.classList.add('hide')
    p.classList.remove('not-hide')
}

function checkDisplayMode() {
    if(pages[0].classList.contains('active'))  activatePage(homePage)
    else deactivatePage(homePage)

    if(pages[1].classList.contains('active')) activatePage(menuPage)
    else deactivatePage(menuPage)

    if(pages[2].classList.contains('active')) activatePage(aboutPage)
    else deactivatePage(aboutPage)
}

pages.forEach(page => {
    page.addEventListener('click', (e)  => {
        e.preventDefault();
        
        pages[0].classList.remove('active')
        pages[1].classList.remove('active')
        pages[2].classList.remove('active')
        page.classList.add('active')

        checkDisplayMode()
    })
})

btnMenu.addEventListener('click', () => {
    pages[0].classList.remove('active')
    pages[1].classList.add('active')

    checkDisplayMode()
})




/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
const contentDiv = document.getElementById('content')

function backgroundImage() {
    const element = document.createElement('div');
    element.classList.add('bg-img')

    return element;
}

function navbar() {
    const nav = document.createElement('nav')
    nav.innerHTML = `<ul>
    <li><a href="">Home</a></li>
    <li><a href="">Menu</a></li>
    <li><a href="">About</a></li>
</ul>`

    return nav
}


function footer() {
    const element = document.createElement('footer')
    element.innerHTML = ` <p>Developed by <a href="https://github.com/DavitBoo/">DavidBoo</a></p>
    <p>Foto de <a href="https://unsplash.com/@zarakvg?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Zarak Khan</a> en <a href="https://unsplash.com/es/fotos/69ilqMz0p1s?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a></p>`

    return element
}

function container() {
    const element = document.createElement('div')
    element.setAttribute('id','home');
    element.classList.add('container')
    element.innerHTML = `<h2>Welcome to,</h2>
    <h1>La Cafetería</h1>
    <hr>
    <p>Café de especialidad, cerveza artesana, juegos de mesa, repostería casera ¿Te vienes?</p>
    <button>Ver el menú</button>
    `
    

    return element
}


function menu() {
    const element = document.createElement('div')
    element.setAttribute('id','menu');
    element.classList.add('container')
    element.classList.add('hide')
    element.innerHTML = `<h2>Welcome to,</h2>
    <h1>Our Menú</h1>
    <hr>
    <div class="menu-container">
        <div>  
            <p>Café</p>                   
        </div>
        <div>   
            <p>Infusiones</p>
        </div>
        <div>  
            <p>Cervezas</p>
        </div>
        <div>    
            <p>Dulces</p>
        </div>
    </div>`

    return element
}


function about() {
    const element = document.createElement('div')
    element.setAttribute('id','about');
    element.classList.add('container')
    element.classList.add('hide')
    element.innerHTML = `<h2>Welcome to,</h2>
    <h1>About</h1>
    <hr>
    <p>Café de especialidad, cerveza artesana, juegos de mesa, repostería casera ¿Te vienes?</button>`

    return element
}


contentDiv.appendChild(backgroundImage());
contentDiv.appendChild(navbar());

contentDiv.appendChild(container());
contentDiv.appendChild(menu());
contentDiv.appendChild(about());

contentDiv.appendChild(footer());

const homePage = document.getElementById('home')
const menuPage = document.getElementById('menu')
const aboutPage = document.getElementById('about')
const pages = document.querySelectorAll('nav > ul > li > a')

//default value for Home page => page.classList.add('active')
pages[0].classList.add('active')

pages.forEach(page => {
    page.addEventListener('click', (e)  => {
        e.preventDefault();
        
        pages[0].classList.remove('active')
        pages[1].classList.remove('active')
        pages[2].classList.remove('active')
        page.classList.add('active')

        if(pages[0].classList.contains('active')){
            homePage.classList.remove('hide')
            homePage.classList.add('not-hide')
        } else{
            homePage.classList.add('hide')
            homePage.classList.remove('not-hide')
        }

        if(pages[1].classList.contains('active')){
            menuPage.classList.remove('hide')
            menuPage.classList.add('not-hide')
        } else{
            menuPage.classList.add('hide')
            menuPage.classList.remove('not-hide')
        }

        if(pages[2].classList.contains('active')){
            aboutPage.classList.remove('hide')
            aboutPage.classList.add('not-hide')
        } else{
            aboutPage.classList.add('hide')
            aboutPage.classList.remove('not-hide')
        }
    })
})




/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxDQUFDO0FBQ0Q7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vanMtcmVzdGF1cmFudC1wYWdlLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGNvbnRlbnREaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpXHJcblxyXG5mdW5jdGlvbiBiYWNrZ3JvdW5kSW1hZ2UoKSB7XHJcbiAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2JnLWltZycpXHJcblxyXG4gICAgcmV0dXJuIGVsZW1lbnQ7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIG5hdmJhcigpIHtcclxuICAgIGNvbnN0IG5hdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ25hdicpXHJcbiAgICBuYXYuaW5uZXJIVE1MID0gYDx1bD5cclxuICAgIDxsaT48YSBocmVmPVwiXCI+SG9tZTwvYT48L2xpPlxyXG4gICAgPGxpPjxhIGhyZWY9XCJcIj5NZW51PC9hPjwvbGk+XHJcbiAgICA8bGk+PGEgaHJlZj1cIlwiPkFib3V0PC9hPjwvbGk+XHJcbjwvdWw+YFxyXG5cclxuICAgIHJldHVybiBuYXZcclxufVxyXG5cclxuXHJcbmZ1bmN0aW9uIGZvb3RlcigpIHtcclxuICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb290ZXInKVxyXG4gICAgZWxlbWVudC5pbm5lckhUTUwgPSBgIDxwPkRldmVsb3BlZCBieSA8YSBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL0Rhdml0Qm9vL1wiPkRhdmlkQm9vPC9hPjwvcD5cclxuICAgIDxwPkZvdG8gZGUgPGEgaHJlZj1cImh0dHBzOi8vdW5zcGxhc2guY29tL0B6YXJha3ZnP3V0bV9zb3VyY2U9dW5zcGxhc2gmdXRtX21lZGl1bT1yZWZlcnJhbCZ1dG1fY29udGVudD1jcmVkaXRDb3B5VGV4dFwiPlphcmFrIEtoYW48L2E+IGVuIDxhIGhyZWY9XCJodHRwczovL3Vuc3BsYXNoLmNvbS9lcy9mb3Rvcy82OWlscU16MHAxcz91dG1fc291cmNlPXVuc3BsYXNoJnV0bV9tZWRpdW09cmVmZXJyYWwmdXRtX2NvbnRlbnQ9Y3JlZGl0Q29weVRleHRcIj5VbnNwbGFzaDwvYT48L3A+YFxyXG5cclxuICAgIHJldHVybiBlbGVtZW50XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNvbnRhaW5lcigpIHtcclxuICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG4gICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2lkJywnaG9tZScpO1xyXG4gICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKCdjb250YWluZXInKVxyXG4gICAgZWxlbWVudC5pbm5lckhUTUwgPSBgPGgyPldlbGNvbWUgdG8sPC9oMj5cclxuICAgIDxoMT5MYSBDYWZldGVyw61hPC9oMT5cclxuICAgIDxocj5cclxuICAgIDxwPkNhZsOpIGRlIGVzcGVjaWFsaWRhZCwgY2VydmV6YSBhcnRlc2FuYSwganVlZ29zIGRlIG1lc2EsIHJlcG9zdGVyw61hIGNhc2VyYSDCv1RlIHZpZW5lcz88L3A+XHJcbiAgICA8YnV0dG9uPlZlciBlbCBtZW7DujwvYnV0dG9uPlxyXG4gICAgYFxyXG4gICAgXHJcblxyXG4gICAgcmV0dXJuIGVsZW1lbnRcclxufVxyXG5cclxuXHJcbmZ1bmN0aW9uIG1lbnUoKSB7XHJcbiAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKCdpZCcsJ21lbnUnKTtcclxuICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnY29udGFpbmVyJylcclxuICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnaGlkZScpXHJcbiAgICBlbGVtZW50LmlubmVySFRNTCA9IGA8aDI+V2VsY29tZSB0byw8L2gyPlxyXG4gICAgPGgxPk91ciBNZW7DujwvaDE+XHJcbiAgICA8aHI+XHJcbiAgICA8ZGl2IGNsYXNzPVwibWVudS1jb250YWluZXJcIj5cclxuICAgICAgICA8ZGl2PiAgXHJcbiAgICAgICAgICAgIDxwPkNhZsOpPC9wPiAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2PiAgIFxyXG4gICAgICAgICAgICA8cD5JbmZ1c2lvbmVzPC9wPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXY+ICBcclxuICAgICAgICAgICAgPHA+Q2VydmV6YXM8L3A+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdj4gICAgXHJcbiAgICAgICAgICAgIDxwPkR1bGNlczwvcD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PmBcclxuXHJcbiAgICByZXR1cm4gZWxlbWVudFxyXG59XHJcblxyXG5cclxuZnVuY3Rpb24gYWJvdXQoKSB7XHJcbiAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKCdpZCcsJ2Fib3V0Jyk7XHJcbiAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2NvbnRhaW5lcicpXHJcbiAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2hpZGUnKVxyXG4gICAgZWxlbWVudC5pbm5lckhUTUwgPSBgPGgyPldlbGNvbWUgdG8sPC9oMj5cclxuICAgIDxoMT5BYm91dDwvaDE+XHJcbiAgICA8aHI+XHJcbiAgICA8cD5DYWbDqSBkZSBlc3BlY2lhbGlkYWQsIGNlcnZlemEgYXJ0ZXNhbmEsIGp1ZWdvcyBkZSBtZXNhLCByZXBvc3RlcsOtYSBjYXNlcmEgwr9UZSB2aWVuZXM/PC9idXR0b24+YFxyXG5cclxuICAgIHJldHVybiBlbGVtZW50XHJcbn1cclxuXHJcblxyXG5jb250ZW50RGl2LmFwcGVuZENoaWxkKGJhY2tncm91bmRJbWFnZSgpKTtcclxuY29udGVudERpdi5hcHBlbmRDaGlsZChuYXZiYXIoKSk7XHJcblxyXG5jb250ZW50RGl2LmFwcGVuZENoaWxkKGNvbnRhaW5lcigpKTtcclxuY29udGVudERpdi5hcHBlbmRDaGlsZChtZW51KCkpO1xyXG5jb250ZW50RGl2LmFwcGVuZENoaWxkKGFib3V0KCkpO1xyXG5cclxuY29udGVudERpdi5hcHBlbmRDaGlsZChmb290ZXIoKSk7XHJcblxyXG5jb25zdCBob21lUGFnZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdob21lJylcclxuY29uc3QgbWVudVBhZ2UgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWVudScpXHJcbmNvbnN0IGFib3V0UGFnZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhYm91dCcpXHJcbmNvbnN0IHBhZ2VzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnbmF2ID4gdWwgPiBsaSA+IGEnKVxyXG5cclxuLy9kZWZhdWx0IHZhbHVlIGZvciBIb21lIHBhZ2UgPT4gcGFnZS5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKVxyXG5wYWdlc1swXS5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKVxyXG5cclxucGFnZXMuZm9yRWFjaChwYWdlID0+IHtcclxuICAgIHBhZ2UuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgID0+IHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgcGFnZXNbMF0uY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJylcclxuICAgICAgICBwYWdlc1sxXS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKVxyXG4gICAgICAgIHBhZ2VzWzJdLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpXHJcbiAgICAgICAgcGFnZS5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKVxyXG5cclxuICAgICAgICBpZihwYWdlc1swXS5jbGFzc0xpc3QuY29udGFpbnMoJ2FjdGl2ZScpKXtcclxuICAgICAgICAgICAgaG9tZVBhZ2UuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpXHJcbiAgICAgICAgICAgIGhvbWVQYWdlLmNsYXNzTGlzdC5hZGQoJ25vdC1oaWRlJylcclxuICAgICAgICB9IGVsc2V7XHJcbiAgICAgICAgICAgIGhvbWVQYWdlLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKVxyXG4gICAgICAgICAgICBob21lUGFnZS5jbGFzc0xpc3QucmVtb3ZlKCdub3QtaGlkZScpXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZihwYWdlc1sxXS5jbGFzc0xpc3QuY29udGFpbnMoJ2FjdGl2ZScpKXtcclxuICAgICAgICAgICAgbWVudVBhZ2UuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpXHJcbiAgICAgICAgICAgIG1lbnVQYWdlLmNsYXNzTGlzdC5hZGQoJ25vdC1oaWRlJylcclxuICAgICAgICB9IGVsc2V7XHJcbiAgICAgICAgICAgIG1lbnVQYWdlLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKVxyXG4gICAgICAgICAgICBtZW51UGFnZS5jbGFzc0xpc3QucmVtb3ZlKCdub3QtaGlkZScpXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZihwYWdlc1syXS5jbGFzc0xpc3QuY29udGFpbnMoJ2FjdGl2ZScpKXtcclxuICAgICAgICAgICAgYWJvdXRQYWdlLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKVxyXG4gICAgICAgICAgICBhYm91dFBhZ2UuY2xhc3NMaXN0LmFkZCgnbm90LWhpZGUnKVxyXG4gICAgICAgIH0gZWxzZXtcclxuICAgICAgICAgICAgYWJvdXRQYWdlLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKVxyXG4gICAgICAgICAgICBhYm91dFBhZ2UuY2xhc3NMaXN0LnJlbW92ZSgnbm90LWhpZGUnKVxyXG4gICAgICAgIH1cclxuICAgIH0pXHJcbn0pXHJcblxyXG5cclxuXHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==
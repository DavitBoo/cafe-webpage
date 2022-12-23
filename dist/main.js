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
    <button id="btn-menu">Ver el menú</button>
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
            <div>
                <p>Espresso</p><p>1,30</p>
                <p>Doble espresso</p><p>1,30</p>
                <p>Café con leche</p><p>1,30</p>
                <p>Capuccino</p><p>1,30</p>
                <p>Black white</p><p>1,30</p>
            </div>                  
        </div>
        <div>   
            <p>Infusiones</p>
            <div>
                <p>Tibetana</p><p>1,30</p>
                <p>African Chai</p><p>1,30</p>
                <p>Té Negro</p><p>1,30</p>
                <p>Earl Grey</p><p>1,30</p>
                <p>English Breakfast</p><p>1,30</p>
            </div>    
        </div>
        <div>  
            <p>Cervezas</p>
            <div>
                <p>Cervezas lager</p><p>1,30</p>
                <p>Pilsen</p><p>1,30</p>
                <p>CSpezial</p><p>1,30</p>
                <p>Dortmunster</p><p>1,30</p>
                <p>Schwarzbier</p><p>1,30</p>
            </div>    
        </div>
        <div>    
            <p>Dulces & Pintxos</p>
            <div>
                <p>Tortilla</p><p>1,30</p>
                <p>Croissant Relleno</p><p>1,30</p>
                <p>Cookie</p><p>1,30</p>
                <p>Tarta de queso</p><p>1,30</p>
            </div>    
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
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque placerat, tellus sit amet ultrices porttitor, ex ex aliquet purus, pellentesque rhoncus felis ipsum nec purus. Donec id enim in risus pellentesque blandit. Proin sed nibh nec arcu mollis rhoncus in sit amet augue. Suspendisse magna nisl, eleifend non tempor et, luctus id quam. Nulla bibendum vulputate ante, non malesuada eros lobortis euismod`

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

const btnMenu = document.getElementById('btn-menu')

const pages = document.querySelectorAll('nav > ul > li > a')

//default value for Home page => page.classList.add('active')
pages[0].classList.add('active')


function checkDisplayMode() {
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




/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qcy1yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgY29udGVudERpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50JylcclxuXHJcbmZ1bmN0aW9uIGJhY2tncm91bmRJbWFnZSgpIHtcclxuICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnYmctaW1nJylcclxuXHJcbiAgICByZXR1cm4gZWxlbWVudDtcclxufVxyXG5cclxuZnVuY3Rpb24gbmF2YmFyKCkge1xyXG4gICAgY29uc3QgbmF2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbmF2JylcclxuICAgIG5hdi5pbm5lckhUTUwgPSBgPHVsPlxyXG4gICAgPGxpPjxhIGhyZWY9XCJcIj5Ib21lPC9hPjwvbGk+XHJcbiAgICA8bGk+PGEgaHJlZj1cIlwiPk1lbnU8L2E+PC9saT5cclxuICAgIDxsaT48YSBocmVmPVwiXCI+QWJvdXQ8L2E+PC9saT5cclxuPC91bD5gXHJcblxyXG4gICAgcmV0dXJuIG5hdlxyXG59XHJcblxyXG5cclxuZnVuY3Rpb24gZm9vdGVyKCkge1xyXG4gICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvb3RlcicpXHJcbiAgICBlbGVtZW50LmlubmVySFRNTCA9IGAgPHA+RGV2ZWxvcGVkIGJ5IDxhIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vRGF2aXRCb28vXCI+RGF2aWRCb288L2E+PC9wPlxyXG4gICAgPHA+Rm90byBkZSA8YSBocmVmPVwiaHR0cHM6Ly91bnNwbGFzaC5jb20vQHphcmFrdmc/dXRtX3NvdXJjZT11bnNwbGFzaCZ1dG1fbWVkaXVtPXJlZmVycmFsJnV0bV9jb250ZW50PWNyZWRpdENvcHlUZXh0XCI+WmFyYWsgS2hhbjwvYT4gZW4gPGEgaHJlZj1cImh0dHBzOi8vdW5zcGxhc2guY29tL2VzL2ZvdG9zLzY5aWxxTXowcDFzP3V0bV9zb3VyY2U9dW5zcGxhc2gmdXRtX21lZGl1bT1yZWZlcnJhbCZ1dG1fY29udGVudD1jcmVkaXRDb3B5VGV4dFwiPlVuc3BsYXNoPC9hPjwvcD5gXHJcblxyXG4gICAgcmV0dXJuIGVsZW1lbnRcclxufVxyXG5cclxuZnVuY3Rpb24gY29udGFpbmVyKCkge1xyXG4gICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbiAgICBlbGVtZW50LnNldEF0dHJpYnV0ZSgnaWQnLCdob21lJyk7XHJcbiAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2NvbnRhaW5lcicpXHJcbiAgICBlbGVtZW50LmlubmVySFRNTCA9IGA8aDI+V2VsY29tZSB0byw8L2gyPlxyXG4gICAgPGgxPkxhIENhZmV0ZXLDrWE8L2gxPlxyXG4gICAgPGhyPlxyXG4gICAgPHA+Q2Fmw6kgZGUgZXNwZWNpYWxpZGFkLCBjZXJ2ZXphIGFydGVzYW5hLCBqdWVnb3MgZGUgbWVzYSwgcmVwb3N0ZXLDrWEgY2FzZXJhIMK/VGUgdmllbmVzPzwvcD5cclxuICAgIDxidXR0b24gaWQ9XCJidG4tbWVudVwiPlZlciBlbCBtZW7DujwvYnV0dG9uPlxyXG4gICAgYFxyXG4gICAgXHJcblxyXG4gICAgcmV0dXJuIGVsZW1lbnRcclxufVxyXG5cclxuXHJcbmZ1bmN0aW9uIG1lbnUoKSB7XHJcbiAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKCdpZCcsJ21lbnUnKTtcclxuICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnY29udGFpbmVyJylcclxuICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnaGlkZScpXHJcbiAgICBlbGVtZW50LmlubmVySFRNTCA9IGA8aDI+V2VsY29tZSB0byw8L2gyPlxyXG4gICAgPGgxPk91ciBNZW7DujwvaDE+XHJcbiAgICA8aHI+XHJcbiAgICA8ZGl2IGNsYXNzPVwibWVudS1jb250YWluZXJcIj5cclxuICAgICAgICA8ZGl2PiAgXHJcbiAgICAgICAgICAgIDxwPkNhZsOpPC9wPiBcclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxwPkVzcHJlc3NvPC9wPjxwPjEsMzA8L3A+XHJcbiAgICAgICAgICAgICAgICA8cD5Eb2JsZSBlc3ByZXNzbzwvcD48cD4xLDMwPC9wPlxyXG4gICAgICAgICAgICAgICAgPHA+Q2Fmw6kgY29uIGxlY2hlPC9wPjxwPjEsMzA8L3A+XHJcbiAgICAgICAgICAgICAgICA8cD5DYXB1Y2Npbm88L3A+PHA+MSwzMDwvcD5cclxuICAgICAgICAgICAgICAgIDxwPkJsYWNrIHdoaXRlPC9wPjxwPjEsMzA8L3A+XHJcbiAgICAgICAgICAgIDwvZGl2PiAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXY+ICAgXHJcbiAgICAgICAgICAgIDxwPkluZnVzaW9uZXM8L3A+XHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8cD5UaWJldGFuYTwvcD48cD4xLDMwPC9wPlxyXG4gICAgICAgICAgICAgICAgPHA+QWZyaWNhbiBDaGFpPC9wPjxwPjEsMzA8L3A+XHJcbiAgICAgICAgICAgICAgICA8cD5Uw6kgTmVncm88L3A+PHA+MSwzMDwvcD5cclxuICAgICAgICAgICAgICAgIDxwPkVhcmwgR3JleTwvcD48cD4xLDMwPC9wPlxyXG4gICAgICAgICAgICAgICAgPHA+RW5nbGlzaCBCcmVha2Zhc3Q8L3A+PHA+MSwzMDwvcD5cclxuICAgICAgICAgICAgPC9kaXY+ICAgIFxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXY+ICBcclxuICAgICAgICAgICAgPHA+Q2VydmV6YXM8L3A+XHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8cD5DZXJ2ZXphcyBsYWdlcjwvcD48cD4xLDMwPC9wPlxyXG4gICAgICAgICAgICAgICAgPHA+UGlsc2VuPC9wPjxwPjEsMzA8L3A+XHJcbiAgICAgICAgICAgICAgICA8cD5DU3BlemlhbDwvcD48cD4xLDMwPC9wPlxyXG4gICAgICAgICAgICAgICAgPHA+RG9ydG11bnN0ZXI8L3A+PHA+MSwzMDwvcD5cclxuICAgICAgICAgICAgICAgIDxwPlNjaHdhcnpiaWVyPC9wPjxwPjEsMzA8L3A+XHJcbiAgICAgICAgICAgIDwvZGl2PiAgICBcclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2PiAgICBcclxuICAgICAgICAgICAgPHA+RHVsY2VzICYgUGludHhvczwvcD5cclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxwPlRvcnRpbGxhPC9wPjxwPjEsMzA8L3A+XHJcbiAgICAgICAgICAgICAgICA8cD5Dcm9pc3NhbnQgUmVsbGVubzwvcD48cD4xLDMwPC9wPlxyXG4gICAgICAgICAgICAgICAgPHA+Q29va2llPC9wPjxwPjEsMzA8L3A+XHJcbiAgICAgICAgICAgICAgICA8cD5UYXJ0YSBkZSBxdWVzbzwvcD48cD4xLDMwPC9wPlxyXG4gICAgICAgICAgICA8L2Rpdj4gICAgXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5gXHJcblxyXG4gICAgcmV0dXJuIGVsZW1lbnRcclxufVxyXG5cclxuXHJcbmZ1bmN0aW9uIGFib3V0KCkge1xyXG4gICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbiAgICBlbGVtZW50LnNldEF0dHJpYnV0ZSgnaWQnLCdhYm91dCcpO1xyXG4gICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKCdjb250YWluZXInKVxyXG4gICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKCdoaWRlJylcclxuICAgIGVsZW1lbnQuaW5uZXJIVE1MID0gYDxoMj5XZWxjb21lIHRvLDwvaDI+XHJcbiAgICA8aDE+QWJvdXQ8L2gxPlxyXG4gICAgPGhyPlxyXG4gICAgPHA+TG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdC4gUGVsbGVudGVzcXVlIHBsYWNlcmF0LCB0ZWxsdXMgc2l0IGFtZXQgdWx0cmljZXMgcG9ydHRpdG9yLCBleCBleCBhbGlxdWV0IHB1cnVzLCBwZWxsZW50ZXNxdWUgcmhvbmN1cyBmZWxpcyBpcHN1bSBuZWMgcHVydXMuIERvbmVjIGlkIGVuaW0gaW4gcmlzdXMgcGVsbGVudGVzcXVlIGJsYW5kaXQuIFByb2luIHNlZCBuaWJoIG5lYyBhcmN1IG1vbGxpcyByaG9uY3VzIGluIHNpdCBhbWV0IGF1Z3VlLiBTdXNwZW5kaXNzZSBtYWduYSBuaXNsLCBlbGVpZmVuZCBub24gdGVtcG9yIGV0LCBsdWN0dXMgaWQgcXVhbS4gTnVsbGEgYmliZW5kdW0gdnVscHV0YXRlIGFudGUsIG5vbiBtYWxlc3VhZGEgZXJvcyBsb2JvcnRpcyBldWlzbW9kYFxyXG5cclxuICAgIHJldHVybiBlbGVtZW50XHJcbn1cclxuXHJcblxyXG5jb250ZW50RGl2LmFwcGVuZENoaWxkKGJhY2tncm91bmRJbWFnZSgpKTtcclxuY29udGVudERpdi5hcHBlbmRDaGlsZChuYXZiYXIoKSk7XHJcblxyXG5jb250ZW50RGl2LmFwcGVuZENoaWxkKGNvbnRhaW5lcigpKTtcclxuY29udGVudERpdi5hcHBlbmRDaGlsZChtZW51KCkpO1xyXG5jb250ZW50RGl2LmFwcGVuZENoaWxkKGFib3V0KCkpO1xyXG5cclxuY29udGVudERpdi5hcHBlbmRDaGlsZChmb290ZXIoKSk7XHJcblxyXG5jb25zdCBob21lUGFnZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdob21lJylcclxuY29uc3QgbWVudVBhZ2UgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWVudScpXHJcbmNvbnN0IGFib3V0UGFnZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhYm91dCcpXHJcblxyXG5jb25zdCBidG5NZW51ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2J0bi1tZW51JylcclxuXHJcbmNvbnN0IHBhZ2VzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnbmF2ID4gdWwgPiBsaSA+IGEnKVxyXG5cclxuLy9kZWZhdWx0IHZhbHVlIGZvciBIb21lIHBhZ2UgPT4gcGFnZS5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKVxyXG5wYWdlc1swXS5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKVxyXG5cclxuXHJcbmZ1bmN0aW9uIGNoZWNrRGlzcGxheU1vZGUoKSB7XHJcbiAgICBpZihwYWdlc1swXS5jbGFzc0xpc3QuY29udGFpbnMoJ2FjdGl2ZScpKXtcclxuICAgICAgICBob21lUGFnZS5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJylcclxuICAgICAgICBob21lUGFnZS5jbGFzc0xpc3QuYWRkKCdub3QtaGlkZScpXHJcbiAgICB9IGVsc2V7XHJcbiAgICAgICAgaG9tZVBhZ2UuY2xhc3NMaXN0LmFkZCgnaGlkZScpXHJcbiAgICAgICAgaG9tZVBhZ2UuY2xhc3NMaXN0LnJlbW92ZSgnbm90LWhpZGUnKVxyXG4gICAgfVxyXG5cclxuICAgIGlmKHBhZ2VzWzFdLmNsYXNzTGlzdC5jb250YWlucygnYWN0aXZlJykpe1xyXG4gICAgICAgIG1lbnVQYWdlLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKVxyXG4gICAgICAgIG1lbnVQYWdlLmNsYXNzTGlzdC5hZGQoJ25vdC1oaWRlJylcclxuICAgIH0gZWxzZXtcclxuICAgICAgICBtZW51UGFnZS5jbGFzc0xpc3QuYWRkKCdoaWRlJylcclxuICAgICAgICBtZW51UGFnZS5jbGFzc0xpc3QucmVtb3ZlKCdub3QtaGlkZScpXHJcbiAgICB9XHJcblxyXG4gICAgaWYocGFnZXNbMl0uY2xhc3NMaXN0LmNvbnRhaW5zKCdhY3RpdmUnKSl7XHJcbiAgICAgICAgYWJvdXRQYWdlLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKVxyXG4gICAgICAgIGFib3V0UGFnZS5jbGFzc0xpc3QuYWRkKCdub3QtaGlkZScpXHJcbiAgICB9IGVsc2V7XHJcbiAgICAgICAgYWJvdXRQYWdlLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKVxyXG4gICAgICAgIGFib3V0UGFnZS5jbGFzc0xpc3QucmVtb3ZlKCdub3QtaGlkZScpXHJcbiAgICB9XHJcbn1cclxuXHJcbnBhZ2VzLmZvckVhY2gocGFnZSA9PiB7XHJcbiAgICBwYWdlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpICA9PiB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHBhZ2VzWzBdLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpXHJcbiAgICAgICAgcGFnZXNbMV0uY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJylcclxuICAgICAgICBwYWdlc1syXS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKVxyXG4gICAgICAgIHBhZ2UuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJylcclxuXHJcbiAgICAgICAgY2hlY2tEaXNwbGF5TW9kZSgpXHJcbiAgICB9KVxyXG59KVxyXG5cclxuYnRuTWVudS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgIHBhZ2VzWzBdLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpXHJcbiAgICBwYWdlc1sxXS5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKVxyXG5cclxuICAgIGNoZWNrRGlzcGxheU1vZGUoKVxyXG59KVxyXG5cclxuXHJcblxyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=
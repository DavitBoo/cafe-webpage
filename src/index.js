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




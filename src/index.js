const contentDiv = document.getElementById('content')

// function component() {
//     const element = document.createElement('div');
  
//     // Lodash, currently included via a script, is required for this line to work
//     element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  
//     return element;
//   }
  
//   document.body.appendChild(component());

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

function container() {
    const element = document.createElement('div')
    element.classList.add('container')
    element.innerHTML = `<h2>Welcome to,</h2>
    <h1>Lorem, ipsum dolor.</h1>
    <hr>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
    <button>See the menu</button>`

    return element
}


function footer() {
    const element = document.createElement('footer')
    element.innerHTML = ` <p>Developed by <a href="https://github.com/DavitBoo/">DavidBoo</a></p>
    <p>Foto de <a href="https://unsplash.com/@zarakvg?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Zarak Khan</a> en <a href="https://unsplash.com/es/fotos/69ilqMz0p1s?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a></p>`

    return element
}

contentDiv.appendChild(backgroundImage());
contentDiv.appendChild(navbar());
contentDiv.appendChild(container());
contentDiv.appendChild(footer());
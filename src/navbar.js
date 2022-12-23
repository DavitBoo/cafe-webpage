const navbar = () => {
    const nav = document.createElement('nav')
    nav.innerHTML = `<ul>
    <li><a href="">Home</a></li>
    <li><a href="">Menu</a></li>
    <li><a href="">About</a></li>
</ul>`

    return nav
}

export { navbar }
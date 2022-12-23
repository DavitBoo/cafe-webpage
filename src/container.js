
const container = () => {
    const element = document.createElement('div')
    element.setAttribute('id','home');
    element.classList.add('container')
    element.innerHTML = `<div class="flex-container">
        <h2>Welcome to,</h2>
        <h1>La Cafetería</h1>
        <hr>
        <p>Café de especialidad, cerveza artesana, juegos de mesa, repostería casera ¿Te vienes?</p>
        <button id="btn-menu">Ver el menú</button>
    </div>
    `

    return element
}

export { container }
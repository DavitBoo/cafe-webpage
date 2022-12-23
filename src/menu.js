const menu = () => {
    const element = document.createElement('div')
    element.setAttribute('id','menu');
    element.classList.add('container')
    element.classList.add('hide')
    element.innerHTML = `<h2>You can check,</h2>
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

export { menu }
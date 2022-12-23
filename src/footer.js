const footer = () => {
    const element = document.createElement('footer')
    element.innerHTML = ` <p>Developed by <a href="https://github.com/DavitBoo/">DavidBoo</a></p>
    <p>Foto de <a href="https://unsplash.com/@zarakvg?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Zarak Khan</a> en <a href="https://unsplash.com/es/fotos/69ilqMz0p1s?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a></p>`

    return element
}

export { footer }
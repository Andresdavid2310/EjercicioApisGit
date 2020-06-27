
//ejercicio1
//forma1
document.getElementsByTagName('h1')[0].innerText = "Nuevo Titulo"
//forma2
document.getElementsByClassName('titulo')[0].children[0].innerText = 'otro nuevo titulo'
//forma3
document.querySelector('h1').innerText = 'Otro titulo'


document.querySelectorAll('menu')


//ejercicio2

let liElement = document.createElement('li')
liElement.innerHTML = '<a href="">item5</a>'
document.querySelector('.menu ul').append(liElement)


//Ejercicio3
document.querySelector('.image ').innerHTML = "loading"

setTimeout(() => {
     const IMG ="https://jml.neocities.org/html5-css3-js.png"
     document.querySelector('.image').innerHTML = 
     `<img src = ${IMG} alt = "imagen">`
}, 2000);

//Ejercicio 4

let paragraph = `
     Este es un nuevo texto con una palabra en 
     <strong>negrita</strong>
`
document.querySelector('.titulo p').innerHTML = paragraph
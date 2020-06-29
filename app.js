
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


// ejercicio 5

/* Completar datos */
/* Buscar 2 usuarios válidos en la */
/* API de Github mediante una */
/* función asíncrona y completar */
/* para ambos su nombre y foto */
let datos=[]
const githubUsers = [
     'calypsobronte ',
     'marcewp15' 
]
const URL = 'https://api.github.com/users'

let getUserGithubAsync = async(username) => {
     try{
          let response = await fetch(`${URL}/${username}`)
          let data = await response.json()
          console.log(data)
          return data
     }
     catch(exeption){
          console.log(exeption)
          return exeption
     }     
}



let images = document.querySelectorAll('.listimg')
const TITTLES = document.querySelectorAll('.text h3')

console.log(images)
githubUsers.forEach(async (user, index) =>{
     datos = await getUserGithubAsync(user)
     let img = document.createElement('img')
     img.src = datos.avatar_url
     img.className = `"img${index+1}"`   
     console.log(images[index])
     console.log(img) 
     TITTLES[index].innerHTML = datos.name
     images[0].appendChild(img)  
})


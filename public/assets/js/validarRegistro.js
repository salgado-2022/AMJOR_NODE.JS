const validar = () =>{
let nombre = document.querySelector('#nombre').value
let correo = document.querySelector('#correo').value
let contrasena = document.querySelector('#contrasena').value
let confirmarContrasena = document.querySelector('#confirmarContrasena').value

if(nombre == "" || correo == "" || contrasena == ""){
    alert('Complete todos los campos del formulario!')
}else if(contrasena != confirmarContrasena){
    alert('Las contraseñas no coinciden!')
}

}

const nombre = document.getElementById("nombre")
const correo = document.getElementById("correo")
const contrasena = document.getElementById("contrasena")
const confirmarContrasena = document.getElementById("confirmarContrasena")
const form = document.getElementById("form")
const parrafo = document.getElementById("warnings")

form.addEventListener("submit", x=>{
    x.preventDefault()
    let warnings = ""
    let entrar = false
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/

    if(nombre.value.length <6){
        warnings += `El nombre es demasiado corto <br>`
        entrar = true
    }

    console.log(regexEmail.test(correo.value))
    if(!regexEmail.test(correo.value)){
        warnings += `El correo no es valido <br>`
        entrar = true
    }

    if(contrasena.value.length < 5){
        warnings += `La contraseña es muy corta <br>`
        entrar = true
    }
    
    if(entrar){
        parrafo.innerHTML = warnings
    }
} )

const boton = document.querySelector('#botonRegistrar')
boton.addEventListener('click', validar)
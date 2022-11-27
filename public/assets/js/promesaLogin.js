const registros = [
     {
         correo: 'nia@gmail.com',
         contrasena: '123'
     },

     {
         correo: 'juan@gmail.com',
         contrasena: '321'
     },

     {
         correo: 'dani@gmail.com',
         contrasena: '222'
     },
     {
         correo: 'tomo@gmail.com',
         contrasena: 'tomisgamer777'
     }
 ]

 const getUsuarios = () =>{
     let nombreU = document.querySelector('#correo').value
     let pass = document.querySelector('#pass').value
     return new Promise( (resolve, reject) =>{
         let existente = false
         registros.forEach(registro => {
             if(registro.correo == nombreU && registro.contrasena == pass){
                 existente = true
             }
        })
         if(existente == true){
             window.location='inicio'
         }else{
             reject(alert('Usuario no encontrado'))
         }
     })
 }



const correo = document.getElementById("correo")
const pass = document.getElementById("pass")
const form = document.getElementById("form")
const parrafo = document.getElementById("warnings")

form.addEventListener("submit", e=>{
    e.preventDefault()
    let warnings = ""
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    let entrar = false
    
    console.log(regexEmail.test(correo.value))
    if(!regexEmail.test(correo.value)){
        warnings += `El correo no es valido <br>`
        entrar = true
    }
    if(pass.value.length < 5){
        warnings += `La contraseña no es valida <br>`
        entrar = true
    }
    if(entrar){
        parrafo.innerHTML = warnings
    }
} )

const validar = document.querySelector('#boton')
validar.addEventListener('click',getUsuarios)
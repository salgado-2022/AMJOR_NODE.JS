const validarForm = () => {
    let documento = document.querySelector('#documento').value
    let nombre = document.querySelector('#Nombre').value
    let email = document.querySelector('#Correo').value
    let rol = document.querySelector('#selectRol').value
    let contrasena = document.querySelector('#Contra').value
    let contrasenaconfi = document.querySelector('#Contraconfi').value


    if (documento =="" || nombre =="" || email =="" || rol =="" || contrasena ==""||contrasenaconfi == "" ) {
        alert('Diligencie todos los datos de nuevo Usuario. gracias. :)')
    }else{
        alert("Todo esta correcto, ¡Usuario creado Correctamente!");
        return true;
    }
}   

const buttonBut = document.querySelector('#boton')
buttonBut.addEventListener('click',validarForm)
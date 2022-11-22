
const camposAncheta = () =>{
    let nombre = document.querySelector('#nombreAncheta').value
    let descripcion = document.querySelector('#descAncheta').value 

    if (nombre == "" || descripcion == "") {
        alert('Por favor llene todos los campos obligatorios, es decir, los que están marcados con un *')
    }else{
        alert('Ancheta agregada correctamente.')
    }
}

const botonVCarrito = document.querySelector('#botonCarrito')
botonVCarrito.addEventListener('click',validarCarrito)
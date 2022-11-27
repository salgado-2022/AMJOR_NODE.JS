
// const pedidosV = () =>{
//     let documento = document.querySelector('#documento').value
//     let nombre = document.querySelector('#cliente').value 
//     let producto = document.querySelector('#producto').value 
//     let direccion = document.querySelector('#direccion').value 

//     if (documento =="" || nombre=="" || producto=="" || direccion=="") {
//         alert('Diligencie todos los datos del formulario')
//     }else{
//         alert('Pedido creado correctamente')
//     }
// }

// const botonV = document.querySelector('#boton')
// botonV.addEventListener('click',pedidosV)


function aceptadoCorrectamente() {
    Swal.fire({
        icon: 'success',
        title: 'Pedido Aceptado',
        text: 'Se acepto el pedido correctamente',
        showConfirmButton: false,
        timer: 2000
    })
}

function confirmarRechazar() {
    Swal.fire({
        title: '¿Estás seguro?',
        text: "Tendras que comunicarte con el cliente ",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Sí, estoy seguro',
        cancelButtonText: 'Cancelar'
    }).then((result) => {
        if (result.isConfirmed) {
            Swal.fire({
                icon: 'success',
                title: 'Pedido Rechazado',
                text: 'El pedido fue rechazado correctamente.',
                showConfirmButton: false,
                timer: 1500
            })
        }
    })
}


const validarInsumosModificados = () => {

    var cantidad = document.querySelector('#cantidad').value
    
    if (cantidad == 0) {
        error()
    }else{
        insumoModificado()
    }

}

function error() {
    Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Debes agregar una cantidad superior a 0 en los insumos'
    })
}

function insumoModificado() {
    Swal.fire({
        icon: 'success',
        title: 'Modificado exitosamente',
        text: 'Se modificaron los insumos correctamente',
        showConfirmButton: false,
        timer: 2000
    })
}



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

    var valores = $('input[id^=cantidad]').filter(function () {
        return $(this).val();
    }).map(function () {
        var valor = $(this).val();
        return valor;
    })
    for (var i = 0; i<valores.length; i++){

        if(valores[i]==0){
            error()
            console.log(valores[i])
            break
        }else{
            insumoModificado()
            console.log(valores[i])
        }
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


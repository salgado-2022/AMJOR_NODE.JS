
const validacionesAnchetas = () =>{
    let nombre = document.querySelector('#nombreAncheta').value
    let descripcion = document.querySelector('#descAncheta').value 

    if (nombre == "" || descripcion == "") {
        llenarCampos()
    }else{
        confirmarRealizarPedido()
    }
}

const botonAncheta = document.querySelector('#botonAncheta')
botonAncheta.addEventListener('click',validacionesAnchetas)

function llenarCampos() {
    Swal.fire({
        title: 'Hay campos vacíos',
        text: "Debes llenar todos los campos para poder realizar el pedido",
        icon: 'warning',
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Cerrar'
      })
}

function confirmarRealizarPedido() {
    Swal.fire({
        title: '¿Estás seguro?',
        text: "Después de realizar un pedido no podrás modificarlo",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Sí, realizar pedido',
        cancelButtonText: 'Cancelar'
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire({
            icon: 'success',
            title: 'Pedido realizado',
            text: 'El pedido fue realizado correctamente',
            showConfirmButton: false,
            timer: 1500
        })
        setTimeout(function(){ window.location = "thankyou"; }, 2000);
        }
      })
}


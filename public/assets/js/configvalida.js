const validarAgregar = () => {
    let selectopermiso = document.querySelector('#checkboxes').value
    let rolecito = document.querySelector('#exampleInputEmail1').value
    //let agregarTodo = document.querySelector('#agregarTodo').value
    //let permiso = document.querySelector('#selecta').value


    if (rolecito == "" || selectopermiso == "") {
        Swal.fire({
            icon: 'error',
            title: 'Lo sentimos',
            text: 'Porfavor completa todos los campos!',
        })
    } else {
        Swal.fire(
            'El Rol y permiso!',
            'Han sido creados Correctamente',
            'success'
        )
    }
}

const buttonBut = document.querySelector('#agregarTodo')
buttonBut.addEventListener('click', validarAgregar)

function modificadoCorrectamente() {
    Swal.fire({
        icon: 'success',
        title: 'Modificado correctamente',
        text: 'Se modificaron el rol y el permiso correctamente',
        showConfirmButton: false,
        timer: 1500
    })
    $('#modalconfiga').modal('hide')
}

function confirmarEliminar() {
    Swal.fire({
        title: '¿Estás seguro?',
        text: "Recuerda que se eliminará, todo el registro, del rol y permiso",
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
                title: 'eliminado Correctamente',
                text: 'El rol y sus permisos han sido eliminados correctamente.',
                showConfirmButton: false,
                timer: 2000
            })
        }
    })
}

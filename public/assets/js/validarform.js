const validarForm = () => {
    let documento = document.querySelector('#documento').value
    let nombre = document.querySelector('#Nombre').value
    let email = document.querySelector('#Correo').value
    let rol = document.querySelector('#selectRol').value
    let contrasena = document.querySelector('#Contra').value
    let contrasenaconfi = document.querySelector('#Contraconfi').value
  
  
    if (documento == "" || nombre == "" || email == "" || rol == "" || contrasena == "" || contrasenaconfi == "") {
      Swal.fire({
        title: 'Falta',
        icon: 'info',
        html:
          '¡Ojo! porfavor llena todos los campos',
        showCloseButton: true,
        showCancelButton: true,
        focusConfirm: false,
        confirmButtonText:
          '¡Vamos!',
        confirmButtonAriaLabel: 'Vamos!',
        cancelButtonText:
          'Cancelar',
        cancelButtonAriaLabel: 'Cancelar'
      })
    } else {
      Swal.fire(
        'Buen trabajo!',
        'Usuario registrado correctamente!',
        'success'
      )
  
    } if (documento == "321654" || nombre == "Juan" || email == "juanpapas@misena.edu.co" || rol == "Administrador" || contrasena == "456789" || contrasenaconfi == "456789") {
  
      Swal.fire({
        icon: 'error',
        title: 'Ey Ey',
        text: 'Este Usuario ya existe, ¡cambialo!',
      })
    } else if (contrasena != contrasenaconfi) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Las contraseñas deben de coincidir.'
      })
    }
  }
  const buttonBut = document.querySelector('#boton')
  buttonBut.addEventListener('click', validarForm)
  
  function modificadoCorrectamente() {
  
    Swal.fire({
      icon: 'success',
      title: 'Modificado correctamente',
      text: 'Se modificaron sus datos personales correctamente',
      showConfirmButton: false,
      timer: 1500
    })
    $('#modalUsua').modal('hide')
  }
  
  function confirmarEliminar() {
    Swal.fire({
      title: '¿Estás seguro?',
      text: "Recuerde no tener ningun proceso con nosotros",
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
          title: 'El Usuario',
          text: 'Ha sido eliminado correctamente.',
          showConfirmButton: false,
          timer: 1700
        })
      }
    })
  }
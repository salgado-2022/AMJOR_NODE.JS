const crearInsumoValidaciones = () =>{
    let nombre = document.querySelector('#nombreInsumo').value
    let descripcion = document.querySelector('#descInsumo').value 
    let precio = document.querySelector('#precioInsumo').value 
    
    if (nombre == "" || descripcion == "" || precio == "") {
        llenarCampos()
    }else{
        crearInsumo()
    }
}

const botonInsumo = document.querySelector('#crearInsumo')
const botonCerrar = document.querySelector('#cancelarInsumo')
botonInsumo.addEventListener('click',crearInsumoValidaciones)
botonCerrar.addEventListener('click',limpiar)

//LLENAR CAMPOS
function llenarCampos() {
    Swal.fire({
        title: 'Hay campos vacíos',
        text: "Debes llenar todos los campos para crear una ancheta",
        icon: 'warning',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Cerrar'
      })
}

//LIMPIAR
function limpiar() {
    setTimeout(function(){ window.location = "insumos"; })
  }

//CREAR INSUMO
function crearInsumo() {
    Swal.fire({
        title: 'Creado Correctamente',
        text: "Tu insumo ha sido creada correctamente",
        icon: 'success',
        showConfirmButton: false,
        timer: 1500
      })
      setTimeout(function(){ window.location = "insumos"; }, 1000);
    }

//MODIFICAR INSUMO
function modificarInsumo() {
    document.getElementById("title").innerHTML="Modificar Insumo"
    nombreInsumo.value = "Ancheta Navideña"
    descInsumo.value = "Papa noel feliz navidad"
    precioInsumo.value = 3000
    botonInsumo.style.display="none" 
    modInsumo.style.display="inline"
    crear.style.boxShadow="3px 3px 3px MediumSlateBlue";
    document.getElementById("overlay").style.display = "block"
  }
  
  function insumoModificado(){
    let nombre = document.querySelector('#nombreInsumo').value
    let descripcion = document.querySelector('#descInsumo').value 
    let precio = document.querySelector('#precioInsumo').value 
    if (nombre == "" || descripcion == "" || precio == "") {
      llenarCampos()
  }else{
    Swal.fire({
      icon: 'success',
      title: 'Modificado correctamente',
      text: 'Se modificó el insumo correctamente',
      showConfirmButton: false,
      timer: 1500
    })
    setTimeout(function(){ window.location = "insumos"; }, 1000);
  }
  }

//ELIMINAR INSUMO
function eliminarInsumo() {
    Swal.fire({
      title: '¿Estás seguro que deseas eliminar este insumo?',
      text: "Esta acción es irreversible",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#333333',
      confirmButtonText: 'Eliminar',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          icon: 'success',
          title: 'Insumo Eliminado',
          text: 'El insumo ha sido eliminado correctamente',
          showConfirmButton: false,
          timer: 1500
      })
      }
      setTimeout(function(){ window.location = "insumos"; }, 1000);
    })
  }

  //EXPRESIONES REGULARES
let nombre = document.getElementById("nombreInsumo")
let descripcion = document.getElementById("descInsumo")
let precio = document.getElementById("precioInsumo")
let nombrerror = document.getElementById("nombreInsumoErr")
let descerror = document.getElementById("descInsumoErr")
let precioerror = document.getElementById("precioInsumoErr")
  nombre.addEventListener('input', function(e) {
    let pattern = /^[A-Za-z\s]+$/g
    let currentValue = e.target.value
    let valid = pattern.test(currentValue)
    console.log (currentValue)
    if(valid){
      nombrerror.style.display = 'none'
    }else{
      nombrerror.style.display = 'block'
    }
  })
  descripcion.addEventListener('input', function(e) {
    let pattern = /^[A-Za-z\s]+$/g
    let currentValue = e.target.value
    let valid = pattern.test(currentValue)
    console.log (currentValue)
    if(valid){
      descerror.style.display = 'none'
    }else{
      descerror.style.display = 'block'
    }
  })
  precio.addEventListener('input', function(e) {
    let pattern = /^[0-9]+$/
    let currentValue = e.target.value
    let valid = pattern.test(currentValue)
    console.log (currentValue)
    if(valid){
      precioerror.style.display = 'none'
    }else{
      precioerror.style.display = 'block'
    }
  })
  

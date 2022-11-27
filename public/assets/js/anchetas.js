const crearAnchetaValidaciones = () =>{
    let nombre = document.querySelector('#nombreAncheta').value
    let descripcion = document.querySelector('#descAncheta').value 
    
    if (nombre == "" || descripcion == "") {
        llenarCampos()
    }else{
        crearAncheta()
    }
}

const botonAncheta = document.querySelector('#crearAncheta')
const botonCerrar = document.querySelector('#cancelarAncheta')
botonAncheta.addEventListener('click',crearAnchetaValidaciones)
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
  setTimeout(function(){ window.location = "anchetas"; })
}

//CREAR ANCHETA
function crearAncheta() {
    Swal.fire({
        title: 'Creada Correctamente',
        text: "Tu ancheta ha sido creada correctamente",
        icon: 'success',
        showConfirmButton: false,
        timer: 1500
      })
      setTimeout(function(){ window.location = "anchetas"; }, 1000);
    }

//MODIFICAR ANCHETA
function modificarAncheta() {
  document.getElementById("title").innerHTML="Modificar Ancheta"
  nombreAncheta.value = "Ancheta Navideña"
  descAncheta.value = "Papa noel feliz navidad"
  botonAncheta.style.display="none" 
  modAncheta.style.display="inline"
  crear.style.boxShadow="3px 3px 3px MediumSlateBlue";
  document.getElementById("overlay").style.display = "block"
}

function anchetaModificada(){
  let nombre = document.querySelector('#nombreAncheta').value
  let descripcion = document.querySelector('#descAncheta').value 
  if (nombre == "" || descripcion == "") {
    llenarCampos()
}else{
  Swal.fire({
    icon: 'success',
    title: 'Modificada correctamente',
    text: 'Se modificó la ancheta correctamente',
    showConfirmButton: false,
    timer: 1500
  })
  setTimeout(function(){ window.location = "anchetas"; }, 1000);
}
}

//ELIMINAR ANCHETA
function eliminarAncheta() {
  Swal.fire({
    title: '¿Estás seguro que deseas eliminar esta ancheta?',
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
        title: 'Ancheta eliminada',
        text: 'La ancheta ha sido eliminada correctamente',
        showConfirmButton: false,
        timer: 1500
    })
    }
    setTimeout(function(){ window.location = "anchetas"; }, 1000);
  })
}

//CONTAR PRECIO
document.querySelector(".increment").addEventListener("click",sumarPrecio)
document.querySelector(".decrease").addEventListener("click",restarPrecio)
let precioCont = 0
let precio = 3000

function sumarPrecio() {
  precioCont = precioCont + precio
  document.querySelector("#precio").innerHTML=precioCont+"$"
  document.getElementById("totalAncheta").innerHTML="Total: "+precioCont+"$"
}

function restarPrecio() {
  let contInsumo = document.getElementById('contInsumo').value
  if (contInsumo==0){
    document.querySelector("#precio").innerHTML="0$"
    document.getElementById("totalAncheta").innerHTML="Total: 0$"
  }else{
    precioCont = precioCont - precio
    document.querySelector("#precio").innerHTML=precioCont+"$"
    document.getElementById("totalAncheta").innerHTML="Total: "+precioCont+"$"
  }
  
}


  

//EXPRESIONES REGULARES
let nombre = document.getElementById("nombreAncheta")
let descripcion = document.getElementById("descAncheta")
let nombrerror = document.getElementById("nombreAnchetaErr")
let descerror = document.getElementById("descAnchetaErr")
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


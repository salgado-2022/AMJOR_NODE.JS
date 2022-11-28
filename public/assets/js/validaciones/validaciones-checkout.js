
// ----- VALIDACIONES CHECKOUT -----

// Inputs
let nombre = document.getElementById("nombres")
let descripcion = document.getElementById("apellidos")
let precio = document.getElementById("municipio")
let barrio = document.getElementById("barrio")
let correo_electronico = document.getElementById("correo_electronico")
let celular = document.getElementById("celular")

// Id de errors
let nombreError = document.getElementById("nombresError")
let descripcionError = document.getElementById("apellidosError")
let precioError = document.getElementById("municipioError")
let barrioError = document.getElementById("barrioError")
let correo_electronicoError = document.getElementById("correo_electronicoError")
let celularError = document.getElementById("celularError")

  nombres.addEventListener('input', function(e) {
    let pattern = /^[a-zA-ZÀ-ÿ\u00f1\u00d1]+(\s*[a-zA-ZÀ-ÿ\u00f1\u00d1]*)*[a-zA-ZÀ-ÿ\u00f1\u00d1]+$/g
    let currentValue = e.target.value
    let valid = pattern.test(currentValue)

    if(valid){
      nombresError.style.display = 'none'
    }else{
      nombresError.style.display = 'block'
    }
  })

  apellidos.addEventListener('input', function(e) {
    let pattern = /^[a-zA-ZÀ-ÿ\u00f1\u00d1]+(\s*[a-zA-ZÀ-ÿ\u00f1\u00d1]*)*[a-zA-ZÀ-ÿ\u00f1\u00d1]+$/g
    let currentValue = e.target.value
    let valid = pattern.test(currentValue)

    if(valid){
      apellidosError.style.display = 'none'
    }else{
      apellidosError.style.display = 'block'
    }
  })

  barrio.addEventListener('input', function(e) {
    let pattern = /^[A-Za-z\s]+$/g
    let currentValue = e.target.value
    let valid = pattern.test(currentValue)

    if(valid){
      barrioError.style.display = 'none'
    }else{
      barrioError.style.display = 'block'
    }
  })

  correo_electronico.addEventListener('input', function(e) {
    let pattern = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/
    let currentValue = e.target.value
    let valid = pattern.test(currentValue)

    if(valid){
      correo_electronicoError.style.display = 'none'
    }else{
      correo_electronicoError.style.display = 'block'
    }
  })

  numero_celular.addEventListener('input', function(e) {
    let pattern = /(\+57|0057|57)?[ -]*(3|3)[ -]*([0-9][ -]*){9}/
    let currentValue = e.target.value
    let valid = pattern.test(currentValue)

    if(valid){
      numero_celularError.style.display = 'none'
    }else{
      numero_celularError.style.display = 'block'
    }
  })

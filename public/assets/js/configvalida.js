const validarAgregar = () => {
    let agregar = document.querySelector('#valiRol').value
    let selectopermiso = document.querySelector('#selectPermisos').value
    let valPermiso = document.querySelector('#valiPermiso').value
    let agregarRol = document.querySelector('#formRol').value



    if(agregar =="" || selectopermiso =="" || valPermiso =="" || agregarRol =="" ) {
        alert("porfavor complete todos los campos, de roles y permisos");
    }else {
        alert("Rol y permiso creado completamente. :)");
        return true; 
    }
}

const verificado = () => {
    let validado = document.querySelector('#verificado').value

}



const buttonBut = document.querySelector('#agregar')
buttonBut.addEventListener('click',validarAgregar)
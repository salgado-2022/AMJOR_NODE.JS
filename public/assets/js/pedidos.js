
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



var data = {
    items: [
        {
            title: "Hello",
            description: "Hello Text",
            image: "https://via.placeholder.com/300x100",
        },
        {
            title: "Card title",
            description: "Some quick example text to build on the card title and make up the bulk of the card's content.<p>Another paragraph</p><p>Another paragraph</p>",
            image: "https://via.placeholder.com/300x100",
        }
    ]
};

var source = document.getElementById("card-template").innerHTML;
var template = Handlebars.compile(source);
var html = template(data);

document.getElementById("content").innerHTML = html;
console.log(html);

//jquery method
$("#content .card-footer .btn").on("click", function (event) {
    console.log("jquery");

    var index = $(".card").index(event.currentTarget);
    console.log("index = " + index);
    console.log(event.target.dataset.target);
});
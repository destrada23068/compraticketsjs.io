

//Formulario
    const formulario = document.querySelector("form");
    const cantidadTicketsInput = document.getElementById("cantidadTickets");
    const categoriaSelectInput = document.getElementById("categoriaSelect");
    const totalPagoSpan =document.getElementById("totalPago");

//Funcion para actualizar el total de pago
function actualizarTotalPago() {
//Cantidad de tickets a comprar
const cantidadTickets = parseInt(cantidadTicketsInput.value);

//Tipo de categoria
const categoriaSelect = parseInt(categoriaSelectInput.value);

//Categoria con descuento
let descuento = 0;

     switch (categoriaSelect) {
      case 1:
        descuento = 80; 
        break;
      case 2:
        descuento = 50;
        break;
      case 3: 
        descuento = 15;
        break;
      default: 
        descuento = 0;
     }
   
//Total a pagar
const totalValorEntradas = cantidadTickets * 200;
const totalConDescuento = totalValorEntradas * (descuento / 100);

//Insertar el total en totalPago
totalPagoSpan.textContent = totalConDescuento.toFixed(2);
}

// Disparador cambios antes de resumen de compra
formulario.addEventListener("input", actualizarTotalPago);

//Boton Borrar 
const btnBorrar = document.getElementById("btnBorrar");
btnBorrar.addEventListener("click", function (event) {
    event.preventDefault();
    formulario.reset();
    totalPagoSpan.textContent = "";
});

//Total RESUMEN 
const btnResumen = document.getElementById("btnResumen");
btnResumen.addEventListener("click", function (event) {
  event.preventDefault();
  //Obtener los valores del formulario
  const nombre = document.getElementById("nombre").value;
  const apellido = document.getElementById("apellido").value;
  const email = document.getElementById("mail").value;
  const boletos = cantidadTickets.value;
  const categoria = categoriaSelect.value;
  const totalPagar = totalPagoSpan.textContent;

  console.log("Resumen de la compra:");
    console.log("Nombre:", nombre + " " + apellido);
    console.log("Email:", email);
    console.log("Cantidad de tickets:", boletos);
    console.log("Categoria:", nombreCategoria(categoria));
    console.log("Total a pagar", totalPagar);

});

  /* No logre que reflejara los datos en el PDF
  //Crear el PDF
   const doc = new jsPDF();
   
  //Agregar el contenido al PDF
  doc.text("Resumen de la compra:", 10, 10 );
  doc.text("Nombre:", nombre + " " + apellido, 10, 20);
  doc.text("Email:", email, 10, 30);
  doc.text("Cantidad de tickets:", boletos, 10. 40 );
  doc.text("Categoria:", nombreCategoria(categoria), 10. 50 );
  doc.text("Total a pagar", totalPagar, 10, 60);

  //Guardar el PDF
  doc.save("resumen_compra_codo_a_codo.pdf");
});
*/

// Obtener el nombre de la categoria para impresion PDF
function nombreCategoria(categoria) {
  switch (categoria) {
    case "1":
      return "Estudiante";
    case "2":
      return "Trainee";
    case "3":
      return "Junior";
    default:
      return "";

  }
}




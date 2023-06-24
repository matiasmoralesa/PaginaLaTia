// Cambiar contraste
var contraste = ()=>{
    // Obtiene el elemento del botón con el ID 'btnContraste'
    let btn = document.getElementById('btnContraste');

    // Si el valor del botón es '0'
    if(btn.value == '0'){
        // Obtiene los elementos con la clase 'blanco'
        let elements = document.getElementsByClassName('blanco');
        // Agrega la clase 'negro' al primer elemento
        elements[0].classList.add('negro');
        // Remueve la clase 'blanco' del primer elemento
        elements[0].classList.remove('blanco');
        // Actualiza el valor del botón a '1'
        btn.value = '1';
    }
    // Si el valor del botón es '1'
    else if(btn.value == '1'){
        // Obtiene los elementos con la clase 'negro'
        let elements = document.getElementsByClassName('negro');
        // Agrega la clase 'blanco' al primer elemento
        elements[0].classList.add('blanco');
        // Remueve la clase 'negro' del primer elemento
        elements[0].classList.remove('negro');
        // Actualiza el valor del botón a '0'
        btn.value = '0';
    }
}; 
  

// Cambia el tamaño de la fuente de los elementos de texto y los títulos h2 y h3 al hacer clic en el botón.
const fuente = () => {
    // Obtiene el elemento del botón con el ID 'btnFuente'
    const btnFuente = document.getElementById('btnFuente');
    
    // Obtiene todos los elementos de texto que se desean modificar
    const elementosTexto = document.querySelectorAll('nav, ul, li, section, p, span');
    
    // Obtiene el título h2
    const tituloH2 = document.querySelector('h2');
    
    // Obtiene el título h3
    const tituloH3 = document.querySelector('h3');
    
    // Itera sobre cada elemento de texto y alterna la clase 'tamanio-letra-grande'
    elementosTexto.forEach(elemento => {
      elemento.classList.toggle('tamanio-letra-grande');
    });
    
    // Alterna la clase 'tamanio-letra-muy-grande' en el título h2
    tituloH2.classList.toggle('tamanio-letra-muy-grande');
    
    // Alterna la clase 'tamanio-letra-muy-grande' en el título h3
    tituloH3.classList.toggle('tamanio-letra-muy-grande');
  }

var modificar = (listadoReservaNuevo)=>{
  // Obtener referencias a los elementos del formulario de edición
  let eNombre = document.getElementById("nombre");
  let eCorreo = document.getElementById("correo");
  let eTelefono = document.getElementById("telefono");
  let eComida = document.getElementById("comida");
  let ePersonas = document.getElementById("personas");
  let eFecha = document.getElementById("fecha");
  let eHora = document.getElementById("hora");
  let eRecomendacion = document.getElementById("recomendacion");
  let eCondiciones = document.getElementById('condiciones');
  let eBtnEditarUp = document.getElementById("btnEditar");


  // Obtener los valores actualizados de los campos del formulario
  let nombre = eNombre.value;
  let correo = eCorreo.value;
  let telefono = eTelefono.value;
  let comida = eComida.value;
  let personas = parseInt(ePersonas.value);
  let fecha = eFecha.value;
  let hora = eHora.value;
  let recomendacion = eRecomendacion.value;
  let condiciones = eCondiciones.checked ? "si" : "no";
  let indice = eBtnEditarUp.value;

  // Actualizar los valores de la reserva en la lista
  listadoReservaNuevo[indice].nombre = nombre;
  listadoReservaNuevo[indice].correo = correo;
  listadoReservaNuevo[indice].telefono = telefono;
  listadoReservaNuevo[indice].comida = comida;
  listadoReservaNuevo[indice].personas = personas;
  listadoReservaNuevo[indice].fecha = fecha;
  listadoReservaNuevo[indice].hora = hora;
  listadoReservaNuevo[indice].recomendacion = recomendacion;
  listadoReservaNuevo[indice].condiciones = condiciones;

  // Actualizar el almacenamiento local con la lista modificada
  localStorage.setItem('reserva',JSON.stringify(listadoReservaNuevo));

  // Volver a cargar la tabla con los datos actualizados
  cargarTabla(listadoReservaNuevo)
  
}

var eliminar = (listadoReservaNuevo)=>{

  // Obtener el botón de eliminar actual
  let eBtnEliminarUp = document.getElementById("btnEliminar");
  
  // Obtener el índice del elemento a eliminar
  let indice = eBtnEliminarUp.value;

  
  
  // Mostrar los datos de reserva antes de eliminar
  console.log(listadoReservaNuevo)

  // Filtrar los elementos de la lista para excluir el elemento a eliminar
  lista = listadoReservaNuevo.filter((p)=>p.id!=indice)
 
  // Actualizar los índices de los elementos restantes
  lista = lista.map((p,index)=>{return{...p,"id":index}})
  
  // Mostrar los datos de reserva después de eliminar
  console.log(lista)

  // Actualizar los datos en el almacenamiento local
  localStorage.setItem("reserva",JSON.stringify(lista));

  // Volver a cargar la tabla con los datos actualizados
  cargarTabla(lista) 
}

var cargarTabla = (listadoReservaNuevo,)=>{
   // Obtener referencias a los elementos del DOM
  let eContenedorTabla = document.getElementById("contenedorTabla");
  let eNombre = document.getElementById("nombre");
  let eCorreo = document.getElementById("correo");
  let eTelefono = document.getElementById("telefono");
  let eComida = document.getElementById("comida");
  let ePersonas = document.getElementById("personas");
  let eFecha = document.getElementById("fecha");
  let eHora = document.getElementById("hora");
  let eRecomendacion = document.getElementById("recomendacion");
  let eCondiciones = document.getElementById('condiciones');

  // Generar el código HTML de la tabla de reservas
  render = "<table>"
  render += "<tr><th>Nombre</th><th>Correo</th><th>telefono</th><th>comidafavorita</th><th>cantidadPersonas</th><th>fechareserva</th><th>horareserva</th><th>Recomendacion</th><th>condiciones</th></tr>"
  for (let i = 0; i < listadoReservaNuevo.length; i++){
      const element = listadoReservaNuevo[i];
      render += "<tr>";
      render += "<td>"+element.nombre+"</td>";
      render += "<td>"+element.correo+"</td>";
      render += "<td>"+element.telefono+"</td>";
      render += "<td>"+element.comida+"</td>";
      render += "<td>"+element.personas+"</td>";
      render += "<td>"+element.fecha+"</td>";
      render += "<td>"+element.hora+"</td>";
      render += "<td>"+element.recomendacion+"</td>";
      render += "<td>"+element.condiciones+"</td>";
      render += "<td>";
      render += "<button type='button' class='btn waves-effect waves-light' id='btnEditar"+i+"'>Editar</button>";
      render += "<button type='button' class='btn waves-effect waves-light' id='btnEliminar"+i+"'>Eliminar</button>";
      render += "</td>";
      render += "</tr>";
  }
  render += "</table>";

  // Actualizar el contenido del contenedor de la tabla
  eContenedorTabla.innerHTML = render;

  // Agregar eventos a los botones de editar y eliminar en cada fila de la tabla
    for (let i = 0; i < listadoReservaNuevo.length; i++){
      var eBtn = document.getElementById("btnEditar"+i);
      var eBtn2 = document.getElementById("btnEliminar"+i);
      let element = listadoReservaNuevo[i]
      
      // Evento de editar
      eBtn.addEventListener("click",()=>{

        // Activar los campos
        document.getElementById("nombre").disabled = false;
        document.getElementById("correo").disabled = false;
        document.getElementById("telefono").disabled = false;
        document.getElementById("comida").disabled = false;
        document.getElementById("personas").disabled = false;
        document.getElementById("fecha").disabled = false;
        document.getElementById("hora").disabled = false;
        document.getElementById("recomendacion").disabled = false;
        document.getElementById("condiciones").disabled = false;


        // Asignar los valores de la reserva seleccionada a los campos del formulario
        eNombre.value = element.nombre;
        eCorreo.value = element.correo;
        eTelefono.value = element.telefono;
        eComida.value = element.comida;
        ePersonas.value = element.personas;
        eFecha.value = element.fecha;
        eHora.value = element.hora;
        eRecomendacion.value = element.recomendacion;
        // Verificar el valor de condiciones del elemento
        if (element.condiciones === "si") {
          // Si el valor es "si", se marca el checkbox
          eCondiciones.setAttribute("checked", "checked");
        } else {
          // Si el valor es "no", se desmarca el checkbox
          eCondiciones.removeAttribute("checked");
        };

        // Generar el botón de editar dinámicamente
        let sEditar = "<button type='button'class='btn waves-effect waves-light' id='btnEditar' value='"+i+"'>Editar</button>";
        
        // Obtener el contenedor de botones adicionales
        let contenedorBoton = document.getElementById("contenedorBtnExtra");
        contenedorBoton.innerHTML = sEditar;
        
        // Obtener la referencia al botón de editar recién creado
        let eBtnEditarUp = document.getElementById("btnEditar");

        // Agregar un evento al botón de editar
        eBtnEditarUp.addEventListener("click",()=>modificar(listadoReservaNuevo));
      })

      // Evento de eliminar
      eBtn2.addEventListener("click",()=>{
              
        // Desactivar los campos
        document.getElementById("nombre").disabled = true;
        document.getElementById("correo").disabled = true;
        document.getElementById("telefono").disabled = true;
        document.getElementById("comida").disabled = true;
        document.getElementById("personas").disabled = true;
        document.getElementById("fecha").disabled = true;
        document.getElementById("hora").disabled = true;
        document.getElementById("recomendacion").disabled = true;
        document.getElementById("condiciones").disabled = true;

        // Asignar los valores de la reserva seleccionada a los campos del formulario
        eNombre.value = element.nombre;
        eCorreo.value = element.correo;
        eTelefono.value = element.telefono;
        eComida.value = element.comida;
        ePersonas.value = element.personas;
        eFecha.value = element.fecha;
        eHora.value = element.hora;
        eRecomendacion = element.recomendacion;
        eCondiciones.value = element.condiciones;

        // Generar el botón de eliminar dinámicamente
        let sEliminar = "<button type='button'class='btn waves-effect waves-light' id='btnEliminar' value='"+i+"'>Eliminar</button>";

        // Obtener el contenedor de botones adicionales
        let contenedorBoton = document.getElementById("contenedorBtnExtra");
        contenedorBoton.innerHTML = sEliminar;

        // Obtener la referencia al botón de eliminar recién creado
        let eBtnEliminarUp = document.getElementById("btnEliminar");

        // Agregar un evento al botón de eliminar
        eBtnEliminarUp.addEventListener("click",()=>eliminar(listadoReservaNuevo))           
      })
      
  }
}


var registra = ()=> {
  // Obtener referencias a los elementos del formulario
  let eNombre = document.getElementById("nombre");
  let eCorreo = document.getElementById("correo");
  let eTelefono = document.getElementById("telefono");
  let eComida = document.getElementById("comida");
  let ePersonas = document.getElementById("personas");
  let eFecha = document.getElementById("fecha");
  let eHora = document.getElementById("hora");
  let eRecomendacion = document.getElementById("recomendacion");
  let eCondiciones = document.getElementById('condiciones')
  

  // Obtener los valores de los campos del formulario
  let nombre = eNombre.value.trim();
  let correo = eCorreo.value.trim();
  let telefono = eTelefono.value.trim();
  let comida = eComida.value.trim();
  let personas = parseInt(ePersonas.value.trim());
  let fecha = eFecha.value.trim();
  let hora = eHora.value.trim();
  let recomendacion = eRecomendacion.value.trim();
  let condiciones = eCondiciones.checked ? "si" : "no";   

  // Validar que todos los campos estén completos
  if (
    nombre === "" ||
    correo === "" ||
    telefono === "" ||
    comida === "" ||
    isNaN(personas) ||
    fecha === "" ||
    hora === "" ||
    recomendacion === "" ||
    !eCondiciones.checked
  ) {
    // Mostrar mensaje de error
    alert("Debe completar todos los campos del formulario");
    return; // Detener la ejecución de la función si hay campos incompletos
  }

  // Crear un array para almacenar la reserva
  const reserva = [];
  reserva[0] = nombre;
  reserva[1] = correo;
  reserva[2] = telefono;
  reserva[3] = comida;
  reserva[4] = personas;
  reserva[5] = fecha;
  reserva[6] = hora;
  reserva[7] = recomendacion;
  reserva[8] = condiciones;
  console.log(reserva);

  // Obtener el listado de reservas del almacenamiento local
  let listadoReserva =  localStorage.getItem("reserva");
  let listadoReservaAntiguo = JSON.parse(listadoReserva);

  // Verificar si ya hay reservas almacenadas
  if (listadoReservaAntiguo==null){
    // Si no hay reservas, crear una nueva reserva con ID 0
    let reserva = {
      "id": 0,
      "nombre":nombre,
      "correo":correo,
      "telefono":telefono,
      "comida":comida,
      "personas":personas,
      "fecha":fecha,
      "hora":hora,
      "recomendacion":recomendacion,
      "condiciones":condiciones
    };
    listadoReservaNuevo = [reserva]
  }else{
    // Si ya hay reservas, crear una nueva reserva con un ID incremental
    let reserva = {
      "id":listadoReservaAntiguo.lenght,
      "nombre":nombre,
      "correo":correo,
      "telefono":telefono,
      "comida":comida,
      "personas":personas,
      "fecha":fecha,
      "hora":hora,
      "recomendacion":recomendacion,
      "condiciones":condiciones
    };
    listadoReservaNuevo = [...listadoReservaAntiguo,reserva]
  }

  console.log(listadoReservaAntiguo);
  console.log(listadoReservaNuevo);

  // Guardar los datos de reserva en el almacenamiento local
  localStorage.setItem('reserva',JSON.stringify(listadoReservaNuevo));
  
  // Cargar la tabla con los nuevos datos de reserva
  cargarTabla(listadoReservaNuevo);
}  

var cargarDatos = ()=>{
  let listadoReservaAntiguo = localStorage.getItem("reserva");
  let listadoReservaNuevo = JSON.parse(listadoReservaAntiguo);
  cargarTabla(listadoReservaNuevo)
}

// Obtener el formulario y el botón de envío
const formulario = document.getElementById("myForm");
const botonEnviar = document.getElementById("btn");

// Agregar evento click al botón de envío
botonEnviar.addEventListener("click", (e) => {
  e.preventDefault();

  // Variable para verificar si todos los campos son válidos
  let isValid = true;

  // Limpiar mensajes de error anteriores
  limpiarMensajesError();

  // Validar campo nombre
  const campoNombre = document.getElementById("nombre");
  if (campoNombre.value.trim() === "") {
    isValid = false;
    marcarCampoInvalido(campoNombre);
    mostrarMensajeError("Debe ingresar un nombre", campoNombre);
  }

  // Validar campo correo
  const campoCorreo = document.getElementById("correo");
  if (campoCorreo.value.trim() === "") {
    isValid = false;
    marcarCampoInvalido(campoCorreo);
    mostrarMensajeError("Debe ingresar un correo electrónico", campoCorreo);
  }

  // Validar campo teléfono
  const campoTelefono = document.getElementById("telefono");
  if (campoTelefono.value.trim() === "") {
    isValid = false;
    marcarCampoInvalido(campoTelefono);
    mostrarMensajeError("Debe ingresar un número de teléfono", campoTelefono);
  }

  // Validar campo comida
  const campoComida = document.getElementById("comida");
  if (campoComida.value.trim() === "") {
    isValid = false;
    marcarCampoInvalido(campoComida);
    mostrarMensajeError("Debe ingresar una comida", campoComida);
  }

  // Validar campo personas
  const campoPersonas = document.getElementById("personas");
  const personas = parseInt(campoPersonas.value);
  if (isNaN(personas) || personas < 0) {
  isValid = false;
  marcarCampoInvalido(campoPersonas);
  mostrarMensajeError("Debe ingresar un número válido de personas", campoPersonas);
  } 

  // Validar campo hora
const campoHora = document.getElementById("hora");
if (campoHora.value.trim() === "") {
  isValid = false;
  marcarCampoInvalido(campoHora);
  mostrarMensajeError("Debe ingresar una hora", campoHora);
} else {
  limpiarCampoInvalido(campoHora);

  // Validar campo fecha
  const campoFecha = document.getElementById("fecha");
  if (campoFecha.value.trim() === "") {
    isValid = false;
    marcarCampoInvalido(campoFecha);
    mostrarMensajeError("Debe ingresar una fecha", campoFecha);
  } else {
    const fechaActual = new Date();
    const fechaIngresada = new Date(campoFecha.value);

    fechaActual.setHours(0, 0, 0, 0);
    fechaIngresada.setHours(0, 0, 0, 0);

    if (fechaIngresada < fechaActual) {
      isValid = false;
      marcarCampoInvalido(campoFecha);
      mostrarMensajeError("La fecha no puede ser anterior a la actual", campoFecha);
    } else {
      limpiarCampoInvalido(campoFecha);
    }
  }
}

  // Validar campo recomendación
  const campoRecomendacion = document.getElementById("recomendacion");
  if (campoRecomendacion.value.trim() === "") {
    isValid = false;
    marcarCampoInvalido(campoRecomendacion);
    mostrarMensajeError("Debe ingresar una recomendación", campoRecomendacion);
  }

  // Validar campo condiciones
  const campoCondiciones = document.getElementById("condiciones");
  if (!campoCondiciones.checked) {
    isValid = false;
    marcarCampoInvalido(campoCondiciones);
    mostrarMensajeError("Debe aceptar los términos y condiciones", campoCondiciones);
  }

  // Si todos los campos son válidos, continuar con el envío del formulario
  if (isValid) {
    formulario.submit();
  }
});

// Función para marcar un campo como inválido
function marcarCampoInvalido(campo) {
  campo.classList.add("campo-invalido");
}

function mostrarMensajeError(mensaje, campo) {
  const errorMensaje = document.createElement("p");
  errorMensaje.classList.add("mensaje-error");
  errorMensaje.innerText = mensaje;

  const campoContainer = campo.parentNode;
  campoContainer.appendChild(errorMensaje);
}

// Función para limpiar los mensajes de error
function limpiarMensajesError() {
  const mensajesError = document.querySelectorAll(".mensaje-error");
  mensajesError.forEach((mensaje) => {
    mensaje.remove();
  });

  const camposInvalidos = document.querySelectorAll(".campo-invalido");
  camposInvalidos.forEach((campo) => {
    campo.classList.remove("campo-invalido");
  });
}

function limpiarCampoInvalido(campo) {
  campo.classList.remove("campo-invalido");
  const campoContainer = campo.parentNode;
  const mensajeError = campoContainer.querySelector(".mensaje-error");
  if (mensajeError) {
    campoContainer.removeChild(mensajeError);
  }
}
// Agrega un evento de escucha de clic al botón con el ID 'btnContraste'
document.getElementById('btnContraste').addEventListener('click',contraste);
// Agrega un evento de escucha de clic al botón con el ID 'btnFuente' 
document.getElementById('btnFuente').addEventListener('click',fuente);
// Agrega un evento de escucha de clic al boton con el ID 'btn'
document.getElementById("btn").addEventListener("click",registra);

//document.getElementById('btn').addEventListener('click',validarFormulario)
addEventListener('load',cargarDatos)
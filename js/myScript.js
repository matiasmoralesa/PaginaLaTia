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
    let eNombre = document.getElementById("nombre");
    let eCorreo = document.getElementById("correo");
    let eTelefono = document.getElementById("telefono");
    let eComida = document.getElementById("Comida");
    let ePersonas = document.getElementById("personas");
    let eFecha = document.getElementById("fecha");
    let eHora = document.getElementById("hora");
    let eRecomendacion = document.getElementById("recomendacion");
    let eHorario = valorSeleccionado
    let eBtnEditarUp = document.getElementById("btnEditar");

    let nombre = eNombre.value;
    let correo = eCorreo.value;
    let telefono = eTelefono.value;
    let comida = eComida.value;
    let personas = parseInt(ePersonas.value);
    let fecha = eFecha.value;
    let hora = eHora.value;
    let recomendacion = eRecomendacion.value;
    let horario = eHorario.value;
    let indice = eBtnEditarUp.value;
    listadoReservaNuevo[indice].nombre = nombre;
    listadoReservaNuevo[indice].correo = correo;
    listadoReservaNuevo[indice].telefono = telefono;
    listadoReservaNuevo[indice].comida = comida;
    listadoReservaNuevo[indice].personas = personas;
    listadoReservaNuevo[indice].fecha = fecha;
    listadoReservaNuevo[indice].hora = hora;
    listadoReservaNuevo[indice].recomendacion = recomendacion;
    listadoReservaNuevo[indice].horario = horario;
    localStorage.setItem('registros',JSON.stringify(listadoReservaNuevo));
    cargarTabla(listadoReservaNuevo)
}

var eliminar = (listadoReservaNuevo)=>{
  let eBtnEliminarUp = document.getElementById("btnEliminar");
  let indice = eBtnEliminarUp.value;
  
  console.log(listadoReservaNuevo)
  lista = listadoReservaNuevo.filter((p)=>p.id!=indice)
  lista = lista.map((p,index)=>{return{...p,"id":index}})
  console.log(lista)
  localStorage.setItem("registros",JSON.stringify(lista));
  cargarTabla(lista) 
}

var cargarTabla = (listadoReservaNuevo,valorSeleccionado)=>{
  let eContenedorTabla = document.getElementById("contenedorTabla");
  let eNombre = document.getElementById("nombre");
  let eCorreo = document.getElementById("correo");
  let eTelefono = document.getElementById("telefono");
  let eComida = document.getElementById("comida");
  let ePersonas = document.getElementById("personas");
  let eFecha = document.getElementById("fecha");
  let eHora = document.getElementById("hora");
  let eRecomendacion = document.getElementById("recomendacion");
  let eHorario = valorSeleccionado

  render = "<table>"
  render += "<tr><th>Nombre</th><th>Correo</th><th>telefono</th><th>comidafavorita</th><th>cantidadPersonas</th><th>fechareserva</th><th>horareserva</th><th>Recomendacion</th><th>Horario</th></tr>"
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
      render += "<td>"+element.horario+"</td>";
      render += "<td>";
      render += "<button type='button' class='btn waves-effect waves-light' id='btnEditar"+i+"'>Editar</button>";
      render += "<button type='button' class='btn waves-effect waves-light' id='btnEliminar"+i+"'>Eliminar</button>";
      render += "</td>";
      render += "</tr>";
  }
  render += "</table>";
  eContenedorTabla.innerHTML = render;
    for (let i = 0; i < listadoReservaNuevo.length; i++){
      var eBtn = document.getElementById("btnEditar"+i);
      var eBtn2 = document.getElementById("btnEliminar"+i);
      let element = listadoReservaNuevo[i]
      eBtn.addEventListener("click",()=>{
        eNombre.value = element.nombre;
        eCorreo.value = element.correo;
        eTelefono.value = element.telefono;
        eComida.value = element.comida;
        ePersonas.value = element.personas;
        eFecha.value = element.fecha;
        eHora.value = element.hora;
        eRecomendacion = element.recomendacion;
        eHorario.value = element.horario;
        let sEditar = "<button type='button'class='btn waves-effect waves-light' id='btnEditar' value='"+i+"'>Editar</button>";
        let contenedorBoton = document.getElementById("contenedorBtnExtra");
        contenedorBoton.innerHTML = sEditar;
        let eBtnEditarUp = document.getElementById("btnEditar");
        eBtnEditarUp.addEventListener("click",()=>modificar(listadoReservaNuevo));
      })
      eBtn2.addEventListener("click",()=>{
        eNombre.value = element.nombre;
        eCorreo.value = element.correo;
        eTelefono.value = element.telefono;
        eComida.value = element.comida;
        ePersonas.value = element.personas;
        eFecha.value = element.fecha;
        eHora.value = element.hora;
        eRecomendacion = element.recomendacion;
        eHorario.value = element.horario;
        let sEliminar = "<button type='button'class='btn waves-effect waves-light' id='btnEliminar' value='"+i+"'>Eliminar</button>";
        let contenedorBoton = document.getElementById("contenedorBtnExtra");
        contenedorBoton.innerHTML = sEliminar;
        let eBtnEliminarUp = document.getElementById("btnEliminar");
        eBtnEliminarUp.addEventListener("click",()=>eliminar(listadoReservaNuevo))           
      })
      
  }
}

const btn = document.querySelector('btn');
        document.getElementById('btn').addEventListener('click', (event) => {
            let checkboxes = document.querySelectorAll('input[name="horario"]:checked');
            let output = [];
            checkboxes.forEach((checkbox) => {
                output.push(checkbox.value);
            });
            alert(output);
        });    

  var registra = (valorSeleccionado)=> {
    
    let eNombre = document.getElementById("nombre");
    let eCorreo = document.getElementById("correo");
    let eTelefono = document.getElementById("telefono");
    let eComida = document.getElementById("comida");
    let ePersonas = document.getElementById("personas");
    let eFecha = document.getElementById("fecha");
    let eHora = document.getElementById("hora");
    let eRecomendacion = document.getElementById("recomendacion");
    let eHorario = valorSeleccionado

    let nombre = eNombre.value;
    let correo = eCorreo.value;
    let telefono = eTelefono.value;
    let comida = eComida.value;
    let personas = parseInt(ePersonas.value);
    let fecha = eFecha.value;
    let hora = eHora.value;
    let recomendacion = eRecomendacion.value;
    let horario = eHorario.valorSeleccionado;   

    
    const reserva = [];
    reserva[0] = nombre;
    reserva[1] = correo;
    reserva[2] = telefono;
    reserva[3] = comida;
    reserva[4] = personas;
    reserva[5] = fecha;
    reserva[6] = hora;
    reserva[7] = recomendacion;
    reserva[8] = horario;
    console.log(reserva);
    let listadoReserva =  localStorage.getItem("reserva");
    let listadoReservaAntiguo = JSON.parse(listadoReserva);
    if (listadoReservaAntiguo==null){
        let reserva = {"id":0, "nombre":nombre,"correo":correo,"telefono":telefono,"comida":comida,"personas":personas,"fecha":fecha,"hora":hora,"recomendacion":recomendacion,"horario":horario};
        listadoReservaNuevo = [reserva]
    }else{
        let reserva = {"id":listadoReservaAntiguo.lenght, "nombre":nombre,"correo":correo,"telefono":telefono,"comida":comida,"personas":personas,"fecha":fecha,"hora":hora,"recomendacion":recomendacion,"horario":horario};
        listadoReservaNuevo = [...listadoReservaAntiguo,reserva]
    }

    console.log(listadoReservaAntiguo);
    console.log(listadoReservaNuevo);
    localStorage.setItem('reserva',JSON.stringify(listadoReservaNuevo));
    
    cargarTabla(listadoReservaNuevo);
}  

var cargarDatos = ()=>{
  let listadoReservaAntiguo = localStorage.getItem("reserva");
  let listadoReservaNuevo = JSON.parse(listadoReservaAntiguo);
  cargarTabla(listadoReservaNuevo)
}

// Agrega un evento de escucha de clic al botón con el ID 'btnContraste'
document.getElementById('btnContraste').addEventListener('click',contraste);
// Agrega un evento de escucha de clic al botón con el ID 'btnFuente' 
document.getElementById('btnFuente').addEventListener('click',fuente);
// Agrega un evento de escucha de clic al boton con el ID 'btn'
document.getElementById("btn").addEventListener("click",registra);
addEventListener('load',cargarDatos)
import {tresEnRaya} from './tresEnRaya.js';
var a = new tresEnRaya();

function generaTabla() {
    // Obtener la referencia del elemento body
    var body = document.getElementsByTagName("body")[0];
   
    // Crea un elemento <table> y un elemento <tbody>
    var tabla   = document.createElement("table");
    tabla.setAttribute("id", "tabla"); 
    var tblBody = document.createElement("tbody");
   
    // Crea las celdas
    var numero=0;
    for (var i = 0; i < 3; i++) {
      // Crea las hileras de la tabla
      var hilera = document.createElement("tr");
   
      for (var j = 0; j < 3; j++) {
        // Crea un elemento <td> y un nodo de texto, haz que el nodo de
        // texto sea el contenido de <td>, ubica el elemento <td> al final
        // de la hilera de la tabla
        var celda = document.createElement("td");
        celda.setAttribute("id", numero);
        celda.addEventListener("click", hacerClic);
        /*var textoCelda = document.createTextNode("");
        celda.appendChild(textoCelda)*/
        hilera.appendChild(celda);
        numero++;
      }

      // agrega la hilera al final de la tabla (al final del elemento tblbody)
      tblBody.appendChild(hilera);
    }
   
    // posiciona el <tbody> debajo del elemento <table>
    tabla.appendChild(tblBody);
    // appends <table> into <body>
    body.appendChild(tabla);
    // modifica el atributo "border" de la tabla y lo fija a "2";
    tabla.setAttribute("border", "2");
  }

  function generaBoton(){
    var boton = document.createElement("button");
    boton.innerHTML="Juego Nuevo";
    boton.addEventListener("click", juegoNuevo);
    document.body.appendChild(boton);
  }

  function juegoNuevo(){
    a.tablero = [0, 0, 0, 0, 0, 0, 0, 0, 0];
    a.jugador = 0;
    let tablero = document.getElementsByTagName('table')[0];
    let boton = document.getElementsByTagName('button')[0]; 
    document.body.removeChild(tablero);
    document.body.removeChild(boton);
    generaTabla();
    generaBoton();
  }

  function comprobarGanador(){
    if(a.ganador()==1){
      alert('Ha ganado jugador 1');
      desactivarCeldas();
    }else if(a.ganador()==2){
      alert('Ha ganado jugador 2');
      desactivarCeldas();
    }
  }

  function desactivarCeldas(){
    for(let i=0; i<=8; i++){
      var td = document.getElementsByTagName('td')[i];
      td.style.pointerEvents = "none";
    }
  }
function hacerClic(e){
  var z = event.target.id;
  a.rellenarCelda(z);
  if(a.jugador==1){
    var cuadrado = document.getElementById(z);
    cuadrado.style.backgroundColor="red";
  }else{
    var cuadrado = document.getElementById(z);
    cuadrado.style.backgroundColor="blue";
  }
  comprobarGanador();
}

  generaTabla();
  generaBoton();
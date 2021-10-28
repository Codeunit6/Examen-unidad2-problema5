alert('Bienvenido al programa de estacionamiento desarrollado por Fernando Brayan Mejia Gomez y Eduardo Antonio Mendez Sandoval');
var a=0;
var carro = new Array(3);
var hora; 
var pago;
var numero=0;
var numero2=0;
var maximo=5;
var contador=1;
var pagar;

function tomardatos(){
        if(a<=5){
            carro[0]=document.getElementById("placa").value;
            carro[1]=document.getElementById("marca").value;
            calculohora();
            document.getElementById("placa").value="";
            document.getElementById("marca").value="";
            a=a+1;
        }else{
            alert('Ya no quedan espacios');
        }
    llenartabla();
    maximo=maximo-1;
    alert('Gracias por su preferencia');
    console.log('Imprimo todos los datos: ' + carro[0]+ " " + carro[1]+ " " + carro[2]+" " + carro[3]);

}

function calculohora(){
    hora = prompt ("Ingrese las horas que estuvo en el estacionamiento"); 
    if(hora<=3){
        pago=100;
        carro[2]=hora;
        carro[3]=pago;
        alert('La tarifa es: '+pago+' por las ' +hora+' horas');
    }
    else if(hora>=4 && hora<=5){
        pago=200;
        carro[2]=hora;
        carro[3]=pago;
        alert('La tarifa es: '+pago+' por las ' +hora+' horas');
    }
    else if(hora>=6){
        pago=500;
        carro[2]=hora;
        carro[3]=pago;
        alert('La tarifa es: '+pago+' por las ' +hora+' horas');
    }
    else{
        alert('No especifico una hora, vuelva a intentar');
        calculohora();
    }
} 

function llenartabla(){
    document.getElementById("tab").innerHTML=document.getElementById("tab").innerHTML+
                    `<tr>
                        <th scope="row">${contador}</th>
                        <td>${carro[0]}</td>
                        <td>${carro[1]}</td>
                        <td>${carro[2]}</td>
                        <td>${carro[3]}</td>
                        <td><button id="eliminar" class="btn btn-primary margen-B borrar" onclick="pagartarifa()">Salir</button></td>
                    </tr>`;
                    contador=contador+1;
            }
function pagartarifa(){
    pagar = prompt("Ingrese el pago");
    if(pagar>=pago){
        pagar=pagar-pago;
        alert("Su cambio es: "+pagar+" Hasta pronto");
        $(document).on('click', '.borrar', function (event) {
            event.preventDefault();
            $(this).closest('tr').remove();
            a=a-1;
        });
    }else{
        alert("Ingrese una cantidad igual o mayor al pago");
        pagartarifa();
        $(document).on('click', '.borrar', function (event) {
            event.preventDefault();
            $(this).closest('tr').remove();
        });
    }
}

function doSearch() {
    var tableReg = document.getElementById('regTable');
    var searchText = prompt('Ingrese el dato a buscar').toLowerCase();
    for (var i = 1; i < tableReg.rows.length; i++) {
        var cellsOfRow = tableReg.rows[i].getElementsByTagName('td');
        var found = false;
        for (var j = 0; j < cellsOfRow.length && !found; j++) {
            var compareWith = cellsOfRow[j].innerHTML.toLowerCase();
            if (searchText.length == 0 || (compareWith.indexOf(searchText) > -1)) {
                found = true;
            }
        }
        if (found) {
            tableReg.rows[i].style.display = '';
        } else {
            tableReg.rows[i].style.display = 'none';
        }
    }
}
(function(document) {
    'use strict';

    var LightTableFilter = (function(Arr) {

      var _input;

      function _onInputEvent(e) {
        _input = e.target;
        var tables = document.getElementsByClassName(_input.getAttribute('data-table'));
        Arr.forEach.call(tables, function(table) {
          Arr.forEach.call(table.tBodies, function(tbody) {
            Arr.forEach.call(tbody.rows, _filter);
          });
        });
      }

      function _filter(row) {
        var text = row.textContent.toLowerCase(), val = _input.value.toLowerCase();
        row.style.display = text.indexOf(val) === -1 ? 'none' : 'table-row';
      }

      return {
        init: function() {
          var inputs = document.getElementsByClassName('light-table-filter');
          Arr.forEach.call(inputs, function(input) {
            input.oninput = _onInputEvent;
          });
        }
      };
    })(Array.prototype);

    document.addEventListener('readystatechange', function() {
      if (document.readyState === 'complete') {
        LightTableFilter.init();
      }
    });

  })(document);

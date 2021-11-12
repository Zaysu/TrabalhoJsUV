function enviar1(){
  result = document.getElementById('number').value;
  document.getElementById('resultado1').innerHTML = `
    <p id="resultado-value">o numero enviado foi: ${result} </p>
  `; 
}

function enviar2(){
  result2 = document.getElementById('cent').value;
  calculo = 100;
  document.getElementById('resultado2').innerHTML = `
    <p id="resultado-value">os metros digitados são: ${(result2 * calculo)} centimetros</p>
  `; 
}

function enviar3(){
  result3 = document.getElementById('centp').value;

  calculo3 = 0.393700787;
  document.getElementById('resultado3').innerHTML = `
    <p id="resultado-value">as polegadas digitados em centrimetro são: ${(result3 * calculo3)} </p>
  `; 
}


function enviar4(){
  result4 = document.getElementById('cpi').value;

  calculo4 = 3.14;
  calc4 = result4 * result4
  document.getElementById('resultado4').innerHTML = `
    <p id="resultado-value">O raio do circulo é: ${(calculo4 * calc4)} </p>
  `; 
}

function enviar5(){
  var not1 = document.getElementById('nota1').value;
  var not2 = document.getElementById('nota2').value;
  var not3 = document.getElementById('nota3').value;
  var not4 = document.getElementById('nota4').value;
  var media = 4;

  var calculo5 = parseInt(not1) + parseInt(not2) + parseInt(not3) + parseInt(not4);
  console.log(calculo5);
  var final = parseInt(calculo5) / parseInt(media);
 
  document.getElementById('resultado5').innerHTML = `
    <p id="resultado-value">a media das notas é de: ${final} </p>
  `; 
}

function enviar6(){
  var faren1 = document.getElementById('faren').value;
  var cal = parseInt(32);
  var cal2 = parseInt(9);
  var cal3 = parseInt(5);

  var calculo = parseInt(faren1) - parseInt(cal);
  console.log(calculo);
  var calculo2 = parseInt(calculo * cal3);
  console.log(calculo2);
  var calculo3 = parseInt(calculo2 / cal2);
  console.log(calculo3);

  document.getElementById('resultado6').innerHTML = `
    <p id="resultado-value">valor digitado em Celsius: ${calculo3} ° </p>
  `; 
}

function enviar7(){
  var celc2 = document.getElementById('celc').value * 1.8;
  var valcelc2 = parseInt(32);
  console.log(celc2);
  var celc3 = parseInt(celc2) + parseInt(valcelc2);

  document.getElementById('resultado7').innerHTML = `
  <p id="resultado-value">valor digitado em Farenheit: ${celc3} ° </p>
`; 
}


function enviar8(){
  var gas1 = document.getElementById('gas').value / 100;
  var alc1 = document.getElementById('alc').value;

  var vpg = parseInt(gas1);
  console.log(vpg);
  var vpg2 = parseInt(vpg) * 70;
  console.log(vpg2);


  if (alc1 <= vpg2){
    document.getElementById('resultado8').innerHTML = `
    <p id="resultado-value">é mais vantajoso abastecer com álcool </p>
  `; 
  }else{
    document.getElementById('resultado8').innerHTML = `
    <p id="resultado-value">é mais vantajoso abastecer com Gasolina </p>
  `; 
  }  

}
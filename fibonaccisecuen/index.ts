// Ejercicio de Fibonacci en forma secuencial
let rotulo1= document.getElementById("rotulo1");
let dato1=document.getElementById("dato1"):

rotulo1.innerHTML = "Ingrese un numero:";
let numero: number = Number(dato1.value);


function calcularFibonacciSec(n:number):number {
  let resultado:number = 0;
  let indice:number, aux1:number, aux2:number;
  aux1 = 1;
  for (indice=1; indice <=n; indice++) {
  aux2=resultado;
  resultado=aux1;
  aux1=aux2+aux1;
  };
  return resultado;
  }
  console.log(calcularFibonacciSec(numero));
  
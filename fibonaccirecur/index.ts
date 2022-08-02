//Ejercicios de Recursion- calcularFibonacciRec
//Ejercicio con una funcion recursiva

let dato1 = document.getElementById("dato1");
let rotulo1 = document.getElementById("rotulo1");

rotulo1.innerHTML = "Ingrese un numero:";
let numero: number = Number(dato1.value);

function calcularFibonacciRec(n: number): number {
  let resultado: number = 0;
  if (n > 1) {
    resultado = calcularFibonacciRec(n - 1) + calcularFibonacciRec(n - 2);
  } else {
    resultado = n;
  }
  return resultado;
}

console.log(calcularFibonacciRec(numero));

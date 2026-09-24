var a = parseFloat(prompt("Digite o valor de A: "));
var b = parseFloat(prompt("Digite o valor de B: "));
var c = parseFloat(prompt("Digite o valor de C: "));

if (a == b && b == c) {
    console.log("O triângulo é equilátero");
} else if (a == b || a == c || b == c) {
    console.log("O triângulo é isósceles");
} else {
    console.log("O triângulo é escaleno");
}
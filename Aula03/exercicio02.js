// exercício 01
let numero1 = -5;
if (numero1 >=0) {
    console.log("Positivo");
} else {
    console.log("Negativo");
}

// exercício 02
let idade1 = 17;
if (idade1 >=18) {
    console.log("Você é maior de idade");
} else {
    console.log("Você é menor de idade");
}

// exercício 03
let numero2 =8;
if (numero2 % 2 === 0) {
    console.log("Par)");
} else {
    console.log("Ímpar");
}

// exercício 04
let nota = 9;

if (nota >=6){
    console.log("Aprovado");
} else {
    console.log ("Reprovado")
}

// exercício 5
let idadeVoto = 16;
if (idadeVoto >= 16) {
    console.log("Pode votar");
} else {
    console.log("Não pode votar");
}

// exercício 6
let senha = "1234";
if (senha ==="1234") {
    console.log("Acesso permitido");
} else {
    console.log("Acesso negado");
}

// exercício 7
let temperatura = 30;
if (temperatura >= 25) {
    console.log("Está quente!")
} else {
    console.log("Está frio");
}

// exercício 8 
let altura = 1.60
if (altura >=1.40) {
    console.log("Pode entrar");
} else {
    console.log("Não pode entrar");
}

// exercício 9 
let numero3 = 0;
if (numero3 > 0) {
    console.log("Positivo")
} else if (numero3 < 0) {
    console.log("Negativo")
} else {
    console.log ("Zero");
}

// exercício 10
let notas = 8;
if (notas >= 9) {
    console.log("Excelente");
} else if (notas >= 7) {
    console.log("Bom");
} else if (notaClass === 6) {
console.log("Regular");
} else {
console.log("Reprovado");
}

// exercício 11
let idade2 = 20;
let TemCNH = true;
if (idade >= 18 && TemCNH) {
    console.log("Pode dirigir");
} else {
    console.log("Não pode dirigir");
}

// exercício 12
let valorCompra = 150;

if (valorCompra > 100) {
console.log("Ganhou desconto");
} else {
console.log("Sem desconto");
}

// exercício 13
let usuario = "admin";
let senhaLogin = "123";

if (usuario === "admin" && senhaLogin === "123") {
console.log("Login realizado");
} else {
console.log("Erro de login");
}

// exercício 14
let idadeFilme = 17;

if (idadeFilme >= 16) {
console.log("Pode assistir");
} else {
console.log("Não pode assistir");
}

// exercício 15
let cor = "verde";

if (cor === "verde") {
console.log("Pode passar");
} else if (cor === "amarelo") {
console.log("Atenção");
} else if (cor === "vermelho") {
console.log("Pare");
}

// exercício extra
// Uma escola possui as seguintes regras para a aprovação:
// Se a média for menor que 5 -> Reprovado
// Se a média for entre 5 e 6.9 -> Recuperação
// Se a média for 7 ou mais -> Aprovado
// Porém, existem regras extras:
// Se o aluno tiver mais de 20 faltas, ele reprova independente da média
// Se a média for maior que 9 e faltas menor que 5, mostrar:
// "Aprovado com excelência"

let media = 9.5;
let faltas = 3;

if (faltas > 20) {
    console.log("Reprovaado");
} else if (media > 9 && faltas < 5) {
    console.log("Aprovado com excelência");
} else if (media >= 7) {
    console.log("Aprovado")
} else if (media >=5) {
    console.log("Recuperação");
} else {
    console.log("Reprovação");
}
let word="";
let opção=";"

do{
    word= prompt("Digite uma palavra");
    console.log (`A hora do(a) ${word}`);
    console.log (`O(A) ${word} de Oz`)
    console.log (`11 homens e um(a) ${word}`)
    console.log (`${word} dos Macacos`)
    console.log (`Procurando ${word}`)

    opção= prompt("Gostaria de jogar novamente?\n Digite 'S' para SIM e 'N' para NÃO");

}while ((opção =="S"|| opção =="s"));
let opção ="";
let num = 0;

do{
    num= parseInt(prompt("Digite um Numero"));
    num = num * 2;
    console.log (`O dobro desse numero é: ${num}`);
    
    opção= prompt("Deseja sair?\nDigite 'S' para Sim e 'N' para Não");
    
}while (!(opção =="S" || opção =="s"));
    console.log("Até Logo");
    
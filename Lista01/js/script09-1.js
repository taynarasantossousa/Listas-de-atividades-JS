//Exemplo Escolha-Caso Switch-case

let diaDaSemana =parseInt( prompt("Digite o número para saber o dia da semana:"))

switch (diaDaSemana) {
    case 1:
        alert("Domingo")
        break;

    case 2:
        alert("Segunda")
        break;

    case 3:
        alert("Terça")
        break;

    case 4:
        alert("Quarta")
        break;

    case 5:
        alert("Quinta")
        break;

    case 6:
        alert("Sexta")
        break;

    case 7:
        alert("Sábado")
        break;
        default:
        alert("Não há dia correspondente")
        break;
}
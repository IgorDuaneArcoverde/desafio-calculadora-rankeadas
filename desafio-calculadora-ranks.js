//============ desafio calculadora ==============//
function saldo (vitorias, derrotas){

    let result = vitorias - derrotas
    return result
    }

let saldoDeRank = saldo (30, 20)
let nivel = ["Ferro", "Bronze", "Prata", "Ouro", "Diamante", "Lendário", "Imortal"]
if (saldoDeRank<10){
    console.log("O Herói tem um saldo de " + saldoDeRank + " vitórias e está no nível de " + nivel[0])
} else if ((saldoDeRank>=11) && (saldoDeRank<=20)){
    console.log("O Herói tem um saldo de " + saldoDeRank + " vitórias e está no nível de " + nivel[1])
} else if ((saldoDeRank>=21) && (saldoDeRank<=50)){
    console.log("O Herói tem um saldo de " + saldoDeRank + " vitórias e está no nível de " + nivel[2])
}else if ((saldoDeRank>=51) && (saldoDeRank<=80)){
    console.log("O Herói tem um saldo de " + saldoDeRank + " vitórias e está no nível de " + nivel[3])
}else if ((saldoDeRank>=81) && (saldoDeRank<=90)){
    console.log("O Herói tem um saldo de " + saldoDeRank + " vitórias e está no nível de " + nivel[4])
}else if ((saldoDeRank>=91) && (saldoDeRank<=100)){
    console.log("O Herói tem um saldo de " + saldoDeRank + " vitórias e está no nível de " + nivel[5])
}else if (saldoDeRank>=101){
    console.log("O Herói tem um saldo de " + saldoDeRank + " vitórias e está no nível de " + nivel[6])
}
else {
    console.log("Número de vitórias não aceitas.")
}
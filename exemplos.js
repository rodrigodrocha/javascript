let atletas = [
    {
      nome: "Cesar Abascal",
      notas: [10, 9.34, 8.42, 10, 7.88]
    },
    {
      nome: "Fernando Puntel",
      notas:  [8, 10, 10, 7, 9.33]
    },
    {
      nome: "Daiane Jelinsky",
      notas: [7, 10, 9.5, 9.5, 8]
    },
    {
      nome: "Bruno Castro",
      notas: [10, 10, 10, 9, 9.5]
    }
];
let nomesDosCompetidores = 0
let mediaValida = 0
let notasObtidas = 0
for (let i = 0; i < atletas.length; i++){
    
    nomesDosCompetidores = atletas.map(function(nomes){
        return nomes.nome
    })
    notasObtidas = atletas.map(function(notas){
        let total = notas.notas
        total.sort(function(a, b) {
            return a - b;
        });
        return total
    })

}


for (let i = 0; i < atletas.length; i++){
    switch(i){
        case 0:
            console.log(`Atleta: ${nomesDosCompetidores[0]}`)
            console.log(`Notas Obtidas: ${notasObtidas[0]}`)
            let notasAtleta = notasObtidas[0].slice(1, notasObtidas[0].length-1)
            let soma = notasAtleta.reduce(function(total,atual){
                return (total + atual)
            })
            let media = soma/notasAtleta.length
            console.log(`Média Válida ${media}`)
            console.log()
            break
        case 1:
            console.log(`Atleta: ${nomesDosCompetidores[1]}`)
            console.log(`Notas Obtidas: ${notasObtidas[1]}`)
            let notasAtleta1 = notasObtidas[1].slice(1, notasObtidas[1].length-1)
            let soma1 = notasAtleta1.reduce(function(total,atual){
                return (total + atual)
            })
            let media1 = soma1/notasAtleta1.length
            console.log(`Média Válida ${media1}`)
            console.log()
            break
        case 2:
            console.log(`Atleta: ${nomesDosCompetidores[2]}`)
            console.log(`Notas Obtidas: ${notasObtidas[2]}`)
            let notasAtleta2 = notasObtidas[2].slice(1, notasObtidas[2].length-1)
            let soma2 = notasAtleta2.reduce(function(total,atual){
                return (total + atual)
            })
            let media2 = soma2/notasAtleta2.length
            console.log(`Média Válida ${media2}`)
            console.log()
            break
        case 3:
            console.log(`Atleta: ${nomesDosCompetidores[3]}`)
            console.log(`Notas Obtidas: ${notasObtidas[3]}`)
            let notasAtleta3 = notasObtidas[3].slice(1, notasObtidas[3].length-1)
            let soma3 = notasAtleta3.reduce(function(total,atual){
                return (total + atual)
            })
            let media3 = soma3/notasAtleta3.length
            console.log(`Média Válida ${media3}`)
            console.log()
            break
        default:
            console.log("Atleta não cadastrado");
        }
}
const fs = require('fs') //File System para ler e escrever arquivos no nodejs

//EXEMPLO DE asyn/await = açuca sintático em cima da promise
console.log(1)

const readFile = (file) => new Promise((resolve, reject) => { //Criando uma função dentro de uma constante que cria uma promessa que recebe como parametros uma solução e uma rejeição da promessa
    fs.readFile(file, (error, contents) => { //Ler o arquivo e passa uma callback que irá ser chamada assim que o arquivo tiver sido lido
        if(error){ //Se tiver dado error na hora de ler o arquivo, então vou rejeitar minha promessa
            reject(error) //Retorna o erro
        }else{
            resolve(contents) //Retorna o conteúdo lido do arquivo de texto
        }
    })
})

const init = async() => { //Criando função assíncrona dentro de init, e nesse caso o init é uma promise
    try {
        const contents1 = await readFile('./texto1.txt') //Chama a função para ler o arquivo de texto e DEPOIS DE ESPERAR A LEITURA DO ARQUIVO, armazena a resposta dentro de contents1
        const contents2 = await readFile('./texto2.txt') //Chama a função para ler o arquivo de texto e DEPOIS DE ESPERAR A LEITURA DO ARQUIVO, armazena a resposta dentro de contents2
        return String(contents1) + '\n' + String(contents2)
    
    } catch (error) { //Se der erro
        console.log(error)
    }
    
}

init().then(contents => console.log(contents)) //Executa a função init e ao fazer isso ele faz uma promessa de retornar alguma coisa quando estiver pronto

console.log(2)

console.log(3)



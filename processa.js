const fs = require('fs') //File System para ler e escrever arquivos no nodejs

console.log(1)

/*
//Callbacks são assícronas, pois elas só são chamadas depois que uma determinada ação ou requisição é finalizada
fs.readFile('./texto1.txt', (error1, content1) => { //Vai ler esse arquivo e quando estiver pronto, CHAMA ELA DE VOLTA => CALLBACK
    fs.readFile('texto2.txt', (error2, content2) => {
        console.log(error1, String(content1))
        console.log(error2, String(content2))
    })
});
*/
//NAS CALLBACKS EU CHAMO DEPOIS
//NAS PROMISES EU RETONO DE IMEDIATO QUE NO FUTURO NO FUTUTO IREI TRZAER UM VALOR PRA AQUELA FUNÇÃO

const readFile = (file) => new Promise((resolve, reject) => { //Criando uma função dentro de uma constante que cria uma promessa que recebe como parametros uma solução e uma rejeição da promessa
    fs.readFile(file, (error, contents) => { //Ler o arquivo e passa uma callback que irá ser chamada assim que o arquivo tiver sido lido
        if(error){ //Se tiver dado error na hora de ler o arquivo, então vou rejeitar minha promessa
            reject(error) //Retorna o erro
        }else{
            resolve(contents) //Retorna o conteúdo lido do arquivo de texto
        }
    })
})

readFile('./texto1.txt')
    .then( contents => { //Se der certo
        console.log(String(contents)) //Vai escrever no terminal a resposta da promessa
        return readFile('./texto2.txt') //Vai executar uma leitura no arquivo de texto e fazer uma promessa para quando a leitura estiver pronto
    })
    .then(contents => { //Assim que terminar de ler o texto, retorna o conteúdo dele
        console.log(String(contents)) //E escreve o conteudo no console
    })
    

console.log(2)

console.log(3)
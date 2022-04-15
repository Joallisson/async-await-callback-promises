const fs = require('fs') //File System para ler e escrever arquivos no nodejs


//EXEMPLO DE CALLBACK
//Callbacks são assícronas, pois elas só são chamadas depois que uma determinada ação ou requisição é finalizada
console.log(1)
fs.readFile('./texto1.txt', (error1, content1) => { //Vai ler esse arquivo e quando estiver pronto, CHAMA ELA DE VOLTA => CALLBACK
    fs.readFile('texto2.txt', (error2, content2) => {
        console.log(error1, String(content1))
        console.log(error2, String(content2))
    })
});
console.log(2)

console.log(3)
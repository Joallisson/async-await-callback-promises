const fs = require('fs') //File System para ler e escrever arquivos no nodejs

console.log(1)

fs.readFile('./texto1.txt', (error, content) => { //Vai ler esse arquivo e quando estiver pronto, chama ele de volta => callback
    console.log(error, String(content))
}); 

console.log(2)

console.log(3)
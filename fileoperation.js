//Créer un nouveau fichier welcome.txt
const fs = require('fs');

fs.writeFile('welcome.txt', 'Hello Node', (err) => {
    if (err) throw err;
    console.log('File created successfully!');
});

//Lire un fichier hello.txt
const fs = require('fs');

fs.readFile('hello.txt', 'utf8', (err, data) => {
    if (err) throw err;
    console.log(data);
});

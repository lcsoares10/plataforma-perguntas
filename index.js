const express = require('express');

const app = express();
//Dizendo para o express que vou usar o ejs para renderizar html
app.set('view engine', 'ejs');
app.use(express.static('public'));
app.get('/:nome/:idade',(req,res)=>{
    var nome = req.params.nome;
    var idade = req.params.idade;
    res.render("index",{
        nome,
        empresa: 'Lucas Soares Developer',
        idade
    });// o render olha automaticamente para a pasta views

});

app.listen(3000,()=>{
    try {
        console.log('Seu servidor foi iniciado na porta 3000 !!!')        
    } catch (error) {
        console.log('Erro ao tentar startar o servido')
    }
});
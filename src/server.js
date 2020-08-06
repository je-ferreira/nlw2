/*comando pra executar o servidor: node src/server.js*/
/* npm install nodemon -D  (pra n precisar ficar reiniciando o servidor, e insere o script no package.json)*/
/* npm run dev (pra rodar o nodemon) */
/* npm install nunjucks */


// Dados
const proffys = [
    {
        name: "Diego Fernandes",
        avatar: "https://avatars2.githubusercontent.com/u/2254731?s=460&amp;u=0ba16a79456c2f250e7579cb388fa18c5c2d7d65&amp;v=4",
        whatsapp: "123456789",
        bio: "Entusiasta das melhores tecnologias de química avançada.<br><br>Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.",
        subject: "Química",
        cost: "20",
        weekday: [0],
        time_from: [720],
        time_to: [1220]
    },
    {
        name: "Daniele Evangelista",
        avatar: "https://avatars2.githubusercontent.com/u/2254731?s=460&amp;u=0ba16a79456c2f250e7579cb388fa18c5c2d7d65&amp;v=4",
        whatsapp: "123456789",
        bio: "Entusiasta das melhores tecnologias de química avançada.<br><br>Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.",
        subject: "Química",
        cost: "20",
        weekday: [1],
        time_from: [720],
        time_to: [1220]
    },
    {
        name: "Daniele Evangelista 2",
        avatar: "https://avatars2.githubusercontent.com/u/2254731?s=460&amp;u=0ba16a79456c2f250e7579cb388fa18c5c2d7d65&amp;v=4",
        whatsapp: "123456789",
        bio: "Entusiasta das melhores tecnologias de química avançada.<br><br>Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.",
        subject: "Química",
        cost: "20",
        weekday: [1],
        time_from: [720],
        time_to: [1220]
    }
]

const subjects = [
    "Artes",
    "Biologia",
    "Ciências",
    "Educação Física",
    "Física",
    "Geografia",
    "História",
    "Matemática",
    "Química",
    "Português",
]

const weekdays = [
    "Domingo",
    "Segunda-feira",
    "Terça-feira",
    "Quarta-feira",
    "Quinta-feira",
    "Sexta-feira",
    "Sábado"
]

// Funcionalidades
function getSubject(subjectNumber) {
    const arrayPosition = +subjectNumber - 1 /* numero enviado-1 (porque array inicia em 0, mas lista no html inicia em 1) */
    return subjects[arrayPosition] /* retorna com o nome equivalente */
}

function pageLanding(req, res) {
    return res.render("index.html") //render é do nunjucks
}

function pageStudy(req, res) {
    //pegar os dados da pagina
    const filters = req.query

    return res.render("study.html", { proffys, filters, subjects, weekdays })
}

function pageGiveClasses(req, res) {
    //pegar os dados da pagina
    const data = req.query

    //pegar as chaves do objeto e transformar em um array, 'se o lenght for maior que 0, insere'
    const isNotEmpty = Object.keys(data).length > 0
    //se tiver dados
    if (isNotEmpty) {
        data.subject = getSubject(data.subject) /* pegar o nome da materia, pra n aparecer o numero */
        //adicionar dados a lista de proffys
        proffys.push(data)
        return res.redirect("/study")
    }

    //se nao, nao adicionar (apenas retornar a mesma pagina)
    return res.render("give-classes.html", { subjects, weekdays})
}

// Servidor
const express = require('express')
const server = express()

// configurar nunjucks (template engine)
const nunjucks = require('nunjucks')
nunjucks.configure('src/views', {
    express: server,
    noCache: true,
})

// Inicio a configuração do servidor
server
// configurar arquivos estáticos (css, scripts, imagens)
    .use(express.static("public"))
// rotas da aplicação
    .get("/", pageLanding)
    .get("/study", pageStudy)
    .get("/give-classes", pageGiveClasses)
// start no servidor
    .listen(5500) 
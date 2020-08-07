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

//Funcionalidade pra pegar o nome da matéria
function getSubject(subjectNumber) {
    const arrayPosition = +subjectNumber - 1 /* numero enviado-1 (porque array inicia em 0, mas lista no html inicia em 1) */
    return subjects[arrayPosition] /* retorna com o nome equivalente da materia */
}

//Funcionalidade para conversão de horas em minutos
function convertHoursToMinutes(time) {
    const [hour, minutes] = time.split(":") /* devolve 1 array, separando em 2 variaveis */
    return Number((hour*60) + minutes)
}


module.exports = {
    subjects,
    weekdays,
    getSubject,
    convertHoursToMinutes
}
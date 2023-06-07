// SNACK 1
const guest = [ 'Brad Pitt', 'Johnny Depp', 'Lady Gaga', 'Cristiano Ronaldo', 'Georgina Rodriguez', 'Chiara Ferragni', 'Fedez', 'George Clooney', 'Amal Clooney', 'Maneskin'];

const invitation_array = guest.map((guest, i) => {
    return {'_nome_del_tavolo_': 'Tavolo Vip', '_nome_dell_ospite_': guest, '_posto_occupato_': i}
})

console.log(invitation_array);


// SNACK 2
const students = [
    {
        'id': '213',
        'name': 'Marco della Rovere',
        'grades': '78'
    },
    {
        'id': '110',
        'name': 'Paola Cortellessa',
        'grades': '96'
    },
    {
        'id': '250',
        'name': 'Andrea Mantegna',
        'grades': '48'
    },
    {
        'id': '145',
        'name': 'Gaia Borromini',
        'grades': '74'
    },
    {
        'id': '196',
        'name': 'Luigi Grimaldello',
        'grades': '68'
    },
    {
        'id': '102',
        'name': 'Piero della Francesca',
        'grades': '50'
    },
    {
        'id': '120',
        'name': 'Francesca da Polenta',
        'grades': '84'
    }
]

console.log(students)

const plates = students.map((student) => student.name.toUpperCase());

console.log(plates);

const super_students = students.filter((student) => student.grades > 70);

console.log(super_students);

const ultra_students = students.filter((student) => student.grades > 70 && student.id > 120);

console.log(ultra_students);
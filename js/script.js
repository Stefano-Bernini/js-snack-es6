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



// SNACK 3
const arrayBici = [
    {
        nome: 'Bianca',
        peso: 20
    },
    {
        nome: 'Rossa',
        peso: 25
    },
    {
        nome: 'Nera',
        peso: 15
    },
    {
        nome: 'Viola',
        peso: 17
    },
    {
        nome: 'Gialla',
        peso: 30
    },
    {
        nome: 'Arancione',
        peso: 18
    },
];

let biciLeggera = arrayBici[0];

arrayBici.forEach((element) => {
    if(element.peso < biciLeggera.peso){
        biciLeggera = element;
    }
});

console.log(biciLeggera);

let {nome, peso} = biciLeggera;

console.log(`La bici piu' leggera e' la ${nome} e pesa ${peso}`);



// SNACK 4
function generateRandomNumber(min, max){
    return Math.floor(Math.random() * (max - min + 1) - min);
}

const squadre = [
    {
        nome: 'Milan',
        punti: 0,
        falli: 0
    },
    {
        nome: 'Juventus',
        punti: 0,
        falli: 0
    },
    {
        nome: 'Inter',
        punti: 0,
        falli: 0
    },
    {
        nome: 'Roma',
        punti: 0,
        falli: 0
    },
    {
        nome: 'Lazio',
        punti: 0,
        falli: 0
    },
    {
        nome: 'Napoli',
        punti: 0,
        falli: 0
    },
    {
        nome: 'Fiorentina',
        punti: 0,
        falli: 0
    },
    {
        nome: 'Torino',
        punti: 0,
        falli: 0
    },
    {
        nome: 'Sassuolo',
        punti: 0,
        falli: 0
    },
    {
        nome: 'Monza',
        punti: 0,
        falli: 0
    }
];

squadre.forEach((element) => {
    element.punti = generateRandomNumber(1, 90);
    element.falli = generateRandomNumber(1, 20);
})

console.log(squadre)

const newTeams = squadre.map((element) => {
    const {nome, falli} = element;
    let obj = {
        nome,
        falli
    }

    return obj;
});

console.log(newTeams);
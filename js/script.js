// SNACK 1
const guest = [ 'Brad Pitt', 'Johnny Depp', 'Lady Gaga', 'Cristiano Ronaldo', 'Georgina Rodriguez', 'Chiara Ferragni', 'Fedez', 'George Clooney', 'Amal Clooney', 'Maneskin'];

const invitation_array = guest.map((guest, i) => {
    return {'_nome_del_tavolo_': 'Tavolo Vip', '_nome_dell_ospite_': guest, '_posto_occupato_': i}
})

console.log(invitation_array);
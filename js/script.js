

// Ciao ragazzi, esercizio di oggi: (insicurissimo) password generator
// nome repo: js-pwdgen-wannabe
// Chiedi all’utente il suo nome, poi chiedi il suo cognome, poi chiedi il suo colore preferito Infine scrivi sulla pagina nomecognomecolorepreferito21 (esempio pipporossigreen21)


let myName = prompt('my name');
console.log(myName);

let myLastName = prompt('my last name');
console.log(myLastName);

let myFavColor = prompt('favorite color');
console.log(myFavColor);

const num = 21;
console.log(num);


// let somma = myName + myLastName + myFavColor + num;
// console.log(somma);

let somma = (`${myName}${myLastName}${myFavColor}`) + num;
console.log(somma);

document.getElementById('password').innerHTML = somma;
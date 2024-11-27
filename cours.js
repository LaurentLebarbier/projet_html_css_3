

let x = 5;
let y = -20;

if(x >= 0 && x <= 10){
    document.getElementById('p1').innerHTML =
    'x contient une valeur comprise entre 0 et 10';
}

if(y < -10 || y > 10){
    document.getElementById('p2').innerHTML =
    'y contient une valeur plus petite que -10 ou plus grande que 10';
}

if(!(x <= 2)){
    document.getElementById('p3').innerHTML =
    'x contient une valeur strictement supérieure à 2';
}


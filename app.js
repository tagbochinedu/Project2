let card1 = document.querySelector('#card1');
let card2 = document.querySelector('#card2');
let card3 = document.querySelector('#card3');
let annual = document.querySelector('#annual');
let month = document.querySelector('#month');
let check = document.querySelector('label input')


check.addEventListener('click', chck);


function chck() {
    if(card1.innerHTML === '$199.99') {
        card1.innerHTML = "$19.99";
        card2.innerHTML = '$24.99';
        card3.innerHTML = '$39.99';
    }
    else{
        card1.innerHTML = "$199.99";
        card2.innerHTML = '$249.99';
        card3.innerHTML = '$399.99';
    }
    
    
}


const griagliaDom = document.querySelector('#griglia');
const giocaDom = document.querySelector('#gioca');
const haiVintoDom = document.querySelector('#vinto');
const haiPersoDom = document.querySelector('#perso');



giocaDom.addEventListener('click', function() { 
    griagliaDom.classList.remove('grigliaPiccola');
    griagliaDom.classList.remove('grigliaMedia');

    haiPersoDom.classList.add('dnone');
    haiVintoDom.classList.add('dnone');
   
    let difficoltaDom = document.querySelector('#difficolta');
    let valoredifficoltaDom = difficoltaDom.value;
    griagliaDom.innerHTML = ``;

    let punto = 0;
    let punteggioDom = document.querySelector('#punteggio');
    punteggioDom.innerHTML  = `${punto}`;

    let listaBombe = [];
    let numeroBombe = 16;
    
    let numeroquadrati = scegliDifficolta (valoredifficoltaDom);

    for (let i = 0; i < numeroBombe; i++) {
        let bomba = generaNumeroCasualeUnico(listaBombe, 1, numeroquadrati);
        listaBombe.push(bomba);
        console.log(listaBombe);
    }    

    
    for (let i = 1; i <= numeroquadrati; i++) {
        
        let punteggioVincente = numeroquadrati - numeroBombe;
        const currentQuadrato = createQuadrato(i);                    
        currentQuadrato.addEventListener('click', function() {
            
            if (punto == punteggioVincente - 1) {
                haiVintoDom.classList.remove('dnone');
            } else {
                    if (listaBombe.includes(i)) {
                    this.classList.add('bomba');
                    haiPersoDom.classList.remove('dnone');
                    } else {
                    this.classList.add('cliccato');
                    console.log(i);
                    punto += 1;
                }
            }

            punteggioDom.innerHTML  = `${punto}`;
           
        })
        griagliaDom.append(currentQuadrato);
        currentQuadrato.innerHTML = `${i}`;

        

    }

  
})

function createQuadrato() {
    const currentElement = document.createElement('div');
    currentElement.classList.add('quadrato');
    return currentElement
}

function scegliDifficolta (valore) {  
    if (valore == 'facile') {
        return 100
    } else if (valore == 'media') {
        griagliaDom.classList.add('grigliaMedia');
        return 81
    }   else {
        griagliaDom.classList.add('grigliaPiccola');
        return 49
    }
}

function generaNumeroCasuale (min, max) {
    const numeroCasuale = Math.floor(Math.random() * (max-min +1) +min);
    return numeroCasuale;
}

function generaNumeroCasualeUnico (lista, min, max,){
    let numeroValido = false;
    let numeroCasualeValido;

    while (!numeroValido) {
        numeroCasualeValido = generaNumeroCasuale(min, max);
        if (!lista.includes(numeroCasualeValido)) {
            numeroValido = true;
        }
    }
    
    return numeroCasualeValido;
}






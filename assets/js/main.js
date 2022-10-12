/* Dato un array contenente una lista di cinque immagini, creare un carosello come nello screenshot allegato.
MILESTONE 1
Per prima cosa, creiamo il markup statico: costruiamo il container e inseriamo un'immagine grande al centro: 
avremo così la struttura base e gli stili pronti per poterci poi concentrare solamente sull'aspetto logico.
MILESTONE 2
Adesso rimuoviamo tutto il markup statico e inseriamo tutte le immagini dinamicamente servendoci dell'array 
fornito e un semplice ciclo for che concatena un template literal. Tutte le immagini saranno nascoste, 
tranne la prima, che avrà una classe specifica che la renderà visibile. 
Al termine di questa fase ci ritroveremo con lo stesso slider stilato nella milestone 1, 
ma costruito dinamicamente attraverso JavaScript.
MILESTONE 3
Al click dell'utente sulle frecce, il programma cambierà l’immagine attiva, che quindi verrà visualizzata al posto della precedente. */


//creo l'array' contenente il percorso alle immagini
const imageList = [
    '../img/01.webp',
    '../img/02.webp',
    '../img/03.webp',
    '../img/04.webp',
    '../img/05.webp'
]
//recupero l'elemento dal DOM
const slideBoxEl = document.querySelector('.slide_box');

//creo una variabile che mi indichi l'immagine attiva, la prima, ossia 0
//let perchè cambierà il suo valore man mano
let activeImg = 0;

//ciclo for che scorre le immagini nella lista
for (let i = 0; i < imageList.length; i++) {
    const singleImage = imageList[i];
    //console.log(singleImage);

    //inserisco l'immagine nel DOM con tutto il tag), quindi creo l'emento da inserire in slideBoxEl(classe slide_box)
    //qui, activeimage corrisponde a i che cambierà la sua posizione man mano la lista
    const imageEl = `<img class="${i === activeImg ? 'active' : ''}" src="&{singleImage}" alt="">`;
    slideBoxEl.insertAdjacentHTML('beforeend', imageEl);
}
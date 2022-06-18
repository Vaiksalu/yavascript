console.log ('hello from script'); // testin ühendust

// massiiv vahemällu midagi salvestamine
//vahemike kirjutamine on 0- algpunkt kuni üks värtus suurem ehk mitu väärtust on st vahemälu ja elementide vahel.
// images.length (massiivi pikkus) genereerime juhsuliku numbri lähtudes massivi pikkusest

// hakkab nüüd pilidi ja nupu kood
const images = ['pic1', 'pic2', 'pic3' , 'pic4', 'pic5'];
const mainImage = document.querySelector("img");
const mainButton = document.querySelector(".btn");
const yearSpan = document.querySelector("#year");

let timeNow = new Date();
let year = timeNow.getFullYear();

yearSpan.textContent = year;


let randomIndex = Math.floor(Math.random() * images.length);
let randomImage = images[randomIndex];

mainButton.addEventListener('click', () => {

    let randomIndex = Math.floor(Math.random() * images.length);
    let randomImage = images[randomIndex];

   mainImage.src = "images/" + randomImage + ".jpg";


});

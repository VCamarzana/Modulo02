// var Balmoral = {
//     name: "Balmoral suites",
//     location: "Benalmádena",
//     description: "Maravilloso hotel con piscina.",
//     image: "img/hotel01.jpg",
// }
// document.getElementById("hotel-name").innerHTML = "Hotel " + Balmoral.name;
// document.getElementById("hotel-location").innerHTML = Balmoral.location;
// document.getElementById("hotel-description").innerHTML = Balmoral.description;
// document.getElementById("hotel-image").src = Balmoral.image;

var hotelListe = {
    Balmoral: {
        name: "Balmoral suites",
        location: "Benalmádena",
        description: "Maravilloso hotel con piscina.",
        image: "img/hotel01.jpg",
    },
    balmoral: {
        name: "Balmoral suites",
        location: "Benalmádena",
        description: "Maravilloso hotel con piscina.",
        image: "img/hotel01.jpg",
    },
    Veracruz: {
        name: "Veracruz Deluxe",
        location: "Ciudad Real",
        description: "Habitaciones acogedoras.",
        image: "img/hotel02.jpg",
    },
    veracruz: {
        name: "Veracruz Deluxe",
        location: "Ciudad Real",
        description: "Habitaciones acogedoras.",
        image: "img/hotel02.jpg",
    },
};

var hotelChoice = prompt("¿Qué hotel desea seleccionar? \n Escriba Balmoral o Veracruz.");

document.getElementById("hotel-name").innerHTML = "Hotel " + hotelListe[hotelChoice].name;
document.getElementById("hotel-location").innerHTML = hotelListe[hotelChoice].location;
document.getElementById("hotel-description").innerHTML = hotelListe[hotelChoice].description;
document.getElementById("hotel-image").src = hotelListe[hotelChoice].image;


// var score = prompt("¿Qué valoración merece este hotel? \n Escriba su valoración del 1 al 5");
// document.getElementById("stars").innerHTML = score + "&#9733;" ;

var score = prompt("¿Qué valoración merece este hotel? \n Escriba su valoración en letras, del uno al cinco.");

var scoreStars = {
    uno: "&#9733;" + "&#9734;" + "&#9734;" + "&#9734;" + "&#9734;",
    dos: "&#9733;" + "&#9733;" + "&#9734;" + "&#9734;" + "&#9734;",
    tres: "&#9733;" + "&#9733;" + "&#9733;" + "&#9734;" + "&#9734;",
    cuatro: "&#9733;" + "&#9733;" + "&#9733;" + "&#9733;" + "&#9734;",
    cinco: "&#9733;" + "&#9733;" + "&#9733;" + "&#9733;" + "&#9733;",
    Uno: "&#9733;" + "&#9734;" + "&#9734;" + "&#9734;" + "&#9734;",
    Dos: "&#9733;" + "&#9733;" + "&#9734;" + "&#9734;" + "&#9734;",
    Tres: "&#9733;" + "&#9733;" + "&#9733;" + "&#9734;" + "&#9734;",
    Cuatro: "&#9733;" + "&#9733;" + "&#9733;" + "&#9733;" + "&#9734;",
    Cinco: "&#9733;" + "&#9733;" + "&#9733;" + "&#9733;" + "&#9733;",
}
document.getElementById("stars").innerHTML = scoreStars[score];


var opinion = confirm("¿Desea que su reseña permanezca anónima?");
document.getElementById("checkbox").checked = opinion;


var clientOpinion = prompt("¿Qué opina de este hotel");
document.getElementById("client-opinion").innerHTML = clientOpinion;


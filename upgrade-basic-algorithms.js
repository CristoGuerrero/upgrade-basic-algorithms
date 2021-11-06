let myFavoriteHero= "Hulk"
let x= 50;
let h= 10;
let y= 10;
let z= (h + y)

///// Dado el siguiente javascript, cambia el valor de la propiedad age a 25.
const character = {name: 'Jack Sparrow', age: 10};
character.age= 25
console.log(character)

////// Declara 3 variables con los nombres y valores siguientes 
	firstName = 'Jon'; 
	lastName = 'Snow'; 
	age = 24; 
////Muestralos por consola de esta forma: 
	'Soy Jon Snow, tengo 24 años y me gustan los lobos.'
let firstName ='Jon'
let lastName = 'Snow';
let age = 24; 

console.log("Soy " + firstName +" "+ lastName + "," + " tengo " + age + " años y me gustan los lobos.")

//////////Dado el siguiente javascript, imprime con un console.log la suma del precio de
ambos juguetes.///////
const toy1 = {name: 'Buss myYear', price: 19};
const toy2 = {name: 'Rallo mcKing', price: 29};

let fullPrice= toy1.price + toy2.price
console.log(fullprice)

///////Dado el siguiente javascript, actualiza el valor de la variable globalBasePrice a 25000 
//y actualiza la propiedad finalPrice de todos los coches con el valor de su propiedad 
///basePrice más el valor de la variable globalBasePrice.
let globalBasePrice = 10000;
const car1 = {name: 'BMW m&m', basePrice: 50000, finalPrice: 60000};
const car2 = {name: 'Chevrolet Corbina', basePrice: 70000, finalPrice: 80000};

globalBasePrice = 25000

car1.finalPrice=(car1.basePrice + globalBasePrice);
car2.finalPrice=(car2.basePrice + globalBasePrice);

console.log(car1.finalPrice)
console.log(car2.finalPrice)


////////1.1 Multiplica 10 por 5 y muestra el resultado mediante alert.
let x = 10
Let y = 5

alert(x * y)

//////
//1.2 Divide 10 por 2 y muestra el resultado en un alert.
let j = 10
let k = 2

alert(j/k)

/////
///1.3 Muestra mediante un alert el resto de dividir 15 por 9.
let l = 15
let m = 9

alert(l/m)
/////
////
////1.4 Usa el correcto operador de asignación que resultará en x = 15, 
//teniendo dos variables y = 10 y z = 5.
let y = 10
let z = 5
let x = (y + z)
console.log(x)

////
////1.5 Usa el correcto operador de asignación que resultará en x = 50,
//teniendo dos variables y = 10 y z = 5.
let y = 10
let z = 5
let x = (y * z)
console.log(x)

////
////`
///1.1 Consigue el valor "HULK" del array de cars y muestralo por consola.
const avengers = ["HULK", "SPIDERMAN", "BLACK PANTHER"];
avengers.reverse() 
avengers.pop()
avengers.reverse()
console.log(avengers)




//1.2 Cambia el primer elemento de avengers a "IRONMAN"
const avengers = ["HULK", "SPIDERMAN", "BLACK PANTHER"];
avengers.reverse()
avengers.push(IRONMAN)
avengers.reverse()
console.log(avengers)



///1.3 Alert numero de elementos en el array usando la propiedad correcta de Array.
const avengers = ["HULK", "SPIDERMAN", "BLACK PANTHER"];
alert(avengers.length)


///1.4 Añade 2 elementos al array: "Morty" y "Summer". 
//Muestra en consola el último personaje del array
const rickAndMortyCharacters = ["Rick", "Beth", "Jerry"];
rickAndMortyCharacters.push("morty", "Summer")

rickAndMortyCharacters[rickAndMortyCharacters.length - 1]



///1.5 Elimina el último elemento del array y muestra el primero y el último por consola.
const rickAndMortyCharacters = ["Rick", "Beth", "Jerry", "Morty", "Summer", "Lapiz Lopez"];
rickAndMortyCharacters.pop()
rickAndMortyCharacters[rickAndMortyCharacters.length - 1]
console.log(rickAndMortyCharacters[0])
console.log(rickAndMortyCharacters [4])

//1.6 Elimina el segundo elemento del array y muestra el array por consola.
const rickAndMortyCharacters = ["Rick", "Beth", "Jerry", "Morty", "Summer", "Lapiz Lopez"];
rickAndMortyCharacters.splice(1,1)
console.log(rickAndMortyCharacters)

//**Iteración #5: Condicionales**

//En base al código siguiente, muestra los mensajes correctos por consola.


const number1 = 10;
const number2 = 20;
const number3 = 2;

// ejemplo
if(number1 === 10){
    console.log('number1 es estrictamente igual a 10')
}

if (number2 / number1=== 2)) {
  console.log("number2 dividido entre number1 es igual a 2");
}

if (number1 !== number2) {
  console.log("number1 es estrictamente distinto a number2");
}

if (number3 != number1) {
  console.log("number3 es distinto number1");
}

if (number3 * 5 == number1) {
  console.log("number3 por 5 es igual a number1");
}

if (number3 * 5 == number1 && number1 * 2 == number2) {
  console.log("number3 por 5 es igual a number1 Y number1 por 2 es igual a number2");
}

if (number2 / 2 == number1 || number1 / 5 == number3) {
  console.log("number2 entre 2 es igual a number1 O number1 entre 5 es igual a number3");
}
//Iteración #6: Bucles
//1.1 Crea un bucle for que vaya desde 0 a 9 y muestralo por consola.
for (let i = 0; i < 10; i++)
console.log(i)

//1.2 Crea un bucle for que vaya desde 0 a 9 y muestralo por consola solo 
//cuando el resto del numero dividido entre 2 sea 0.
var pares = [''];
for ( pares=0; pares < 10; pares=pares +1 *2) {
      console.log( pares);

1.3 Crea un bucle para conseguir dormir contando ovejas. 
Este bucle empieza en 0 y termina en 10. 
Muestra por consola un mensaje diciendo 'Intentando dormir' en cada vuelta del bucle 
y cambia el mensaje en la última vuelta a 'Dormido!'.

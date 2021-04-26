
let num1= parseInt(window.prompt("Conozcamos tu número de la suerte, escribe tu dia de nacimiento"))
let num2= parseInt(window.prompt("Introduce ahora tu mes de nacimiento"))
let num3= parseInt(window.prompt("Introduce ahora tu año de nacimiento"))

suerte= (num1+num2+num3)

let dig1= parseInt((suerte%10000/1000))
let dig2= parseInt((suerte%1000/100))
let dig3= parseInt((suerte%100/10))
let dig4= parseInt(suerte%10)

document.write(`Tú número de la suerte es el ` + (dig1+dig2+dig3+dig4))



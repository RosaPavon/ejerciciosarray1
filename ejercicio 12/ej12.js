
let num1= parseInt(window.prompt("Escribe un número de 3 dígitos"))
let dig1= parseInt((num1%1000/100))
let dig2= parseInt((num1%100/10))
let dig3= parseInt(num1%10)

document.write(dig1+dig2+dig3)




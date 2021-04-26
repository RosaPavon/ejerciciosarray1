
var numero =[];
var suma =0;
for (var i = 0; i < 10; i++){
   numero[i]=Number(prompt("Ingrese un número"));
   suma = suma + numero[i];
}

document.write( 'La media es ' + suma/10)
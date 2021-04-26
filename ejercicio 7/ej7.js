
var num
do{
   var dato=[parseInt(window.prompt("Escribe un número"))]
   if(dato<0){
      window.alert("No podemos trabajar con valores en negativo")}
   
}
while(dato!=0){

     var total = 0;
     for (let i = 1; i < dato.lenght ; i++){
        total+= dato[i];
     }
     
     document.write( 'la suma es ' + (total))
}





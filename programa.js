function nota(){
 let x= parseInt(document.getElementById("x").value);
 let y= parseInt(document.getElementById("y").value);
 let z= parseInt(document.getElementById("z").value);
 let e= parseInt(document.getElementById("examen_f").value);
 let n= parseInt(document.getElementById("trabajo_f").value);
 let ef= (e*0.3);
 let nf= (n*0.15);
 let promedio= (((x+y+z)/3)*0.55);
 let final= ef+nf+promedio;
 document.writeln("La Nota Final es: " + final );


 

}
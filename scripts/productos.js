function cargarDatos(){
    var titulo;
    var texto;
  
    for (i=1;i<=Registros;i++)
    {
     titulo="Titulo"+i;
     texto="Texto"+i;
     document.getElementById(titulo).innerText=eval(titulo);
     document.getElementById(texto).innerText=eval(texto);
    }
   }

function escribirDatos(){
   document.write("<table>");
   for (i=1;i<=Registros;i++)
   { 
    document.write("<tr>");
    document.write("<td id='Titulo"+i+"'></td>");
    document.write("</tr>");
  
    document.write("<tr>");
    document.write("<td id='Texto"+i+"'></td>");
    document.write("</tr>");

    document.write("<tr>");
    document.write("<td><img src='./imagenes/articulo"+i+".jpg' alt='Imagen del artículo"+i+"' width='250px''></td>");
    document.write("</tr>");

    document.write("<tr><td>&nbsp;</td></tr>");
   }
   document.write("</table>");
   }

   function anio(){
      let anioActual = new Date().getFullYear();
      return anioActual;
   }
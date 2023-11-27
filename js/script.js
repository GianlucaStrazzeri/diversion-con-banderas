const countriesList= document.getElementById("countries-list");




countriesList.innerHTML= "Aquí  debajo irá el listado de banderas";


//solución gpt
 // Realiza una solicitud Fetch para obtener datos
 fetch('https://restcountries.com/v3/all')
 .then(response => response.json())
 .then(data => {
     // Obtén la referencia al elemento de la lista en HTML
     var zonaApariciónBanderas = document.getElementById('countries-list');

     // Recorre el array de objetos y crea elementos de lista
     data.forEach(function(objeto) {
         // Crea un elemento de lista
         var li = document.createElement('li');
         
         // Asigna el texto del objeto a la lista (asumo que hay una propiedad 'nombre' en el objeto)
         li.textContent = `Nombre: ${objeto.name.common} Bandera: ${objeto.flags}` , 

         // Agrega el elemento de lista al elemento de la lista en HTML
         zonaApariciónBanderas.appendChild(li);
     });
 })
 .catch(error => console.error('Error al obtener datos:', error));


//Sirve para ver la estructura del array de objetos en la consola
 fetch ("https://restcountries.com/v3/all")
.then((response)=>{
    return response.json()
    .then((data)=>{
        console.log(data) 
    })
});
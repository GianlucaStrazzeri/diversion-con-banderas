var zonaApariciónBanderas = document.getElementById('countries-list');


//solución gpt
 // Realiza una solicitud Fetch para obtener datos
 fetch('https://restcountries.com/v3/all')
 .then(response => response.json())
 .then(data => {
//ver la estructura del array de objetos en la consola
    console.log(data) 
     // Obtén la referencia al elemento de la lista en HTML
     var zonaApariciónBanderas = document.getElementById('countries-list');

     // Recorre el array de objetos y crea elementos de lista
     data.forEach(function(objeto) {
         // Crea un elemento de lista
         var li = document.createElement('li');

         // Crea un contenedor para elementos adicionales que deben aparecer y desaparecer al pasar el ratón encima de los elementos
         var contenedorAdicional = document.createElement('div');
         contenedorAdicional.classList.add('elementos-adicionales');

         
         li.innerHTML = `
                        <img src="${objeto.flags[0]}" alt="Bandera de ${objeto.name.common}" heigth="350" width="350">
                        <p>Nombre: ${objeto.name.common}</p>
                    `;

          // Agrega elementos adicionales al contenedor
          contenedorAdicional.innerHTML = `
          <p> Continente: ${objeto.continents}</p>
          <p>Capital: ${objeto.capital}</p>
      `;

      // Agrega el contenedor de elementos adicionales al elemento de lista
      li.appendChild(contenedorAdicional);

      // Agrega el evento al pasar el ratón sobre el elemento
      li.addEventListener('mouseover', function() {
        // Muestra el contenedor de elementos adicionales
        contenedorAdicional.style.display = 'block';
    });

    // Agrega el evento al salir del ratón del elemento
    li.addEventListener('mouseout', function() {
        // Oculta el contenedor de elementos adicionales
        contenedorAdicional.style.display = 'none';
    });

         // Agrega el elemento de lista al elemento de la lista en HTML
         zonaApariciónBanderas.appendChild(li);
        // li.addEventListener("click",)
     });
 })
 .catch(error => console.error('Error al obtener datos:', error));




fetch ("https://restcountries.com/v3/all")
.then((response)=>{
    return response.json()
    .then((data)=>{
        data.forEach((data)=>console.log(data)) 
    })
});
//                                          Opciones de cambio linea 5                                       //
//console.log(data) // imprime un array de objetos
//console.log(data.length) //devuelve 250
// data.forEach((data)=>console.log(data))  Imprime cada objeto en la consola
//data.name Imprime cada nombre en la consola
//data.name.common  ->Imprime el nombre común del país de la bandera en la consola
//data.forEach((data)=> zonaApariciónBanderas.innerHTML=data[3] // devuelve undefined
//data.forEach((data)=> zonaApariciónBanderas.innerHTML(data)) // Devuelve Uncaught (in promise) TypeError: zonaApariciónBanderas.innerHTML is not a function
//forEach((data)=>zonaApariciónBanderas= document.createElement("li"));
//data.forEach((data)=> zonaApariciónBanderas.innerHTML="bandera1" ) //Imprime bandera 1 (1 vez) No itera por cada objeto
//.then(zonaApariciónBanderas.innerHTML= response.json() ); //devuelve en la pantalla [object Promise]


//Copio estrucutura de setTimeout()para darle un tiempo en responder
let numeroAleatorio1;
const promesa1 = new Promise((resolve) => {
    setTimeout(() => {
      numeroAleatorio1 = Math.floor(Math.random() * 10);
      resolve(numeroAleatorio1);
    }, 1000);
  });

  promesa1.then((numeroAleatorio1) => {
    console.log(`El primer numero aleatorio es ${numeroAleatorio1}`);
    return promesa2;
  });

  
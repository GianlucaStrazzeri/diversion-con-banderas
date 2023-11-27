const countriesList= document.getElementById("countries-list");
const zonaApariciónBanderas=document.getElementById("zona-aparición-banderas");


countriesList.innerHTML= "Aquí  debajo irá el listado de banderas";





//Voy a intentar imprimir aglo del fetch en la consola
fetch ("https://restcountries.com/v3/all")
.then((response)=>{
    return response.json()
    .then((data)=>{
        data.forEach((data)=> zonaApariciónBanderas.innerHTML=data.name) 
    })
});//Imprime cada nombre en la consola
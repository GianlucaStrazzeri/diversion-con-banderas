//Intento de bucle forEach para imprimir todo el contendo del array de objetos como texto

fetch ("https://restcountries.com/v3/all")
.then((response)=>{
    return response.json()
    .then((data)=>{
        data.forEach((data)=> zonaApariciónBanderas.innerHTML(data))
    })
}); 
//Devuelve Uncaught (in promise) TypeError: zonaApariciónBanderas.innerHTML is not a function
//at script.js:13:54
//at Array.forEach (<anonymous>)
//at script.js:13:14

//Puede que sea porque tengo que crear asincronía si no, no puede cargarme toda la pagína entera?


//Voy a intentar imprimir solo el nombre en la consola
fetch ("https://restcountries.com/v3/all")
.then((response)=>{
    return response.json()
    .then((data)=>{
        data.forEach((data)=>console.log(data.name)) 
    })
});//Imprime cada nombre en la consola


fetch ("https://restcountries.com/v3/all")
.then((response)=>{
    return response.json()
    .then((data)=>{
        data.forEach((data)=>console.log(data)) 
    })
});//Imprime cada objeto en la consola
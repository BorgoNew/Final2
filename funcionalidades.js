let autos = require("./autos")
//module.exports = autos;

const concesionaria = {
   autos: autos, buscarAuto(autos,patente){
       /*for (let patente of autos){
           if (this.patente = patente){
               return this
           }
           else{
               return null
           }
       }*/
       this.array.forEach(element => {
        if (this.patente = element){
            return this;
        }
        else{
            return null;
        }
           
       });
   }};
   
   

   /*function buscarAuto(autos){
    autos.forEach(function(elemento){
       // if (autos.patente == patente){
         //   console.log(elemento);    
        //}

        console.log(elemento);
    });*/

  

for (let value of autos) {
    value += 1;
    console.log(value);
  }



//buscarAuto(autos,"APL123'");
buscarAuto(autos);


// **Pari e Dispari**
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.



const userChoice = prompt("pari o dispari ?")

const userNumber = parseInt(prompt("dimi un numero da 1 a 5"))

const finalNumber = userNumber + randomNumber()

const result = oddOrEven()
 
let win = ""
if (userChoice === result)
{
    win = "hai vinto"
}
else
{
    win = "ha vinto il pc"
}

console.log(win)




 function randomNumber() {


   const pcNumber = Math.floor((Math.random() * 5) +1)

   return pcNumber
    
    
    
 }
 

 function oddOrEven() {

    let result = ""
    if (finalNumber % 2 === 0)
    {
         result = "pari"
        
    }
    else 
    {
        result = "dispari"
     
    } 
    
    return result
 }



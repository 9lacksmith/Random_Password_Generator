
const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let pwd_El_1 = document.querySelector(".gen_pwd1")
let pwd_El_2 = document.querySelector(".gen_pwd2")




function gen_rand_symbols(){
    pwd_El_1.textContent =""
    pwd_El_2.textContent =""
    for (let i = 0; i < 15; i++){
        gen_index()
        pwd_El_1.textContent += characters[gen_index()]
    }
    for (let i = 0; i < 15; i++){
        gen_index()
        pwd_El_2.textContent += characters[gen_index()]
    }

}

function gen_index(){
    let random = Math.floor(Math.random() * characters.length)
    return random
}
const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];


// let password = " "

// function generatePassword() { 
    
//         for (let i = 0; 1 < 16; i++) {
//             let randomCharacter = Math.floor ((Math.random() * characters.length));
//             let passwordCharacter = characters[randomCharacter];
//             password += passwordCharacter
//         }
// }

// generatePassword()

// let password = " "

// for (let i = 0; i < 16; i++) {
//     let randomCharacter = Math.floor ((Math.random() * characters.length))
//     let passwordCharacter = characters[randomCharacter]
//     password += passwordCharacter
// }


function generatePassword() {
        let passwordOne = " "
        let passwordTwo = " "
        
        for (let i = 0; i < 16; i++) {
        passwordOne += characters[Math.floor ((Math.random() * characters.length))]
        passwordTwo += characters[Math.floor ((Math.random() * characters.length))]
        }
    
        document.querySelector(".password-one").textContent = passwordOne;
        document.querySelector(".password-two").textContent = passwordTwo;   
}


let genPassword = document.querySelector(".generate-password")

genPassword.addEventListener("click", generatePassword)





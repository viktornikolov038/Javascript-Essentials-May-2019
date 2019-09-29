function solve() {
    const inputField = document.querySelector("input");
    const addButton = document.querySelector("button");
    const names = Array.from(document.querySelector("ol").children);

    var alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

    addButton.addEventListener("click", function(){
        const rawUsername = inputField.value;
        const formatedUsername = rawUsername[0].toUpperCase() + rawUsername.slice(1).toLowerCase();
        const usernameFirstLetter = formatedUsername[0].toLowerCase();

        const letterPosition = alphabet.indexOf(usernameFirstLetter);

        if (names[letterPosition].innerHTML !== "") {
            names[letterPosition].innerHTML += `, ${formatedUsername}`;
        } else{
            names[letterPosition].innerHTML += formatedUsername;
        }

        inputField.value = "";
    });
}
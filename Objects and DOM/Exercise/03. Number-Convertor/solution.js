function solve() {

    let selectToMenu = document.getElementById("selectMenuTo");

    let selectMenuToBinaryOption = selectToMenu.children[0];
    selectMenuToBinaryOption.value = "binary";
    selectMenuToBinaryOption.textContent = "Binary";

    let selectMenuToHexadecimal = document.createElement("option");
    selectMenuToHexadecimal.value = "hexadecimal";
    selectMenuToHexadecimal.textContent = "Hexadecimal";

    selectToMenu.appendChild(selectMenuToHexadecimal);

    let convertButton = document.getElementsByTagName("BUTTON")[0];

    convertButton.addEventListener("click", function(){
        let inputNumberField = document.getElementById("input");
        let numberToConvert = Number(inputNumberField.value);
        
        let convertTo = selectToMenu.options[selectToMenu.selectedIndex].textContent;

        let convertedNumber;

        if (convertTo === "Binary") {
            convertedNumber = numberToConvert.toString(2);
        } else if(convertTo === "Hexadecimal") {
            convertedNumber = numberToConvert.toString(16);
        }

        let resultField = document.getElementById("result");
        resultField.value = convertedNumber.toUpperCase();
    });
}
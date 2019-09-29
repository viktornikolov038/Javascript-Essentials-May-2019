function solve() {
    const keys = Array.from(document.getElementsByClassName("keys")[0].children);
    const expressionField = document.getElementById("expressionOutput");
    const resultField = document.getElementById("resultOutput");
    
    const clearButton = document.querySelector("button.clear");
    clearButton.addEventListener("click", function(){
        expressionField.textContent = "";
        resultField.textContent = "";
    });


    const operators = ["+", "-", "*", "/"];
    keys.forEach(button => {
        if (button.value !== '=') {
            button.addEventListener("click", function(){
                if (operators.includes(button.value)) {
                    expressionField.textContent += " " + button.value + " ";
                } else {
                    expressionField.textContent += button.value;
                }
            });
        } else if(button.value === '='){
            button.addEventListener("click", function(){
                try {
                    //NEVER USE EVAL!!
                    const result = eval(expressionField.textContent);
                    resultField.textContent = result;
                } catch (error) {
                    resultField.textContent = NaN;
                }
            });
        }
    });
}
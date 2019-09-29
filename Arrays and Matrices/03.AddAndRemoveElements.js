function addRemoveElements(array){
    let number = 1;
    let numbersArray = [];

    for (let command of array) {
        
        switch (command) {
            case "add":
                numbersArray.push(number);
                break;
        
            case "remove":
                numbersArray.pop();
                break;
        }

        number++;
    }

    if (numbersArray.length !== 0) {
        console.log(numbersArray.join("\n"));
    } else{
        console.log("Empty");
    }
}
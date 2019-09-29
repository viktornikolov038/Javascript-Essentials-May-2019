function name(userCommands) {
    let number = Number(userCommands[0]);

    for (let index = 1; index < userCommands.length; index++) {
        const command = userCommands[index];
        
        switch (command) {
            case "chop":
                number /= 2;
                console.log(number);
                break;
            
            case "dice":
                number = Math.sqrt(number);
                console.log(number);
                break;

            case"spice":
                number += 1;
                console.log(number);
                break;

            case"bake":
                number *= 3;
                console.log(number);
                break;

            case"fillet":
                number -= number * 0.2;
                console.log(number);
                break;
        }
    }
}
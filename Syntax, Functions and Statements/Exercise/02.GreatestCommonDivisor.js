function greatestCommonDivisor(firstNumber, secondNumber) {
    let smallerNumber = Math.min(firstNumber, secondNumber);
    let currentDivisor = 0;

    for (let i = 1; i <= smallerNumber; i++) {
        if (firstNumber % i === 0 && secondNumber % i === 0){
            currentDivisor = i;
        }
    }

    console.log(currentDivisor);
}
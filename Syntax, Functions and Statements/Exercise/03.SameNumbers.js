function sameNumbers(number) {
    let arrayOfNumber = number.toString();

    let areNumbersSame = true;
    let firstDigit = Number(arrayOfNumber[0]);
    let digitsSum = firstDigit;

    for (let i = 1; i < arrayOfNumber.length; i++) {
        let currentNumber = Number(arrayOfNumber[i]);

        if (firstDigit !== currentNumber){
            areNumbersSame = false;
        }

        digitsSum += currentNumber;
    }

    console.log(areNumbersSame);
    console.log(digitsSum);
}
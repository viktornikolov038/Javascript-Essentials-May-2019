function increasingSubsequence(numbersArray){

    let biggestNumber = numbersArray[0];
    numbersArray.shift();
    
    let subsequence = [biggestNumber];

    for (let number of numbersArray) {
        if (number >= biggestNumber) {
            biggestNumber = number;
            subsequence.push(number);
        }
    }

    console.log(subsequence.join("\n"));
}

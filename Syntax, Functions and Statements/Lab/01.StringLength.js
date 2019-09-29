function calculateStringLenght(firstString, secondString, thirdString) {
    let totalLenghtSum = firstString.length + secondString.length + thirdString.length;
    let averageLenght = totalLenghtSum / 3;

    console.log(Math.floor(totalLenghtSum));
    console.log(Math.floor(averageLenght));
}
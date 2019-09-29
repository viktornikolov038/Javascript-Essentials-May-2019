function aggregateElements(array) {
    let sum = array.reduce((a, b) => a + b, 0);

    let invertedSum = 0;
    for (let number of array) {
        invertedSum += 1 / number;
    }

    console.log(sum);
    console.log(invertedSum);
    console.log(array.join(''));
}

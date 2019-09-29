function squareOfStars(squareSize) {
    if (squareSize === undefined){
        squareSize = 5;
    }

    for (let i = 1; i <= squareSize; i++) {
        console.log('* '.repeat(squareSize))
    }
}
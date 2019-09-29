function magicMatrix(matrix){

    function matrixIsNotMagical(isMagical){
        isMagical = false;
        console.log(isMagical);
    }

    let isMagical = true;
    const rowSum = matrix[0].reduce((a, b) => a + b, 0);
    
    let currentRowSum = 0;
    for (let row = 0; row < matrix.length; row++) {

        for (let col = 0; col < matrix[row].length; col++) {

            const currentCellValue = Number(matrix[row][col]);
            currentRowSum += currentCellValue;
        }

        if (currentRowSum !== rowSum) {
            matrixIsNotMagical(isMagical);
            return;
        }

        currentRowSum = 0;
    }

    let currentColSum = 0;
    for (let col = 0; col < matrix.length; col++) {

        for (let row = 0; row < matrix.length; row++) {
            
            const currentValue = Number(matrix[col][row]);
            currentColSum += currentValue;
        }

        if (currentColSum !== rowSum) {
            matrixIsNotMagical(isMagical);
            return;
        }

        currentColSum = 0;
    }

    if (isMagical) {
        console.log(isMagical);
    }
}



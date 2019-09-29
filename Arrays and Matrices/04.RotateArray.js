function rotateArray(array){
    let timesToRotate = Number(array.pop());

    let arrayLenght = array.length;
    if (timesToRotate === arrayLenght) {
        console.log(array.join(" "));
        return;
    }

    for (let index = 0; index < timesToRotate % array.length; index++) {
        let lastElement = array.pop();

        array.unshift(lastElement);
    }

    console.log(array.join(" ")); 
}
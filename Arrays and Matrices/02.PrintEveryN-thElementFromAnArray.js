function printElement(array){
    let step = Number(array.pop());

    for (let index = 0; index < array.length; index += step) {
        let element = array[index];
        
        console.log(element);
    }
}
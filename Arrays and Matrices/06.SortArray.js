function sortArray(array){
    let arrayToSort = Array.from(array);

    arrayToSort.sort(function(firstItem, secondItem){
        if (firstItem.length > secondItem.length) return 1;
        if (firstItem.length < secondItem.length) return -1;

        if (firstItem.localeCompare(secondItem) > 0) return 1;
        if (firstItem.localeCompare(secondItem) < 0) return -1;
        
    });

    console.log(arrayToSort.join("\n"));
}
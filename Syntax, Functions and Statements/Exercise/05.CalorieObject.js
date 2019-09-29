function calorieObject(foodsInfo) {
    let foodsObject = {};
    for (let index = 0; index < foodsInfo.length; index+=2) {
        let foodName = foodsInfo[index];
        let calories = Number(foodsInfo[index + 1]);

        foodsObject[foodName] = calories;
    }

    console.log(foodsObject);
}
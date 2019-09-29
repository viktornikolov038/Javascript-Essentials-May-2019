function calculateFruitPrice(fruitType, weightInGrams, pricePerKilo) {
    let weightInKilos = weightInGrams / 1000;
    let totalMoneyNeeded = weightInKilos * pricePerKilo;

    console.log(`I need $${totalMoneyNeeded.toFixed(2)} to buy ${weightInKilos.toFixed(2)} kilograms ${fruitType}.`);
}
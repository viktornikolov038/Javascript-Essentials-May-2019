function caffeineStudy(days) {
    let totalCaffeine = 0;

    const dailyCoffeeCaffeine = 180;
    const dailyColaCaffeine = 40;
    const dailyTeaCaffeine = 210;

    const everyDayCaffeine = 180 + 40 + 210;
    totalCaffeine += everyDayCaffeine * days;

    const energyDrinksDays = Math.floor(days / 5);
    const energyDrinkCaffeine = 450;
    totalCaffeine += energyDrinkCaffeine * energyDrinksDays;

    const colaAndEnergyDays = Math.floor(days / 9);
    const colaDaysCaffeine = 380;
    totalCaffeine += colaDaysCaffeine * colaAndEnergyDays;

    console.log(`${totalCaffeine} milligrams of caffeine were consumed`);
}

caffeineStudy(8);
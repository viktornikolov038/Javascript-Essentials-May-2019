function trainStation(wagonCapacity, passengers) {
    let wagons = [];
    let wagonsCount = passengers.length - 1;

    let remainingPassengers = 0;

    for (let i = 0; i < passengers.length; i++) {

        if (passengers[i] > wagonCapacity) {
            wagons[i] = wagonCapacity;
            passengers[i] -= wagonCapacity;
            if (i + 1 > wagonsCount) {
                remainingPassengers = passengers[i];
                break;
            } else {
                passengers[i + 1] += passengers[i];
            }
        } else if(passengers[i] <= wagonCapacity){
           wagons[i] = passengers[i];
        }
    }

    console.log(`[ ${wagons.join(", ")} ]`);

    if (remainingPassengers > 0) {
        console.log(`Could not fit ${remainingPassengers} passengers`);
    } else {
        console.log("All passengers aboard");
    }
}

trainStation(6, [5,15,2]);
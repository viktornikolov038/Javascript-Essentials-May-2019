function spaceshipCrafting() {
	const titaniumCoreInput = Number(Math.round(document.getElementById("titaniumCoreFound").value));
	const aluminiumCoreInput = Number(Math.round(document.getElementById("aluminiumCoreFound").value));
	const magnesiumCoreInput = Number(Math.round(document.getElementById("magnesiumCoreFound").value));
	const carbonCoreInput = Number(Math.round(document.getElementById("carbonCoreFound").value));
	const lossesPercentInput = document.getElementById("lossesPercent");

	const lossesPercent = Number(lossesPercentInput.value);
	const eachCoreLossPercent = lossesPercent / 4;

	const titaniumCoreFound =
	Number(titaniumCoreInput - (titaniumCoreInput * eachCoreLossPercent / 100));
	const aluminiumCoreFound =
	aluminiumCoreInput - (aluminiumCoreInput * eachCoreLossPercent / 100);
	const magnesiumCoreFound =
	magnesiumCoreInput - (magnesiumCoreInput * eachCoreLossPercent / 100);
	const carbonCoreFound =
	carbonCoreInput - (carbonCoreInput * eachCoreLossPercent / 100);
	//ROUND HERE OR ON TOP?????<<?????

	let titaniumBars = Math.round(titaniumCoreFound / 25);
	let aluminiumBars = Math.round(aluminiumCoreFound / 50);
	let magnesiumBars = Math.round(magnesiumCoreFound / 75);
	let carbonBars = Math.round(carbonCoreFound / 100);

	let undefinedShipCount = 0;
	let nullMasterShipCount = 0;
	let jsonCrewShipCount = 0;
	let falseFleetCount = 0;

	let undefinedShipBuild = false;
	let nullMasterShipBuild = false;
	let jsonCrewShipBuild = false;
	let falseFleetShipBuild = false;

	while (true) {

		if (titaniumBars < 2 || aluminiumBars < 2 || magnesiumBars < 3 || carbonBars < 1) {
			break;
		}

		if (titaniumBars >= 7 && aluminiumBars >= 9 && magnesiumBars >= 7 && carbonBars >= 7 && undefinedShipBuild === false) {
			undefinedShipCount++;
			titaniumBars -= 7;
			aluminiumBars -= 9;
			magnesiumBars -= 7;
			carbonBars -= 7;

			undefinedShipBuild = true;

		} else if (titaniumBars >= 5 && aluminiumBars >= 7 && magnesiumBars >= 7 && carbonBars >= 5 && nullMasterShipBuild === false) {
			nullMasterShipCount++;
			titaniumBars -= 5;
			aluminiumBars -= 7;
			magnesiumBars -= 7;
			carbonBars -= 5;

			nullMasterShipBuild = true;

		} else if(titaniumBars >= 3 && aluminiumBars >= 5 && magnesiumBars >= 5 && carbonBars >= 2 && jsonCrewShipBuild === false){
			jsonCrewShipCount++;
			titaniumBars -= 3;
			aluminiumBars -= 5;
			magnesiumBars -= 5;
			carbonBars -= 2;

			jsonCrewShipBuild = true;

		} else if (titaniumBars >= 2 && aluminiumBars >= 2 && magnesiumBars >= 3 && carbonBars >= 1 && falseFleetShipBuild === false) {
			falseFleetCount++;
			titaniumBars -= 2;
			aluminiumBars -= 2;
			magnesiumBars -= 3;
			carbonBars -= 1;

			falseFleetShipBuild = true;
		}

		if (falseFleetShipBuild) {
			undefinedShipBuild = false;
			nullMasterShipBuild = false;
			jsonCrewShipBuild = false;
			falseFleetShipBuild = false;
		}
	}


	const availableBarsOutput = document.querySelector("div #availableBars p");
	const availableBarsOutputStr = `${titaniumBars} titanium bars, ${aluminiumBars} aluminum bars, ${magnesiumBars} magnesium bars, ${carbonBars} carbon bars`;
	availableBarsOutput.textContent = availableBarsOutputStr;

	const builtSpaceshipsOutput = document.querySelector("div #builtSpaceships p");
	let builtSpaceships = [];

	if (undefinedShipCount > 0) {
		builtSpaceships.push(`${undefinedShipCount} THE-UNDEFINED-SHIP`);
	} 

	if (nullMasterShipCount > 0) {
		builtSpaceships.push(`${nullMasterShipCount} NULL-MASTER`);
	}

	if (jsonCrewShipCount > 0) {
		builtSpaceships.push(`${jsonCrewShipCount} JSON-CREW`);
	}

	if (falseFleetCount > 0) {
		builtSpaceships.push(`${falseFleetCount} FALSE-FLEET`);
	}

	const builtSpaceshipsString = builtSpaceships.join(", ");
	builtSpaceshipsOutput.textContent = builtSpaceshipsString;
}
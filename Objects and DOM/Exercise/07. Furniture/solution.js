function solve() {
  let buttons = document.getElementsByTagName("button");
  let generateButtton = buttons[0];

  generateButtton.addEventListener("click", function(){
    let jsonTextArea = document.getElementsByTagName("textarea")[0];
    let furnitureList = JSON.parse(jsonTextArea.value);

    let table = document.getElementsByClassName("table")[0];

    for (let furniture of furnitureList) {
      let newRow = table.insertRow(-1);

      let imgCell = newRow.insertCell();
      let img = document.createElement("img");
      img.setAttribute("src", furniture["img"]);
      imgCell.appendChild(img);

      let nameCell = newRow.insertCell();
      let nameParagraph = document.createElement("p");
      nameParagraph.textContent = furniture["name"];
      nameCell.appendChild(nameParagraph);

      let priceCell = newRow.insertCell();
      let priceParagraph = document.createElement("p");
      priceParagraph.textContent = furniture["price"];
      priceCell.appendChild(priceParagraph);

      let decorFactorCell = newRow.insertCell();
      let decorFactorParagraph = document.createElement("p");
      decorFactorParagraph.textContent = furniture["decFactor"];
      decorFactorCell.appendChild(decorFactorParagraph);

      let checkBoxCell = newRow.insertCell();
      let checkBox = document.createElement("input");
      checkBox.type = "checkbox";
      checkBoxCell.appendChild(checkBox);
    }
  });

  let buyButton = buttons[1];

  buyButton.addEventListener("click", function(){
    let tableBody = document.getElementsByTagName("tbody")[0];

    let tableRows = tableBody.children;
    let rows = Array.from(tableRows);
    rows.shift();

    let furnitureBought = [];
    let totalCost = 0;
    let totalDecFactor = 0;
    let furnitureBoughtCount = 0;

    let textArea = document.getElementsByTagName("textarea")[1];

    for (let row of rows) {
      let rowCells = row.children;
      
      let nameCell = rowCells[1];
      let priceCell = rowCells[2].getElementsByTagName("p")[0];
      let decFactorCell = rowCells[3].getElementsByTagName("p")[0];
      let markCell = rowCells[4].getElementsByTagName("input")[0];

      if (markCell.checked == true) {
        furnitureBought.push(nameCell.textContent);

        let price = Number(priceCell.textContent);
        totalCost += price;

        furnitureBoughtCount++;
        let decorationFactor = Number(decFactorCell.textContent);
        totalDecFactor += decorationFactor;
      }
    }

    textArea.textContent += `Bought furniture: ${furnitureBought.join(", ")}\n`;
    textArea.textContent += `Total price: ${totalCost.toFixed(2)}\n`;

    let averageDecFactor = totalDecFactor / furnitureBoughtCount;
    textArea.textContent += `Average decoration factor: ${averageDecFactor}`;
  })
}
function solve() {
   let textArea = document.getElementsByTagName("textarea")[0];

   let addButtons = document.getElementsByClassName("add-product");
   let breadButton = addButtons[0];
   let milkButton = addButtons[1];
   let tomatoesButton = addButtons[2];

   let productsBought = new Set();
   let cartValue = 0;

   let checkoutButton = document.getElementsByClassName("checkout")[0];
   console.log(checkoutButton);

   breadButton.addEventListener("click", function(){
      textArea.textContent += `Added Bread for 0.80 to the cart.\n`;
      productsBought.add("Bread");
      cartValue += 0.80;
   });

   milkButton.addEventListener("click", function(){
      textArea.textContent += `Added Milk for 1.09 to the cart.\n`;
      productsBought.add("Milk");
      cartValue += 1.09;
   });

   tomatoesButton.addEventListener("click", function(){
      textArea.textContent += `Added Tomatoes for 0.99 to the cart.\n`;
      productsBought.add("Tomatoes");
      cartValue += 0.99;
   });

   checkoutButton.addEventListener("click", function(){
      let products = Array.from(productsBought);
      textArea.textContent += `You bought ${products.join(", ")} for ${cartValue.toFixed(2)}.`;

      breadButton.disabled = true;
      milkButton.disabled = true;
      tomatoesButton.disabled = true;
   });
}
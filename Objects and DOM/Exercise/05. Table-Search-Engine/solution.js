function solve() {
   let searchButton = document.getElementById("searchBtn");

   searchButton.addEventListener("click", function(){
      let searchTextField = document.getElementById("searchField");
      let searchedText = searchTextField.value;

      let table = document.getElementsByClassName("container")[0];
      let tableBody = table.getElementsByTagName("TBODY")[0];
      let rows = tableBody.getElementsByTagName("tr");

      for (let row of rows) {
         row.removeAttribute("class");
         if (row.textContent.includes(searchedText)) {
            row.className = "select";
         }
      }

      searchTextField.value = "";
   });
}
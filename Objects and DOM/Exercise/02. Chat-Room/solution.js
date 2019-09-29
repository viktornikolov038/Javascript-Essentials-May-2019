function solve() {
   let button = document.getElementById("send");

   button.addEventListener("click", function(){
      let textArea = document.getElementById("chat_input");
      let userMessage = textArea.value;

      if (userMessage === "") {
         return;
      }

      let newMessage = document.createElement("div");
      newMessage.textContent = userMessage;
      newMessage.setAttribute("class", "message my-message");

      let chat = document.getElementById("chat_messages");
      chat.appendChild(newMessage);

      textArea.value = "";
   })
}

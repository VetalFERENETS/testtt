const chatMessages = document.querySelector(".chat-messages");
const inputField = document.querySelector(".chat-input input");
const submitButton = document.querySelector(".chat-input button");

submitButton.addEventListener("click", () => {
    // Create a new message element
    const newMessage = document.createElement("div");
    newMessage.classList.add("message");
    newMessage.textContent = inputField.value;

    // Append the new message to the chat history
    chatMessages.appendChild(newMessage);

    // Clear the input field
    inputField.value = "";

    // Scroll to the bottom of the chat window
    chatMessages.scrollTop = chatMessages.scrollHeight;
});
commentsBlock.firstChild
namesBlock.firstChild
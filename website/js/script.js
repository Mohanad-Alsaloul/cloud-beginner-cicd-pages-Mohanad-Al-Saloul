document.getElementById("btn").addEventListener("click", () => {
    const msgElement = document.getElementById("msg");
    msgElement.innerText = "Hello Welcome! OK";
    
    msgElement.className = "success-msg";
});
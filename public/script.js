
const chatInput = document.querySelector(".chat-input textarea");
const sendChatbtn = document.querySelector(".chat-input span");
const chatbox = document.querySelector(".chatbox");

let userMessage;
const API_KEY = "";

const createChatLi = (message, className) => {
    //Cria um elemento chat<li> com a mensagem digitada e o className 
    const chatLi = document.createElement("li");
    chatLi.classList.add("chat", className);
    let chatContent = className === "outgoing" ? `<p>${message}</p>` : `<span class="material-symbols-outlined">smart_toy</span><p>${message}</p>`
    chatLi.innerHTML = chatContent;
    return chatLi;
}

const generateResponse = () => {
    const API_URL = "https://api.openai.com/v1/chat/completions";
    const requestOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${API_KEY}`
        },
        body: JSON.stringify({
            model: "gpt-3.5-turbo-1106",
            messages: [{role: "user",content: userMessage}]
        })
    }
    // Manda a requisiçao post para a API, recebe response
    fetch(API_URL, requestOptions).then(res => res.json()).then(data => {
        console.log(data);
    }).catch((error) => {
        console.log(error);
    })
}

const handleChat = () => {
    userMessage = chatInput.value.trim();
    if(!userMessage) return;
    console.log(`${API_KEY}`);
    // Acrescenta a mensagem do usuário ao chatbox
    chatbox.appendChild(createChatLi(userMessage, "outgoing"));

    setTimeout(() => {
        chatbox.appendChild(createChatLi("É verdade", "incoming"));
        generateResponse();
    }, 600) 
}

sendChatbtn.addEventListener("click", handleChat);
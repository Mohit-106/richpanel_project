var coll = document.getElementsByClassName("collapsible");

for (let i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function () {
        this.classList.toggle("active");

        var content = this.nextElementSibling;

        if (content.style.maxHeight) {
            content.style.maxHeight = null;
        } else {
            content.style.maxHeight = content.scrollHeight + "px";
        }

    });
}

function getTime() {
    let today = new Date();
    hours = today.getHours();
    minutes = today.getMinutes();

    if (hours < 10) {
        hours = "0" + hours;
    }

    if (minutes < 10) {
        minutes = "0" + minutes;
    }

    let time = hours + ":" + minutes;
    return time;
}

function firstBotMessage() {
    let firstMessage = "How's it going?"
    document.getElementById("botStarterMessage").innerHTML = '<p class="botText"><span>' + firstMessage + '</span></p>';
    let time = getTime();
    $("#chat-timestamp").append(time);
    document.getElementById("userInput").scrollIntoView(false);
}

firstBotMessage();

function getHardResponse(userText) {
    let botResponse = getBotResponse(userText);
    let botHtml = '<p class="botText"><span>' + botResponse + '</span></p>';
    $("#chatbox").append(botHtml);

    document.getElementById("chat-bar-bottom").scrollIntoView(true);
}

let count=0;

function getResponse() {
    let userText = $("#textInput").val();
    if (userText == "" && count==0) {
        userText = "Where is my order?";
        count++
    }else if(userText == "" && count==1){
        userText = "How do I track my package?";
        count++
    }else if(userText == "" && count==2){
        userText = "Can I change my shipping address?";
        count++
    }else if(userText == "" && count==3){
        userText = "What are the shipping options and delivery times?";
        count++
    }else if(userText == "" && count==4){
        userText = "How can I cancel an order?";
        count++
    }else if(userText == "" && count==5){
        userText = "What is Amazon Prime and its benefits?";
        count++
    }
    else if(userText == "" && count==6){
        userText = "How do I return or exchange a product?";
        count++
    }
    else if(userText == "" && count==7){
        userText = "What is the status of my refund?";
        count++
    }
    else if(userText == "" && count==8){
        userText = "Goodbye";
        count++
    }
    else if(count>8){
        count=0;
    }

    let userHtml = '<p class="userText"><span>' + userText + '</span></p>';
    $("#textInput").val("");
    $("#chatbox").append(userHtml);
    document.getElementById("chat-bar-bottom").scrollIntoView(true);
    setTimeout(() => {
        getHardResponse(userText);
    }, 1000)

}

function buttonSendText(sampleText) {
    let userHtml = '<p class="userText"><span>' + sampleText + '</span></p>';
    $("#textInput").val("");
    $("#chatbox").append(userHtml);
    document.getElementById("chat-bar-bottom").scrollIntoView(true);
}

function sendButton() {
    getResponse();
}

function heartButton() {
    buttonSendText("Heart clicked!")
}

$("#textInput").keypress(function (e) {
    if (e.which == 13) {
        getResponse();
    }
});
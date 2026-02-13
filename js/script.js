welcomeMessage();

//Welcome Messsage Function
function welcomeMessage(){
    //Show Pop Up
    let name = prompt("Welcome to Dian Rahmat Yuneri Company! What is your name?");

    //Validation Input
    if (name===null || name.trim()==="") {
        //Jika user pencet cancel, maka jadi "Guest"
        name="Guest";
    }

    //Display Welcome Message
    document.getElementById('welcome-speech').innerHTML = `Hello, ${name}! Welcome to Dian Rahmat Yuneri Company!`;
}
function throwDice(){
    let randomNumber1 = Math.floor(Math.random() * 6) + 1;
    let randomNumber2 = Math.floor(Math.random() * 6) + 1;

    let newImage1 = "images/dice" + randomNumber1 + ".png";
    let newImage2 = "images/dice" + randomNumber2 + ".png";

    document.querySelectorAll("img")[0].setAttribute("src",newImage1);
    document.querySelectorAll("img")[1].setAttribute("src",newImage2);

    if(randomNumber1 > randomNumber2){
        document.querySelector("#winner").innerHTML = "Player1 Won!";
    }else if(randomNumber2 > randomNumber1){
        document.querySelector("#winner").innerHTML = "Player2 Won!";
    }else{
        document.querySelector("#winner").innerHTML = "Tie! Try Again";
    }
}
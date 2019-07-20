// function check() {
//     let name = document.querySelector("input").value;
//     if (name.length == 6) {
//         alert("You are smart")
//     } else if (name.length == 5) {
//         alert("You are super smart")
//     }
//     else {
//         alert("you are dumb")
//     }

// }
    /*let intelligence;
    if (name == false) {
        alert("Please enter name");
    } else {
        if (name.charAt(0).toLowerCase() == "a") {
            intelligence = intelligenceLevels[6];
            alert(intelligence);
        } else if (name.charAt(0).toLocaleLowerCase() == "b") {
            intelligence = intelligenceLevels[3];
            alert(intelligence);
        }

    }*/


function check() {
    let intelligenceLevels=["awesome", "amazing","dumb","fool","creative","genious","mastermind", "stupid","clever"]
    let name = document.querySelector("input").value;

    let randomIndex =  parseInt(Math.random()*intelligenceLevels.length)
alert(intelligenceLevels[randomIndex])
}

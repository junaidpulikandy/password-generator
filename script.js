//generate random password
function generate(){
   
    //set password length/complexity
    let complexity = document.getElementById("slider").value;

    //possible password values
    let values = "QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjklzxcvbnm1234567890";

    let password = "";

    //create for loop to choose password characters
    for(var i = 0; i <= complexity; i++){
        password = password + values.charAt(Math.floor(Math.random() * Math.floor(values.length - 1)));
    }

    //add password to textbox/display area
    document.getElementById("display").value = password;

    //add password to previously generated passwords section
    document.getElementById("lastNums").innerHTML += password + "<br />";

}

//set default length display of 25
document.getElementById("length").innerHTML = "Length: 25";

//function to set length based on slider position
document.getElementById("slider").oninput = function(){

    if(document.getElementById("slider").value > 0){
        document.getElementById("length").innerHTML = "Length: " + document.getElementById("slider").value;
    }
    else{
        document.getElementById("length").innerHTML = "Length: 1";
    }
}
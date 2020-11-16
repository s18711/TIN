function verify(){
    var value = document.getElementById("email").value; // or replace document.forms[0].item by document.getElementById('name')
    let regex = /\S+@\S+\.\S+/;
    if(!regex.test(value)){
        document.getElementById("email").style.color="red";
        const placeholder = document.getElementById("placeholder");
        const errorMassage = document.createTextNode("  this field must be in form of example@example.example");
        document.getElementById("placeholder").style.color = "red";
        placeholder.appendChild(errorMassage);
        return false;
    } else {
        return true;
    }

}
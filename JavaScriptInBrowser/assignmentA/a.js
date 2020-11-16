
function convertToFahrenheit(){
    const degreesCelsius = document.getElementById("celsius").value;
    const celsiusNumber = parseInt(degreesCelsius);
    if(typeof celsiusNumber === "number"){
        const f = (celsiusNumber * 9/5) + 32;
        document.getElementById("fahrenheit").value = f;
    }
    else{
        document.getElementById("fahrenheit").value = "wrong input";
    }
}


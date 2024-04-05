//Temperature Conversion

const textBox = document.getElementById("temp");
const toFahrenheit = document.getElementById("toFahrenheit");
const Celcisus = document.getElementById("Celcisus");
const result = document.getElementById("result");
let temp;

function convert(){
    if(toFahrenheit.checked){
        temp = Number(textBox.value);
        temp = temp * 9/5 + 32;
        result.textContent = temp.toFixed(1) + " °F";
    }
    else if(Celcisus.checked){
        temp = Number(textBox.value);
        temp = (temp - 32) * (5/9);
        result.textContent = temp.toFixed(1) + " °C";
    }
    else{
        result.textContent = "Select a unit";
    }
}
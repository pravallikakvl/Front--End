//function updateDisplay(){//
    //document.getElementById('display').textContent=1;//
   // document.getElementById('display').textContent=2;//
//
//function clearDisplay(){//
   // document.getElementById('display').textContent=0;//
//

let current = "";

function press(value) {
    if (document.getElementById('display').textContent === "0") {
        current = value;
    } else {
      current += value;
   }
    document.getElementById('display').textContent = current;
}
function calculate() {
    try {
        current = eval(current); // basic eval for learning only
        document.getElementById('display').textContent = current;
    } catch {
        document.getElementById('display').textContent = "Error";
    }
}
function clearDisplay(){
    document.getElementById('display').textContent=0;
}
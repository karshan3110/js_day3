// // myObj = { "name":"Jane", "age":18, "city":"Chicago" };
// function fn(){
// hi=document.getElementById("x").ariaValueMax;
// myJSON = JSON.stringify(hi);                 // storing data
// localStorage.setItem("testJSON", myJSON);   
// text = localStorage.getItem("testJSON");        // retrieving data 
// obj = JSON.parse(text);
// document.write(obj);

// };

function getInputValue() {
    // Access the input element using its id
    var inputValue = document.getElementById("myInput").value;
    
myJSON = JSON.stringify(inputValue);                 // storing data
localStorage.setItem("testJSO", myJSON);   
text = localStorage.getItem("testJSO");        // retrieving data 


    // Display the value inside the <p> element with id="output"
    document.getElementById("output").textContent = "You entered: " + text;
}

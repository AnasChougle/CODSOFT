var btns = document.querySelectorAll("button");
var inpt = document.getElementById("inp");


btns.forEach(function(button){
    button.addEventListener("click", function(){
        inpt.focus();
        if(button.value == "del"){
            inpt.value = inpt.value.slice(0,-1);
        }
        else if(button.value == "ac"){
            inpt.value = "";
        }
        else if(button.value == "="){
            result = eval(inpt.value);        
            inpt.value = result;
        }
        else{
        inpt.value += button.value; 
        }
    })

});
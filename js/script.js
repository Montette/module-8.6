var button = document.getElementById("button");

button.addEventListener("click", function(){
    var a = document.getElementById("aValue").value;
    var b = document.getElementById("bValue").value;
    var result = (a * a) - (2 * a * b) - (b * b);
    
    document.getElementById("result").innerHTML = result;
    
   if (result > 0) {
        var resultType = "The result is positive"
    } else if (result < 0) {
        resultType = "The result is negative"
    } else { resultType = "The result is 0"}    
    
    document.getElementById("resultType").innerHTML = resultType;
    
})
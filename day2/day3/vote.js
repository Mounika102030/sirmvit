function vote(){
   var name=document.getElementById("name").value;
    var age=document.getElementById("age").value;
    var par=document.getElementById("par");
    if(age>18){
        // alert("Eligible to vote");
        par.innerHTML="Eligible to vote"
    }else{
        // alert("You are a child");
        par.innerHTML="you are a child😂😁"
    }
}
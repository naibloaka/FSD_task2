var extra_checkbox = document.getElementById("extra-check");
var checkbox_list = document.getElementById("extra-checkbox-list");

extra_checkbox.onclick = function(){
    if(checkbox_list.style.display == "none"){
        checkbox_list.style.display = "block";
    }else{
        checkbox_list.style.display = "none";
    }
    
}
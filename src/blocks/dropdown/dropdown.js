var dropdawn_field = document.getElementById("dropdawn__guests-calc"); //label dropdawn field 
var dropdawn_list = document.getElementById("dropdawn__buttons"); //invisible list
var dropdawn_block = document.getElementById("border_style");

dropdawn_field.onclick = function(){
    if(dropdawn_list.style.display == "none")
    {
        dropdawn_list.style.display = "block";
        dropdawn_block.style.borderRadius="5px 5px 0 0";  //разобраться 
    }
    else{
        dropdawn_list.style.display = "none";
        dropdawn_block.style.borderRadius="5px";
    }
}



//for adults
var plus_adult = document.getElementById("plus-adult");
var minus_adult = document.getElementById("minus-adult");
var num_adult = document.getElementById("number-adult");

plus_adult.onclick = function(){
    var count = num_adult.innerHTML;
    minus_adult.style.color = "#8F90A0";
    minus_adult.style.border = "1px solid #8F90A0";
    count++;
    num_adult.innerHTML = count;
}
minus_adult.onclick = function(){
    if(num_adult.innerHTML == 1)
    {
        minus_adult.style.color = "#C7C7C";
        minus_adult.style.border = "1px solid #C7C7CF";
    }
    if(num_adult.innerHTML > 0){
        var count = num_adult.innerHTML;
        count--;
        num.innerHTML = count;
    }
}

//for childrents
var plus_child = document.getElementById("plus-child");
var minus_child = document.getElementById("minus-child");
var num_child = document.getElementById("number-child");

plus_child.onclick = function(){
    var count = num_child.innerHTML;
    minus_child.style.color = "#8F90A0";
    minus_child.style.border = "1px solid #8F90A0";
    count++;
    num_child.innerHTML = count;
}
minus_child.onclick = function(){
    if(num_child.innerHTML == 1)
    {
        minus_child.style.color = "#C7C7C";
        minus_child.style.border = "1px solid #C7C7CF";
    }
    if(num_child.innerHTML > 0){
        var count = num_child.innerHTML;
        count--;
        num_child.innerHTML = count;
    }
}


//for baby
var plus_baby = document.getElementById("plus-baby");
var minus_baby = document.getElementById("minus-baby");
var num_baby = document.getElementById("number-baby");

plus_baby.onclick = function(){
    var count = num_baby.innerHTML;
    minus_baby.style.color = "#8F90A0";
    minus_baby.style.border = "1px solid #8F90A0";
    count++;
    num_baby.innerHTML = count;
}
minus_baby.onclick = function(){
    if(num_baby.innerHTML == 1)
    {
        minus_baby.style.color = "#C7C7C";
        minus_baby.style.border = "1px solid #C7C7CF";
    }
    if(num_baby.innerHTML > 0){
        var count = num_baby.innerHTML;
        count--;
        num_baby.innerHTML = count;
    }
}


//clear ana apply buttons
var ok_btn = document.getElementById("ok-but");

ok_btn.onclick = function(){
    document.getElementById("drop_val").value = 
    Number(num_baby.innerHTML) + 
    Number(num_child.innerHTML) + 
    Number(num_adult.innerHTML);

    dropdawn_list.style.display = "none";
    dropdawn_block.style.borderRadius="5px";
}

var clear_btn = document.getElementById("clear-but");

clear_btn.onclick = function(){
    document.getElementById("drop_val").value = null;
    num_adult.innerHTML = 0;
    num_child.innerHTML = 0;
    num_baby.innerHTML = 0;
    dropdawn_list.style.display = "none";
    dropdawn_block.style.borderRadius="5px";
}
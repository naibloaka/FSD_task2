let pagination_list = document.getElementsByClassName('paggination__list-item');    //all numbers
let pagination_arrows = document.getElementsByClassName('paggination__arrow');      // arrows
let pagination_dots = document.getElementsByClassName('paggination__list-dots');        //dots

pagination_arrows[0].style.display ="none";
pagination_dots[0].style.display = "none";
for(var i=4; i<=13; i++)
{
    pagination_list[i].style.display="none"
}


let selected =pagination_list[0];
selected.classList.add('pagination-selected');      //styles for first

/*pagination_list[1].onclick = function(){
    selected.classList.remove('pagination-selected');
    selected = pagination_list[1];
    selected.classList.add('pagination-selected'); 
}*/   




const pagination = document.querySelector('.paggination__list');

pagination.addEventListener('click', pagginatorHandle);

function pagginatorHandle(event) {

  const target = event.target;
  const parentPaggination = target.closest('.paggination');
    
  const itemsArr = parentPaggination.querySelectorAll('.paggination__list-item');

  [...itemsArr].forEach((element) => {
    element.classList.remove('pagination-selected');
  })

  target.closest('.paggination__list-item').classList.add('pagination-selected');
  console.log(target);
  
  
  let count = Number(target.innerHTML)  //counter page number
  

  if(count >=4 && count <= 13){
    for(var i = count-1; i<=count+1; i++){
        pagination_list[i].style.display="block";
    }
  }
}

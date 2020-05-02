function changeStar(star){
    const parent = star.parentNode
    parent.querySelectorAll('.star').forEach(el => {
      el.classList.contains('star_active') && el.classList.remove('star_active')
    })
    star.classList.add('star_active')
  }
  document.addEventListener('DOMContentLoaded', function() {
   const rating = document.querySelectorAll('.star') 
   rating.forEach(star => {
     star.onclick = () => changeStar(star)
   }) 
  })
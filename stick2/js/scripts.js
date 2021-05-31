let nots = document.getElementsByClassName("not-sticky")[0]
let sticky = document.getElementsByClassName("sticky")[0]

window.onload = function () {
   
    window.addEventListener('scroll', function(event){
       let scrollPos = window.scrollY;
       let top = nots.offsetTop + nots.offsetHeight 
       let mid = sticky.offsetHeight / 2 
       let total = sticky.offsetHeight

       if ( scrollPos > top && scrollPos < top + mid ) {
        document.getElementsByClassName("sticky")[0].innerHTML = "one"
        } else if (scrollPos > top + mid && top + total ) {
            document.getElementsByClassName("sticky")[0].innerHTML = "two"
        }
    
    
    
});}
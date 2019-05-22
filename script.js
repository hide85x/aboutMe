
$(document).ready(function(){


    $('.items').click(function (){
        $(this).addClass('active').siblings().removeClass('active') 
     
    })

    
 })

 function scrol(cardId) {
    const elem= document.getElementById(cardId)
        elem.scrollIntoView()

}  

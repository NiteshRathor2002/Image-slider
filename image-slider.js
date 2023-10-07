const hell = document.querySelectorAll('.hell');
const prev=document.querySelector('.previous');
const next=document.querySelector('.next');
var count=0;
//console.log(hell)
hell.forEach(
    (hell, index)=>{
        hell.style.left=`${index*100}%`

    }
)
prev.onclick=()=>{
    count--
    hell[count].style.animation="slide2 1.3s ease ";
   
slideimage()
}
next.onclick=()=>{

    count++
    
    if (count>=hell.length){
        count=0;
    } 
    hell[count].style.animation="slide 1.3s ease ";

    
slideimage()

}

const slideimage=()=>{
    hell.forEach(
        (hell)=>{
            hell.style.transform=`translateX(-${count*100}%)`
                }
                
    )
}




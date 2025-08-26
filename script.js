


let text = "Searching for a place to get away?";
let speed = 120;
let i = 0;

function type(){

    if(i<text.length){
    document.querySelector('#par').textContent += text.charAt(i);
    i++;
    setTimeout(type, speed);
   
}
}

type();


gsap.to('#click', {
    opacity: 1,
    duration: 2,
    delay: 3.9
})

gsap.to('.center', {
    opacity: 1,
    duration: 0.5
    
})







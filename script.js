
const buttons = document.querySelectorAll(".buttons")
const body = document.querySelector('body')


buttons.forEach((button)=>{
    button.addEventListener('click',function(event){
        console.log(event.target);
        body.style.backgroundColor = event.target.id
    })
})








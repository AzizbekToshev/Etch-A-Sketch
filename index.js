let black = document.querySelectorAll(".area > div");

function dark() {
    black.forEach(item => {
        item.addEventListener('mouseover', ()=> {
        item.style.cssText = "background-color: black;"     
        });
    });

}
function rainbow() {
    black.forEach(item => {
        item.addEventListener('mouseover', ()=> {
        item.style.cssText = `background-color: rgb(${Math.floor(Math.random()*255)}, ${Math.floor(Math.random()*255)},${Math.floor(Math.random()*255)})`     
        });
    });

}


function white() {
    black.forEach(item  => {
        item.style.cssText = "background-color: white"
    })
}

let blackButton = document.querySelector('.black')
blackButton.addEventListener('click', dark) 

let rainbowButton = document.querySelector('.rainbow') 
rainbowButton.addEventListener('click', rainbow)

let resetButton = document.querySelector('.reset')
resetButton.addEventListener('click', white)

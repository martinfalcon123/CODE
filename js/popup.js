var btn = document.querySelector('.btn');

var videoContainer = document.querySelector('.video-container');


var close = document.querySelector('.close');




btn.addEventListener('click',()=>{
	videoContainer.classList.add('.show');
})
close.addEventListener('click',()=>{
	videoContainer.classList.remove('.show');
})


console.log("hola");
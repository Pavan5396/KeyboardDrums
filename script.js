

window.addEventListener('keydown',function(event){
   
const audio= document.querySelector(`audio[class="${event.code}"]`);
audio.currentTime=0;
audio.play()
   


});
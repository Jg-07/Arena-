const humb1 = document.querySelector('.HmBurger');
const boxer1 =  document.querySelector('.box-container');
const cbox = document.querySelector('.CrossBurger');
const imageTitle = document.querySelector('.title');
const img = document.querySelector('.Display');
humb1.addEventListener("click",function() {
   boxer1.classList.remove('hidden');
   humb1.classList.add('hidden');
   cbox.classList.remove('hidden');
});
cbox.addEventListener('click',function(){
   boxer1.classList.add('hidden');
   humb1.classList.remove('hidden');
   cbox.classList.add('hidden');
});
img.addEventListener('mouseenter',function(){
   img.classList.remove('opac2');
   img.classList.add('opac1');
   imageTitle.classList.remove('hidden');
})
img.addEventListener('mouseout',function(){
   imageTitle.classList.add('hidden');
   img.classList.remove('opac1');
   img.classList.add('opac2');
})
imageTitle.addEventListener('mouseenter',function(){
   img.classList.remove('opac2');
   img.classList.add('opac1');
   imageTitle.classList.remove('hidden');
})
imageTitle.addEventListener('mouseout',function(){
   imageTitle.classList.add('hidden');
   img.classList.remove('opac1');
   img.classList.add('opac2');
})

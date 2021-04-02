const humb1 = document.querySelector('.HmBurger');
const boxer1 =  document.querySelector('.box-container');
const cbox = document.querySelector('.CrossBurger');
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
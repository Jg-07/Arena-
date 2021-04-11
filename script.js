const humb1 = document.querySelector('.HmBurger');
const boxer1 =  document.querySelector('.box-container');
const cbox = document.querySelector('.CrossBurger');
const imageTitle = document.querySelector('.title');
const img = document.querySelector('.Display');
const basicBooms = document.querySelector('#BB');
const basicAgg = document.querySelector('#BA');
const mainbody =document.querySelector('.bodyBlock1');
const home = document.querySelector('#home');
const bboombody = document.querySelector('.bodyBlock2');
const baggbody =document.querySelector('.bodyBlock3');
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
basicBooms.addEventListener("click", function(){
  mainbody.classList.add('hidden');
  baggbody.classList.add('hidden');
  bboombody.classList.remove('hidden');
})
home.addEventListener('click',function(){
   bboombody.classList.add('hidden');
   baggbody.classList.add('hidden');
   mainbody.classList.remove('hidden');
})
basicAgg.addEventListener('click',function(){
   mainbody.classList.add('hidden');
   bboombody.classList.add('hidden');
   baggbody.classList.remove('hidden');
})

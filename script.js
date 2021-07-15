const humb1 = document.querySelector('.HmBurger');
const boxer1 =  document.querySelector('.box-container');
const cbox = document.querySelector('.CrossBurger');
const imageTitle = document.querySelector('.title');
const img = document.querySelector('.Display');
const basicBooms = document.querySelector('#BB');
const basicAgg = document.querySelector('#BA');
const advBooms =document.querySelector('#AB');
const advAgg = document.querySelector('#AA');
const civSpecific = document.querySelector('#CS');
const mainbody =document.querySelector('.bodyBlock1');
const home = document.querySelector('#home');
const bboombody = document.querySelector('.bodyBlock2');
const baggbody =document.querySelector('.bodyBlock3');
const aboombody = document.querySelector('.bodyBlock4');
const aaggbody = document.querySelector('.bodyBlock5');
const civsbody = document.querySelector('.bodyBlock6');
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
// img.addEventListener('mouseenter',function(){
//    img.classList.remove('opac2');
//    img.classList.add('opac1');
//    imageTitle.classList.remove('hidden');
// })
// img.addEventListener('mouseout',function(){
//    imageTitle.classList.add('hidden');
//    img.classList.remove('opac1');
//    img.classList.add('opac2');
// })
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
  aboombody.classList.add('hidden');
  aaggbody.classList.add('hidden');
  civsbody.classList.add('hidden');
  bboombody.classList.remove('hidden');
})
basicAgg.addEventListener('click',function(){
   mainbody.classList.add('hidden');
   bboombody.classList.add('hidden');
   aboombody.classList.add('hidden');
   aaggbody.classList.add('hidden');
   civsbody.classList.add('hidden');
   baggbody.classList.remove('hidden');
})
advBooms.addEventListener("click", function(){
   mainbody.classList.add('hidden');
   baggbody.classList.add('hidden');
   bboombody.classList.add('hidden');
   aaggbody.classList.add('hidden');
   civsbody.classList.add('hidden');
   aboombody.classList.remove('hidden');
 })
advAgg.addEventListener("click", function(){
   mainbody.classList.add('hidden');
   baggbody.classList.add('hidden');
   bboombody.classList.add('hidden');
   aboombody.classList.add('hidden');
   civsbody.classList.add('hidden');
   aaggbody.classList.remove('hidden');
 })
civSpecific.addEventListener("click", function(){
   mainbody.classList.add('hidden');
   baggbody.classList.add('hidden');
   bboombody.classList.add('hidden');
   aaggbody.classList.add('hidden');
   aboombody.classList.add('hidden');
   civsbody.classList.remove('hidden');
 })
home.addEventListener('click',function(){
   bboombody.classList.add('hidden');
   baggbody.classList.add('hidden');
   aaggbody.classList.add('hidden');
   aboombody.classList.add('hidden');
   civsbody.classList.add('hidden');
   mainbody.classList.remove('hidden');
})
console.log('Loaded!');

// change the text of main div
 var element =document.getElementById('main'
     );
 element.innerHTML=  'new value';
 
  // move the image
  var img=document.getElementById('img');
  var marginLeft = 0;
fuction moveRight (){
     marginLeft = marginLeft + 1;
       img.style.marginLeft = marginLeft + 'px' ;
}
img.onclick = function(){
       var interval= setInterval(moveRight,50);
   };
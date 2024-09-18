var id;
 var i=0;


 function changeimg(){
     id=setTimeout(changeimg,2000);
     i++;
     if (i==4) i=1;
     document.images[3].src="./img/img"+i+".png";
 }
 function reset(){
  clearTimeout(id);
 document.images[3].src="./img/img"+i+".png";
 }


 function changeimg2(){
    id=setTimeout(changeimg2,2000);
    i++;
    if (i==4) i=1;
    document.images[2].src="./img/im"+i+".png";
}
function reset2(){
 clearTimeout(id);
document.images[2].src="./img/im"+i+".png";
}


function changeimg3(){
    id=setTimeout(changeimg3,2000);
    i++;
    if (i==4) i=1;
    document.images[1].src="./img/in"+i+".png";
}
function reset3(){
 clearTimeout(id);
document.images[1].src="./img/in"+i+".png";
}


function changeimg4(){
    id=setTimeout(changeimg4,2000);
    i++;
    if (i==4) i=1;
    document.images[0].src="./img/ip"+i+".png";
}
function reset4(){
 clearTimeout(id);
document.images[0].src="./img/ip"+i+".png";
}
// get array of imgs and btns
var sliderImg = Array.from(document.querySelectorAll(".carousel-item"));
var sliderNum = Array.from(document.querySelectorAll(".img-num"));

// get img count
imgCount = sliderImg.length;

//set first img
var currentImg = 1;


//set the btns snd assign it's functions
nextButton = document.getElementById('next');
prevButton = document.getElementById('previous');

nextButton.onclick = nextImg;
prevButton.onclick = prevImg;

sliderNum[0].onclick = function(){
    currentImg = 1 ;
    check();
}
sliderNum[1].onclick = function(){
    currentImg = 2 ;
    check();
}
sliderNum[2].onclick = function(){
    currentImg = 3 ;
    check();
}
sliderNum[3].onclick = function(){
    currentImg = 4 ;
    check();
}


//start check function
check();


//functions

// next and previous img
function nextImg(){
    if (nextButton.classList.contains("disabled")) {
        return false;
    } else {
        currentImg ++;
        check();
    }
}
function prevImg(){
    if (prevButton.classList.contains("disabled")) {
        return false;
    } else {
        currentImg --;
        check();
    }
}

//function to check the current img
function check(){
    remove();

    sliderImg[currentImg - 1].classList.add("active");
    sliderNum[currentImg - 1].classList.add("active");

    if (currentImg ==1) {
        prevButton.classList.add("disabled");
    } else {
        prevButton.classList.remove("disabled");
    }

    if (currentImg == imgCount) {
        nextButton.classList.add("disabled");
    } else {
        nextButton.classList.remove("disabled");
    }
}


//function to remove active from imgs and btns
function remove(){
    for (var x = 0; x < imgCount; x++) {
        sliderImg[x].classList.remove("active");
        sliderNum[x].classList.remove("active");
    }
}

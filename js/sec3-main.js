
    function dark(){
        let darkmode=document.body;
        darkmode.classList.toggle("darkMode");
    }

    var images = document.querySelectorAll('.l-container img');
    for (let i = 0; i < images.length; i++) {
        images[i].onmouseover = function() {
        images[i].style.transform = 'scale(1.1)';
        images[i].style.transition = 'transform 0.3s ease';
    };
    images[i].onmouseout = function() {
        images[i].style.transform = 'scale(1)';
    };
}

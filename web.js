var id;
var i = 0;
function changeimg() {
    id = setTimeout(changeimg, 1000);
    i++;
    if (i == 6) i = 1;
    document.images[12].src = "Image/imge" + i + ".png";
}
function reset() {
    clearTimeout(id);
    document.images[12].src = "Image/imge" + i + ".png";
}

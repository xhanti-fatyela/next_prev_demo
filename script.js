let image = new Array (
    "https://upload.wikimedia.org/wikipedia/commons/1/14/Travis_Scott_-_Openair_Frauenfeld_2019_08.jpg",
    "https://www.pinkvilla.com/imageresize/travis_scott_1.jpg?width=752&format=webp&t=pvorg",
    "https://specials-images.forbesimg.com/imageserve/5fc532e331a523c0728e70aa/Travis-Scott/0x0.gif?fit=scale",
     "https://dazedimg-dazedgroup.netdna-ssl.com/1015/azure/dazed-prod/1310/4/1314854.jpg"
)


let i = 0;
let takeImg = document.getElementById("image")

function next() {
    i++;
   
    if (i >= image.length) {
        i = 0;

    }
    takeImg.src = image[i];
}



function prev(){
    i--;
   
    if (i < 0) {
        i = image.length - 1

    }
    takeImg.src = image[i];


}





















// img_array= new Array(   "https://www.pinkvilla.com/imageresize/travis_scott_1.jpg?width=752&format=webp&t=pvorg",
// "https://specials-images.forbesimg.com/imageserve/5fc532e331a523c0728e70aa/Travis-Scott/0x0.gif?fit=scale",
//  "https://dazedimg-dazedgroup.netdna-ssl.com/1015/azure/dazed-prod/1310/4/1314854.jpg");
// i=0;
// function myFunction()
// {
//      i++;
//     document.getElementById("myImg").src=img_array[i];
//     if(i==img_array.length-1) {
//    i=-1;

//     }
    
// }
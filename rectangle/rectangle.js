var rectangle=document.querySelector("div");

function minimize() {
    var computedStyle= window.getComputedStyle(rectangle);
    current=computedStyle.height;
     var n = current.substring(0, current.lengh-2);
     n=Math.round(n);
     console.log(n);
     var newer =--n +"px";
    rectangle.style.height=newer;
    if(n>0) {
        setTimeout(minimize,30);
    }
}

minimize();
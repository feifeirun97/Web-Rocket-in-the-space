let num =40;
function rand(m,n) {
    return Math.ceil(Math.random() * (n-m+1) + m-1);
}



for(let i =0;i<num; i++){
    const i = document.createElement('i');
    i.style.height = rand(30,100)+'px';
    i.style.left = rand(1,99)+'vw';
    i.style.animationDuration = rand(5,30) / 10 +'s';
    document.querySelector('.container').appendChild(i);
}
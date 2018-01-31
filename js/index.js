/*
* @Author: Administrator
* @Date:   2018-01-28 20:01:01
* @Last Modified by:   Administrator
* @Last Modified time: 2018-02-01 01:11:03
*/
window.onload=function () {
    let div=document.querySelector('.banner_pic');
    let banner=document.querySelectorAll('.banner_pic1 li');
    let dian=document.querySelectorAll('.lunbodian ul li')
    let n=0;
    function move() {
        if(n==banner.length){
            n=0;
        }
        banner.forEach(function (value,index) {
            value.classList.remove('active');
            dian[index].classList.remove('active')
        })
        banner[n].className='active';
        dian[n].classList.add('active');
        n++;
    }
    let time=setInterval(move,2000);
    div.onmouseover=function () {
        clearInterval(time);
    }
    div.onmouseout=function () {
        time=setInterval(move,2000);
    }







}
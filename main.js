const boxs=document.querySelectorAll('.box');
const image=document.querySelector('.image');
boxs.forEach(item =>
{
    item.addEventListener('dragover',function(e){
        e.preventDefault();
        item.classList.add('hug');
    })
     item.addEventListener('dragleave',function(e){
        item.classList.remove('hug');
    })
    item.addEventListener('drop',function(e){
        item.appendChild(image);
        item.classList.remove('hug');
    })
})
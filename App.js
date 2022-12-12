const inputone = document.getElementById('num1');
const inputtwo = document.getElementById('num2');
const btn = document.querySelector('button');
const res = document.querySelector('p');
btn.addEventListener('click',()=>{
    res.innerHTML = `kire boro toh onek holi akhono jog korte sikhli nah! lojja laga dorkar.<br/>jai hok jogfol = ${+(inputone.value) + +(inputtwo.value)}`;    
})
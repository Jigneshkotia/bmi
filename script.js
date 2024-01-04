const form = document.querySelector('form');

form.addEventListener('submit',(e)=>{
    e.preventDefault();
    const h = parseInt(document.querySelector('#height').value);
    const w = parseInt(document.querySelector('#weight').value);
    const r = document.getElementById('results');
    
    if(h === ''|| h<=0 || isNaN(h)){
        r.innerHTML="Please Enter Valid Values";
    }else if(w === ''|| w<=0 || isNaN(w)){
        r.innerHTML="Please Enter Valid Values";
    }else{
        bmi = (w/((h*h)/10000)).toFixed(2)
        if(bmi<18.6|| bmi > 24.9){
            r.style.color = "#ff3333"
            r.innerHTML=`BMI = ${bmi}`
        }else{
            r.style.color = "#99ff99"
            r.innerHTML=`BMI = ${bmi}`
        }
        // r.innerHTML=`BMI = ${bmi}`
    }
})
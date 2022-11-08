const btn1 = document.getElementById('btn');
const btn2 = document.querySelector('.click');
const input1 = document.getElementById('text');
const input2 = document.getElementById('text1');
const emailRegex =/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

// first button
btn1.addEventListener('click',()=>{ 
    const email1 = input1.value.trim();    
    
    if (!email1 === "" ||emailvalid1(email1)){
        success()
    }else{
      error()   
    }
})      


const emailvalid1 = (input1)=>{
   return emailRegex.test(input1);
}
const error = ()=>{
    const errorOne = document.querySelector('.error_one');
    input1.className = 'red_border';
    errorOne.textContent = 'Please check your email';
}
const success = ()=>{
    const errorOne = document.querySelector('.error_one');
    input1.className = 'default_border';
    errorOne.textContent = '';
}

// second button
btn2.addEventListener('click',()=>{ 
    const email2 = input2.value.trim();      
    if (!email2==="" || emailvalid2(email2)){
        success2()
    }else{
      error2()   
    }
})      


const emailvalid2 = (input2)=>{
   return emailRegex.test(input2);
}
const error2 = ()=>{
    const errortwo = document.querySelector('.error_two');
    input2.className = 'red_border';
    errortwo.textContent = 'Please check your email';
}
const success2 = ()=>{
    const errortwo = document.querySelector('.error_two');
    input2.className = '';
    errortwo.textContent = '';
}



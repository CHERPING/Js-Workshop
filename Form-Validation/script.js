const form=document.getElementById('form');
const username=document.getElementById('username');
const email=document.getElementById('email');
const password=document.getElementById('password');
const rePassword=document.getElementById('re-password');

form.addEventListener('submit',(e)=>{
    e.preventDefault();
    checkinput([username,email,password,rePassword]);

    if(!validateEmail(email.value.trim())){
        showerror(email,'Please Enter Email ');
    }else{
        showsuccess(email);
    }
    checkpassword(password,rePassword);
    checkInputLength(username,5,10);
    checkInputLength(password,5,12);
});

function showerror(input,message){
    const formControl=input.parentElement;
    formControl.className='form-control error';
    const small=formControl.querySelector('small');
    small.innerText=message;
}


function showsuccess(input){
    const formControl=input.parentElement;
    formControl.className='form-control success'
    
}

function validateEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

function checkinput(inputArray){
    inputArray.forEach((input)=>{ // ใช้ function เพื่อดึง input มาทีละตัวที่ส่งว่ามีค่าว่างหรือไม่
        if(input.value.trim() === ''){
            showerror(input,`Please Enter ${getInputCase(input)}`);
        }else{
            showsuccess(input);
        }
    });
}

function getInputCase(input){
    return input.id.charAt(0).toUpperCase()+input.id.slice(1); //ทำให้ตัวแรกเป็นตัวพิมพ์ใหญ่ใน id
}

function checkpassword(password,rePassword){ //เช็ค password เพื่อนำมายืนยันกับ re-password
    if(password.value !== rePassword.value){
        showerror(rePassword,"Password Wrong");
    }
}

function checkInputLength(input,min,max){
    if(input.value.length<=min){
        showerror(input,` ${getInputCase(input)} More ${min} characters`);
    }else if(input.value.length>max){
        showerror(input,` ${getInputCase(input)} Less ${max} characters`);
    }else{
        showsuccess(input);
    }

}
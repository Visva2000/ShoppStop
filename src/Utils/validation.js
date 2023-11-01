export const formValidation = (data)=>{

    let errors={};
    const {username ,password} =data
    let isValidated = true;

    if(username!==undefined){
        if(username===''){
            isValidated = false;
            errors= {...errors,usernameError:'Please enter username'}
        }
    }
    if(password!==undefined){
        if(password===''){
            isValidated = false;
            errors= {...errors,passwordError:'Please enter password'}
        }
    }
    return{
        isValidated,
        errors:errors,
    }
}


export const signupFormValidation = (data)=>{

    let errors={};
    const {username, password,Confirmpassword,email,firstName,lastName,phone} =data
    let isValidated = true;


    if(username!==undefined){
        if(username===''){
            isValidated = false;
            errors= {...errors,usernameError:'Please enter username'}
        }
    }
    if(password!==undefined){
        if(password===''){
            isValidated = false;
            errors= {...errors,passwordError:'Please enter password'}
        }
    }
   
    if(Confirmpassword!==undefined){
        if(Confirmpassword===''){
            isValidated = false;
            errors= {...errors,confirmPasswordErrorr:'Please enter password'}
        }
    }
    if(email!==undefined){
        if(email===''){
            isValidated = false;
            errors= {...errors,emailError:'Please enter email'}
        }
    }
    if(phone!==undefined){
        if(phone===''){
            isValidated = false;
            errors= {...errors,phoneError:'Please enter phone number'}
        }
    }
    if(firstName!==undefined){
        if(firstName===''){
            isValidated = false;
            errors= {...errors,firstNameError:'Please enter firstName'}
        }
    }
    if(lastName!==undefined){
        if(lastName===''){
            isValidated = false;
            errors= {...errors,lastNameError:'Please enter lastName'}
        }
    }
    return{
        isValidated,
        errors:errors,
    }
}
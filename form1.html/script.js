function validatefullname(){
        if(fullname.value.trim()===""){
            fullnameError.textContent = "Full name is required";
        return false;
        }
        fullnameError.textContent="";
        fullname.classList.add("valid");
        fullname.classList.remove("invalid");
        return true;
    }
    
        function validatepassword(){
if(password.value.trim()===""){
    passwordError.textContent = "Password is required";
    return false;
}
password.textContent="";
password.classList.add("valid");
password.classList.remove("invalid");
return true;
        }

        function validateemail(){
            if(email.value.trim()===""){
                emailerror.textContent="Email is required";
                return false;
            }
            emailerror.textContent ="";
            email.classList.add("valid");
            email.classList.remove("invalid");
            return true;
        }

        function validatephnno(){
            if(phone.value.trim()===""){
                phnnoError.textContent="password is required";
                return false;
            }
            phnno.textContent="";
            phnno.classList.add("valid");
            phnno.classList.remove("invalid");
        return true;
        }
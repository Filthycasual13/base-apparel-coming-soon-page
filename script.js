let btn = document.querySelector(".btn-submit");


function validateEmail() {
    let email = document.querySelector(".textbox").value;

    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    result = re.test(String(email).toLowerCase());
    
    if(result === false) {
        document.querySelector(".textbox").classList.add('error');
        document.querySelector(".error-text").style.visibility ="visible";
        document.querySelector(".error-icon").style.visibility ="visible";
    } else if(result === true) {
        document.querySelector(".textbox").classList.remove('error');
        document.querySelector(".textbox").classList.add('success');
        document.querySelector(".error-text").style.visibility ="hidden";
        document.querySelector(".error-icon").style.visibility ="hidden";
    }
}


btn.addEventListener("click", validateEmail);



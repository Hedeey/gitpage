id = document.getElementById('id');
pwd = document.getElementById('pwd');

relID = 1;
relPWD = 1;

function loginPage(){
    if(id.value == relID && pwd.value == relPWD){
        location.href = 'main.html';
    }
};


function error() {
    if(id.value != "" && pwd.value != ""){
        if(id.value != relID || pwd.value != relPWD){
            document.getElementById('id').style.borderColor = "red"
            document.getElementById('pwd').style.borderColor = "red"
            document.getElementById('pwd').value = null;
            document.getElementById('id').value = null;
            document.getElementById('pwd').value = null;
            document.getElementById('id').value = null;
            document.getElementById('pwd').placeholder = "wrong Password";
            document.getElementById('id').placeholder = "wrong ID";
            let x = document.getElementById('wrong_id-pw');
            x.innerText="You entered the wrong ID or password";

            setTimeout(function()
            {
                document.getElementById('id').style.borderColor = "#D99E91"
                document.getElementById('pwd').style.borderColor = "#D99E91"
                x.innerText="";
            }, 2000);
        }
    }else if(id.value == "" && pwd.value == ""){
        document.getElementById('id').style.borderColor = "red"
        document.getElementById('pwd').style.borderColor = "red"
        document.getElementById('pwd').placeholder = "Please enter a Password";
        document.getElementById('id').placeholder = "Please enter your User ID";

        setTimeout(function()
        {
            document.getElementById('id').style.borderColor = "#D99E91"
            document.getElementById('pwd').style.borderColor = "#D99E91"
        }, 2000);
    }else if(id.value == "" && pwd.value != ""){
        document.getElementById('id').style.borderColor = "red"
        document.getElementById('id').placeholder = "Please enter your User ID";

        setTimeout(function()
        {
            document.getElementById('id').style.borderColor = "#D99E91"
        }, 2000);
    }else if(id.value != "" && pwd.value == ""){
        document.getElementById('pwd').style.borderColor = "red"
        document.getElementById('pwd').placeholder = "Please enter a Password";

        setTimeout(function()
        {
            document.getElementById('pwd').style.borderColor = "#D99E91"
        }, 2000);
    }
};

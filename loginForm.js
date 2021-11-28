let id = document.getElementById("id");
let pwd = document.getElementById("pwd");
function validate(){
    let id1 = 'admin';
    let pwd1 = '12345';
        if(id.value.match(id1) && pwd.value.match(pwd1)){
            return true;
        }
        else{
            alert("Please enter correct id or password");
            return false;
            
        }
}
let student=document.getElementsByClassName("student-login")[0];
function validator(){
    let inputs=student.getElementsByTagName('input');
    if(inputs.item(0).value!="0000"){return false}
    if(inputs.item(1).value!="pass"){return false}
    return true;
}
let button=document.getElementById('student-button');
button.addEventListener('click',()=>{
    if(validator())window.location="../src/STUDENT.html";
    else{
        let response=document.getElementsByClassName('response')[0];
        response.style.padding='1em';
        response.innerText="Please check your ID/password";
    }
})
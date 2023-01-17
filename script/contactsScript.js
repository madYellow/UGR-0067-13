let form=document.getElementsByClassName("user-info")[0];
let inputs=form.getElementsByTagName("input");
function validator(){
    for(let input of inputs){
        if(input.value==""){
            return false;
        }
        return true;
    }
}
let button=document.getElementById('submit');
button.addEventListener('click',()=>{
    let response=form.getElementsByClassName('response').item(0);
    response.style.padding='1em';
    if(validator()){response.innerText='Form submitted successfully'}
    else{
        response.innerText='Please make sure to complete all the fields!';
    }
})
import {logout}from "../utils";
document.getElementById("sign-out").addEventListener('click',(e)=>{
    e.preventDefault();
    logout();
})

let mytxt=document.querySelector("#txt1");
let myspn=document.querySelector("#spn1");
mytxt.oninput=function (){


    myspn.innerHTML=100-mytxt.value.length;
    if (myspn.innerHTML==0 ){
        myspn.innerHTML="pxh"
        myspn.style.color="blue";
    }
    else
    {
        myspn.style.color="red";

    }

}
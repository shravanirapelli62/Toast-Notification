let div=document.createElement("div")


let click=document.getElementById("button");

click.addEventListener("click", ()=>{
    console.log("clicked");

    //div.style.border="1px solid black";//
    div.setAttribute('id',"div")
    //div.setAttribute('class',)//
    div.innerHTML=`<div id ="div11"><p id="para">Wellcome To Dreamy Scoops</p> 
    <button id="ok" onclick="Delete()" ><img width="30" height="30" src="https://img.icons8.com/fluency/40/checked.png" alt="checked"/></button>
    <div id='s'></div> </div>`

    document.body.appendChild(div);

    setTimeout(()=>{
        div.remove();
    },5000)
})


function Delete(){
    div.remove();
}


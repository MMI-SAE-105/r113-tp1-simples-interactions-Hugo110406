// TODO
aMettreEnRouge=document.querySelector("#a-mettre-en-rouge")
aMettreEnRouge.style.color="red"
EnRougeSuiteAClick=document.querySelector("#en-rouge-suite-a-click")
EnRougeSuiteAClick.addEventListener("click", (evt)=>{
    EnRougeSuiteAClick.style.color= "red"
});
collH2 = document.querySelectorAll("H2")
collH2.forEach((elm)=>{
    elm.addEventListener("click", (evt)=>{
        evt.target.style.color ="red";
    });
});
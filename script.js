document.addEventListener("DOMContentLoaded",()=>{
    const li = document.querySelectorAll("li")
    li.forEach(elem=>{
        elem.addEventListener("click",(e)=>{
            const info = elem.querySelector(".info")
            const icon = elem.querySelector(".buttonAdd")
            const subtitle = elem.querySelector(".subtitle")
            if(elem.classList.contains('open')){
                info.style.display="none"
                subtitle.style.color=""
                icon.style.transform="rotate(90deg)"
                elem.classList.toggle("open")
            }
            else{
                elem.classList.toggle("open")
                subtitle.style.color="#02818A"
                info.style.display="block"
                icon.style.transform="rotate(45deg)"
            }
        })
    })
})
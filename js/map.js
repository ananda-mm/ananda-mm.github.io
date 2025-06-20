
    let currentPlace = document.querySelector(".currentPlace");
    let allPath = document.querySelectorAll("path");
    let cubody = document.querySelector(".currentbody")

    allPath.forEach(currentPath=>{
        currentPath.addEventListener("mouseover",_=>{
            allPath.forEach(c=>c.classList.remove("active"));
            currentPath.classList.add("active");
            currentPlace.innerText = currentPath.getAttribute("name");
            cubody.innerText = currentPath.getAttribute("value");
            
        });
    })

    document.querySelector("[name='Yangon']").classList.add("active");
    
    document.querySelector("[value='No.114, Kabar Aye Pagoda Road,Bahan Township,Yangon']").classList.add("active");
    currentPlace.innerText = "Yangon";
    cubody.innerText="No.114, Kabar Aye Pagoda Road,Bahan Township,Yangon";

    document.querySelector("[name='Mandalay']").classList.add("active");

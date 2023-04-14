let stars=document.querySelectorAll(".fa-star");
let emojiStar=document.querySelector(".emoji-star");

let emojiFaceIcon=document.querySelector(".fa-regular");


const emojiFace=(id)=>{
    let classValue=emojiFaceIcon.classList[1];

    switch (id) {
        
        case 1:
            emojiFaceIcon.classList.replace(classValue,"fa-face-angry");
        break;
        case 2:
            emojiFaceIcon.classList.replace(classValue,"fa-face-sad-tear");
        break;
        case 3:
            emojiFaceIcon.classList.replace(classValue,"fa-face-meh");
        break;
        case 4:
            emojiFaceIcon.classList.replace(classValue,"fa-face-smile-beam");
        break;
        case 5:
            emojiFaceIcon.classList.replace(classValue,"fa-face-laugh-beam");
        break;

    }
}

const addStar=(id)=>{
        
    stars.forEach(function(star){
        
        if(star.dataset.id<=id){
            star.classList.add("star-color");
        }
        else{
            star.classList.remove("star-color");
        }
    })

    localStorage.setItem("starId",id);
}





emojiStar.addEventListener("click",(e)=>{
    let id=parseInt(e.target.dataset.id);
    emojiFace(id);
    addStar(id);
});




const savedEmoji=()=>{
    let id=localStorage.getItem("starId");
    emojiFace(id);
    addStar(id);
}

savedEmoji();
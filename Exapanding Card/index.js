const cards = document.querySelectorAll(".imageItem")

cards.forEach((item1)=>{
    item1.addEventListener("click", ()=>{
        removeActiveClasses()
        item1.classList.add('active')
    })
})

const removeActiveClasses = ()=>{
    cards.forEach(item2 =>{
        item2.classList.remove('active')
    })
}
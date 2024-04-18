var mobileMenu = document.querySelector(".mobileMenu");
var mobileMenuOpened = document.querySelector(".mobileMenuOpened");
var mobileMenuClose = document.querySelector(".mobileMenuClose");
  

mobileMenu.addEventListener("click", function () {
    var menu = document.createElement("div");
    menu.innerText = "text"
    mobileMenuOpened.append(menu);
    mobileMenuOpened.classList.contains("visible")
    mobileMenuOpened.classList.add("visible");
    mobileMenuOpened.classList.add("visible");
    document.body.classList.add("overflowHidden");
    
});

mobileMenuClose.addEventListener("click", function(){
    mobileMenuOpened.classList.remove("visible");
    document.body.classList.remove("overflowHidden");
})


var blockWrapper = document.querySelector(".blockWrapper")

var blockArr = [
    {
        img: 'assets/construction.svg',
        text: 'Construction'
    },
    {
        img: 'assets/ic-plan.svg',
        text: 'Project Development'
    },
    {
        img: 'assets/Vector.svg',
        text: 'Interior Design'
    },
    {
        img: 'assets/ic-painting.svg',
        text: 'Repairs'
    }
]

blockArr.forEach(function(item, idx){
    var block = document.createElement("div")
    var img = document.createElement("img")
    var text = document.createElement("p")
    

    if (idx == 2) {
        block.classList.add("block1");
    }else{block.classList.add("block");
    
        }
    img.setAttribute("src", item.img)
    text.textContent = item.text
    block.append(img)
    block.append(text)
   
       blockWrapper.append(block)
    
})



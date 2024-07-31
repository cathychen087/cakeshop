let barItems=document.getElementsByClassName("barItem")
function changeBar(index){
    for (const bar of barItems) {
        bar.classList.remove("barActive")
    }
    barItems[index].classList.add("barActive")
    changePage(index)
}
let love=document.getElementsByClassName("love")[0]
let a=1
let lis=document.getElementsByClassName("imgLi")
let height=document.getElementById("img3").offsetHeight
let width=document.getElementById("img3").offsetWidth
for (const li of lis) {
    li.style.height=height+"px"
    li.style.width=width+"px"
}
document.getElementsByClassName("imgUl")[0].style.height=lis[0].style.height
var imgs=document.getElementsByClassName("img");
var reimg=[imgs[0],imgs[1],imgs[2]];
setInterval(function(){
    reimg[0].style.left="48vw";
    reimg[0].style.scale="1";
    reimg[0].style.zIndex="1";
    
    reimg[1].style.left="24vw";
    reimg[1].style.scale="1.1";
    reimg[1].style.zIndex="2";
    
    reimg[2].style.left="0px";
    reimg[2].style.scale="1";
    reimg[2].style.zIndex="1";
    
    var rimg=reimg[0];
    reimg[0]=reimg[2];
    reimg[2]=reimg[1];
    reimg[1]=rimg;
},3000)
let pages=document.getElementsByClassName("page")
function changePage(index){
    for (const page of pages) {
        page.classList.remove("pageActive")
    }
    pages[index].classList.add("pageActive")
}
let cardData=[
    {
        name:"pic1.png",
        class:"cake",
        pirce:1.00
    },
    {
        name:"pic2.png",
        class:"cake",
        pirce:7.00
    },
    {
        name:"pic3.png",
        class:"cake",
        pirce:12.00
    },
    {
        name:"pic4.png",
        class:"cake",
        pirce:22.00
    },
    {
        name:"pic5.png",
        class:"cake",
        pirce:34.00
    },
    {
        name:"pic6.png",
        class:"cake",
        pirce:43.00
    },
    {
        name:"pic7.png",
        class:"cake",
        pirce:44.00
    },
    {
        name:"pic8.png",
        class:"cake",
        pirce:55.00
    },
    {
        name:"pic9.png",
        class:"cake",
        pirce:43.00
    },
    {
        name:"pic10.png",
        class:"cake",
        pirce:43.00
    },
    {
        name:"pic11.png",
        class:"cake",
        pirce:56.00
    },
    {
        name:"pic12.png",
        class:"cake",
        pirce:67.00
    },
    {
        name:"pic13.png",
        class:"cake",
        pirce:76.00
    },
    {
        name:"pic14.png",
        class:"cake",
        pirce:88.00
    },
    {
        name:"pic15.png",
        class:"cake",
        pirce:79.00
    },
    {
        name:"pic16.png",
        class:"cake",
        pirce:99.00
    },
]
let showList=JSON.parse(JSON.stringify(cardData))
let card=document.getElementsByClassName("card")[0]
let cardList=document.getElementsByClassName("cardList")[0]

let email=document.getElementById("email")
let phone=document.getElementById("phone")
let name=document.getElementById("name")
let showPhone=document.getElementById("showPhone")
let showEmail=document.getElementById("showEmail")
let showName=document.getElementById("showName")

function login(){
    phone.value?showPhone.innerText=phone.value:""
    email.value?showEmail.innerText=email.value:""
    name.value?showName.innerText=name.value:""
    phone.value||email.value||name.value?changeBar(0):""
    phone.value=""
    email.value=""
    name.value=""
    return false
}

document.getElementsByClassName("numAll")[0].innerText=cardData.length
let minInput=document.getElementsByClassName("minInput")[0]
let minValue=document.getElementsByClassName("minValue")[0]
let maxInput=document.getElementsByClassName("maxInput")[0]
let maxValue=document.getElementsByClassName("maxValue")[0]
function changeMin(){
    minValue.innerText="€"+minInput.value
}
function changeMax(){
    maxValue.innerText="€"+maxInput.value
}
changeList()
function changeList(){
    showList=cardData.filter((data)=>{
        return data.pirce>=minInput.value&&data.pirce<=maxInput.value
    })
    document.getElementsByClassName("numNow")[0].innerText=showList.length
    cardList.innerHTML=""
    for (const data of showList) {
        let newcard=card.cloneNode(true)
        newcard.getElementsByTagName("img")[0].src="./img/"+data.name
        let div=newcard.getElementsByTagName("div")[0]
        div.getElementsByTagName("span")[0].innerText=data.class
        div.getElementsByTagName("strong")[0].innerText="€"+data.pirce
        cardList.appendChild(newcard)
    }
}
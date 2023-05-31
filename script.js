let inputFood = document.getElementById('input-food')

let saveBtn = document.getElementById('save-btn')

let listContainer = document.getElementById('list-container')

let noListEl = document.getElementById('no-list')

let foodListCount = document.getElementById('food-list-count')

inputFood.focus();

document.addEventListener('DOMContentLoaded',()=>{
  let Fetchedfood = [...JSON.parse(localStorage.getItem("fooditems"))]

  Fetchedfood.forEach((item) =>{

    const li = document.createElement('li')

    let divname = document.createElement('div')
  
    let divremoveBtn = document.createElement('div')
  
    li.append(divname,divremoveBtn)
  
    divremoveBtn.parentElement.setAttribute("onclick","removeitem(event)")
  
    divremoveBtn.innerHTML='<i class="fa fa-xmark"></i>'
  
    // let textNode = document.createTextNode(inputFood.value.toUpperCase())
  
  divname.textContent = item.fooditem
  
    li.className = "food-item"
  
    // li.append(divname)
  
    listContainer.append(li)
    li.append(divname)
    li.append(divremoveBtn)  

    // console.log(item.fooditem);

  })

  refreshUi();

})

const handlefooditem =  () =>{

  // console.log(inputFood.value);
  // document.write(inputFood.value)

  const li = document.createElement('li')

  let divname = document.createElement('div')

  let divremoveBtn = document.createElement('div')

  li.append(divname,divremoveBtn)

  divremoveBtn.parentElement.setAttribute("onclick","removeitem(event)")

  divremoveBtn.innerHTML='<i class="fa fa-xmark"></i>'

  // let textNode = document.createTextNode(inputFood.value.toUpperCase())

divname.textContent = inputFood.value.toUpperCase()

  li.className = "food-item"

  // li.append(divname)

  listContainer.append(li)
  li.append(divname)
  li.append(divremoveBtn)
 
  localStorage.setItem("fooditems",JSON.stringify([...JSON.parse(localStorage.getItem("fooditems") || "[]"),{fooditem:inputFood.value}]))
  
  inputFood.value = ""

  refreshUi();
  
};

saveBtn.addEventListener('click',handlefooditem)

inputFood.addEventListener('keyup',(event)=>{

  if(event.key === 'Enter'){
    handlefooditem()
  }

  else if(event.key === 'keyz' && (event.key === 'ctrlKey' || event.key === 'metaKey')){
    inputFood.value=""
  }

})

function removeitem(event){

  let exit = event.target.parentNode.parentNode
// console.log(event.target.parentElement.parentElement);
  exit.remove()

  let Fetchedfood = [...JSON.parse(localStorage.getItem("fooditems"))]

  Fetchedfood.forEach((item)=>{
   if(item.fooditem === exit.innerText){
    Fetchedfood.splice(Fetchedfood.indexOf(item),1)
   }
  })
localStorage.setItem("fooditems",JSON.stringify(Fetchedfood))
  // console.log(event.target.parentNode.parentNode);
  refreshUi();
}

function refreshUi(){

  // foodListCount.innerText =`You Have ${listContainer.children.length} lists`

  if(listContainer.children.length > 0){
    noListEl.hidden = true

    foodListCount.innerText =`You Have ${listContainer.children.length} lists`

    foodListCount.hidden = false

  }
  else{
    noListEl.hidden = false

    foodListCount.hidden = true
  }

  // listContainer.children.length > 0 ? ((noListEl.hidden = true),(foodListCount.hidden = false)):
  // ((noListEl.hidden = false),(foodListCount.hidden = true))

}





/* <li class="food-item">
<div>curd</div> 
<div onclick="alert('you Have Been Clicked')">
    <i class="fa fa-xmark"></i>
</div>
</li> */







/* <div id="alert"><strong>👍Succed!</strong>Your Food Is Added</div> */


// function creatAleerViaDOM(){

//   let main = document.getElementById('main')

//   let div = document.createElement('div')

//   let textNode = document.createTextNode('Food is Added👍')

//   div.className = "alert"

//   div.append(textNode)

//   main.prepend(div)

// }


// creatAleerViaDOM()

// let listContainer = document.getElementById('list-container')

// let pp = document.querySelectorAll('li')


// console.log(pp);

// console.log(listContainer.firstElementChild);

// console.log(listContainer.childNodes.length);


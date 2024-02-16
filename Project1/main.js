let imageContainer=document.getElementById('image-container');

let options={
    method:"GET"
}

let createAndAppend=(data)=>{

    let imgContainer=document.createElement("div")
    imageContainer.appendChild(imgContainer)
    let imageHeading=document.createElement("h1")
    imageContainer.classList.add("edition-head")
    imageHeading.textContent=data.title
    let imgElement=document.createElement('img')
    imgElement.src=data.image 
    imgElement.classList.add("edition-image")
    imgContainer.appendChild(imageHeading)
    imgContainer.appendChild(imgElement)
   
}




const networkCall=async()=>{
    let response= await fetch("https://products-api-2ttf.onrender.com/api/products",options)
    let data= await response.json()
    console.log(data)

    for(let item of data){
        createAndAppend(item)
    }
   
}

networkCall()
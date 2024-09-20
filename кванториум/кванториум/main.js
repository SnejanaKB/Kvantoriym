const data = [
    {  
        "name": "Серега",
        "surname": "Смирнов",
      
    }
]

console.log(data)


const name = document.querySelector(".name_js")
const surname = document.querySelector(".surname_js")
name.innerText = data[0].name
surname.innerText = data[0].surname
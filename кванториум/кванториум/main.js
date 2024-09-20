// const data = [
//     {  
//         "name": "Серега",
//         "surname": "Смирнов",

//     }
// ]

// console.log(data)


// const name = document.querySelector(".name_js")
// const surname = document.querySelector(".surname_js")
// name.innerText = data[0].name
// surname.innerText = data[0].surname

async function getData() {
    const result = await fetch('https://jsonplaceholder.typicode.com/todos/1').then(response => response.json()) // запрос в бд
    console.log(result);
    //  render(result); функция для оборажения
}

function render(res) {
    const newDiv = document.createElement("div");
    newDiv.innerText = res.title;
    document.querySelector("body").append(newDiv);
}

getData();
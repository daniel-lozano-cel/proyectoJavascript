//Uso de librería sweetalert2

Swal.fire(
    'F5 para actualizar la página',
    'Sweetalert2',
)

//Fetch en el proyecto
fetch('https://fakestoreapi.com/products/1', {
    method: 'POST',
    headers: {
        'Content-Type':'application/json'
    },
    body: JSON.stringify({
        name: "User 1"
    })
}).then(res=>{
    return res.json()
})
    .then(data => console.log(data))
    .catch(error => console.log('ERROR'))

//Storage y JSON
function save_localStorage(){
    let creator = {
        "name" : "Daniel Lozano",
        "email" : "danielozano435@gmail.com",
        "age" : "23"
    };
    let name = "Daniel Lozano Cely";
    localStorage.setItem("nombre",name);
    localStorage.setItem("data", JSON.stringify(creator));
    let nombre = creator.name
    console.log(nombre);
}
save_localStorage()
console.log(Math.max(...conversion));
Swal.fire(
    'F5 para actualizar la página',
    'Sweetalert2',
)

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
    
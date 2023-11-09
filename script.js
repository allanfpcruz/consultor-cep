//viacep.com.br/ws/01001000/json/

const cep = document.querySelector("#cep")

const showData = (results) => {
    for(const campo in results) {
        if (document.querySelector('#' + campo)) {
            document.querySelector('#' + campo).value = results[campo]
        }
    }
}
function removeData() {
    const inputs = document.querySelectorAll('.form-control')
    inputs.forEach(input => {
        input.value = ""
    });
}
cep.addEventListener("blur",(e) => {
    let newCep = cep.value.replace("-", "")
    const options = {
        method: 'GET',
        mode: 'cors',
        cache: 'default'
    }
    fetch(`https://viacep.com.br/ws/${newCep}/json/`, options)
        .then(response => {response.json()
            .then(data => {
                console.log(data)  
                showData(data) 
                if (data.erro) {
                    document.querySelector('#erro').classList.remove('hide')
                    removeData()
                } else {
                    document.querySelector('#erro').classList.add('hide')
                    
                }
            })
        })
})
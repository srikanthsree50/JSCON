document.querySelector('#category').addEventListener('click',(e) =>{
   window.location.href = '/' + e.target.id
})

document.querySelector('#form').addEventListener('keyup',(e) => {
    (e.target.dataset.uppercase != undefined){
        e.target.value = e.target.value.toUppercase()
    }
})
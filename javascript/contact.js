document.addEventListener('click',(e)=>{
    if (e.target.id=='send') {
        const name = document.querySelector('#name').value
        const phone = document.querySelector('#phone').value
        const email = document.querySelector('#email').value
        const text = document.querySelector('#text').value
        alert(`${name},${phone},${email},${text}`)
    }
})
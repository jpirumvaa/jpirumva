const addBtn= document.querySelector('.add')
const adminForm=document.querySelector('.admin-form')

const profileName= document.querySelector(".prof-name")

let authedUser="admininstrator"
if(authedUser !=='admininstrator'){
   // admin.style.display="none"
}

function showHide(ele){
    ele.style.display= ele.style.display=="block"?"none":"block"
}
addBtn.addEventListener('click', ()=>{
    showHide(adminForm)
    adminUpdate.style.display= 'none'
})

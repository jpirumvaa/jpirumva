const addBtn= document.querySelector('.add')
const adminForm=document.querySelector('.admin-form')
const admin= document.querySelector('.admin')

let authedUser="admininstrator"
if(authedUser !=='admininstrator'){
    admin.style.display="none"
}

addBtn.addEventListener('click',()=>{
    adminForm.style.display= adminForm.style.display=="block"?"none":"block"
})

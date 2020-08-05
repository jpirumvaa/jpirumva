const messages= document.querySelector(".messages")

const setupMessages= (data)=>{
    let messageUI= `<h2 class="center">Messages</h2>`
    data.forEach(item=>{
        const message= item.data()
        console.log(message)
        if(message!=undefined){
            const mess=`
            <div class="message">
                <h4>${message.name}</h4>
                <p>${message.message}</p>
            </div>
            <hr/>
            `
            messageUI+=mess
        }

    })
    messages.innerHTML= messageUI
    
    
}

db.collection('messages').get().then(info=>{
    setupMessages(info.docs)
})
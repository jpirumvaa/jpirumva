const messages= document.querySelector(".messages")
const avatar= document.querySelector(".avatar")
const addForm= document.querySelector(".admin")
var reader;
var files=[];
var imageURLs=[]
const author= document.querySelector(".author")
const title=document.querySelector(".article-title")
const articleBody= document.querySelector(".article-body")
const articlesPart= document.querySelector('.articles-part')

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

avatar.onchange= e =>{
    files= e.target.files;
    reader= new FileReader();
    reader.onload=function(){
        imageURLs.push(reader.result)
        
        
    }
    reader.readAsDataURL(files[0])
    
}

console.log(imageURLs)

db.collection('messages').get().then(info=>{
    setupMessages(info.docs)
})

var today = new Date();
var date = `${today.getDate()}/${(today.getMonth()+1)}/${today.getFullYear()}`;
var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
var dateTime=`${date} ${time}`

addForm.addEventListener('submit', function(e){
    e.preventDefault() 
        db.collection('articles').add({
            title: title.value,
            author: author.value,
            body: articleBody.value,
            avatarURL: imageURLs[0],
            likes:[],
            comments:[],
            date: dateTime
        }).then(()=>{
            alert("Thank you for submitting your form.")
            addForm.reset()
        }).catch((e)=>console.log(e))

})


const setupArticles= (data)=>{
    let articleUI=`                    
    <tr class="title">
        <th>Article Name</th>
        <th>Date of Publication</th>
        <th>Edit Blog</th>
        <th>Delete</th>
    </tr>`;
    data.forEach(item=>{
        const article= item.data()
        if(article!=undefined){
            const art=`
                <tr>
                    <td>${article.title}</td>
                    <td>${article.date}</td>
                    <td class="center"><img src="https://img.icons8.com/pastel-glyph/30/000000/edit.png"/></td>
                    <td class="center"><img src="https://img.icons8.com/color/30/000000/delete-forever.png"/></td>
                </tr> 
            `
            articleUI+=art
        }


    })
    articlesPart.innerHTML= articleUI
}

db.collection('articles').get().then(info=>{
    setupArticles(info.docs)
})

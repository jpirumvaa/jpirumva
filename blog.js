const blogPart= document.querySelector(".blog-d")
const summary= document.querySelector(".summary")
const commentsPart= document.querySelector('.comments')



const setupBlog= (data)=>{
    let blogUI="";
    const blog= data[1].data() 
    const blogId= data[1].id       
        if(blog!=undefined){
            const bl=`
            <div class="blog-header">
                <h2>${blog.title}</h2>
                <hr/>
                
                <h3>Posted: ${blog.date}</h3>
                <h3>Author: ${blog.author}</h3>
            </div>
            <img class="blog-avatar" src="${blog.avatarURL}"/>
            <div>            
                <p class="blog-body">${blog.body}</p>
                <br>
                <form class="comment-form">
                    <h3>Add a comment</h3>
                    <div class="form-control">
                        <label for="username">Name</label>
                        <input type="text" class="commenter" id="commenter" placeholder="Enter your name">
                        <small></small>
                    </div>
                    <div class="form-control">
                        <label for="message">Comment</label>
                        <textarea id="comment" class="blog-comment"></textarea>
                        <small></small>	
                    </div>
                    <button class="btn">Send</button>
                </form>
                
            </div>
            `
            blogUI+=bl
        }
    blogPart.innerHTML= blogUI

    const commenterName= document.querySelector('.commenter')
    const comment= document.querySelector('.blog-comment')
    const commentForm= document.querySelector('.comment-form')

commentForm.addEventListener('submit',(e)=>{
    e.preventDefault()
    db.collection('comments').add({
        commenter: commenterName.value,
        comment: comment.value,
        commentingTo: blogId
    }).then(()=>{
        commentForm.reset()
    }).catch((e)=>console.log(e))
})


const setupComments = (data)=>{
    let ui=`<h2 class="center">Comments</h2>`
    data.forEach(item=>{
        let blogComment=item.data()       

        if(blogComment.commentingTo===blogId){
            const cui= `
            <div class="comment">
                <h4>${blogComment.commenter}</h4>
                <p>${blogComment.comment}</p>
            </div>
            <hr/>
            `
            ui+=cui
        }
        console.log(ui)   
    })
    commentsPart.innerHTML= ui
}


db.collection('comments').get().then(info=>{
    setupComments(info.docs)
})

    /*
const addComment=(data)=>{




}


const setupComments= (data)=>{
    let commentsUI= `<h2 class="center">Messages</h2>`
    data.forEach(item=>{
        const message= item.data()
        
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
*/
  /*
commentForm.addEventListener('submit', (e)=>{
    e.preventDefault()
  
    const editArticle= (data)=>{
    let article= data.data()
    let id= data.id
    updateAuthor.value= article.author
    updateTitle.value= article.title
    updateAvatar.src= article.avatarURL
    updateArticleBody.value= article.body
    updateForm.addEventListener('submit',(e)=>{
        e.preventDefault()
        adminAdd.style.display='none'
        db.collection('articles').doc(id).update({
            author:updateAuthor.value,
            body: updateArticleBody.value,
            avatarURL: updateAvatar.src,
            title: updateTitle.value,
            comments: [],
            likes: [],
        }).then(()=>alert("Updated Successfully")).then(()=>{
            updateForm.reset()
            articlesPart.innerHTML=""
            db.collection('articles').get().then(info=>{
            setupArticles(info.docs)
            })
        }).catch((e)=>alert("An error occured. Please, try again"))
    })

}

function editItem(e){
    let id= e.getAttribute('id')
    db.collection('articles').doc(id).get().then(info=>{
        editArticle(info)    
    })
}
    
    console.log(comment.value)
})
*/
}   





const setupBlogSummary= (data)=>{
    let blogSummaryUI="";
    data.forEach(item=>{
        const blogSummary= item.data()
        if(blogSummary!=undefined){
            const blSummary=`
                <div class="blog">
                    <h3>${blogSummary.title}</h3>
                    <p>${blogSummary.body.slice(0, 300)}.......<a href="#">Continue Reading</a></p>
                    <div class="likes">
                        <div>
                            <img src="https://img.icons8.com/carbon-copy/20/000000/like--v1.png"/>
                            <span>5</span>
                        </div>
                        <div >
                            <img src="https://img.icons8.com/dotty/20/000000/send-comment.png"/>
                            <span>2</span>
                        </div>
                    </div>
                </div>
            `
            blogSummaryUI+=blSummary
        }


    })
    summary.innerHTML= blogSummaryUI
}

db.collection('articles').get().then(info=>{
    setupBlog(info.docs)
    setupBlogSummary(info.docs)
}).catch((e)=>{
    alert("Unable to retrieve data. Please, check your network and try again.")
    console.log(e)
})
const blogPart= document.querySelector(".blog-d")
const summary= document.querySelector(".summary")
const commentsPart= document.querySelector('.comments')



const setupBlog= (data, id)=>{
    let blogUI="";
    const blog= data.data() 
    const blogId= id      
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
        }else{
            const nbl=`
            <div>
                
            </div>`
            blogUI+=nbl
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
        db.collection('comments').get().then(info=>{
            setupComments(info.docs)
        })
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

}   





const setupBlogSummary= (data)=>{
    let blogSummaryUI="";
    data.forEach(item=>{
        const blogSummary= item.data()
        console.log(blogSummary)
        const blogId= item.id
        if(blogSummary!=undefined){
            const blSummary=`
                <div class="blog">
                    <h3>${blogSummary.title}</h3>
                    <p>${blogSummary.body.slice(0, 300)}.......<button class='btn c-btn' onclick="generateId(${blogId})" id=${blogId}>Continue Reading</button></p>
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

const generateId =(e)=>{
    let id= e.getAttribute('id')
    db.collection('articles').doc(id).get().then(info=>{
        console.log(info)
        setupBlog(info, id)
    })
}

db.collection('articles').get().then(info=>{    
    setupBlogSummary(info.docs)
}).catch((e)=>{
    alert("Unable to retrieve data. Please, check your network and try again.")
    console.log(e)
})
const blogPart= document.querySelector(".blog-d")
const summary= document.querySelector(".summary")

const setupBlog= (data)=>{
    let blogUI="";
    const blog= data[0].data()        
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
                <h3>Add a comment</h3>
                <textarea></textarea>
                <button class="btn">Send</button>
            </div>
            `
            blogUI+=bl
        }
    blogPart.innerHTML= blogUI

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
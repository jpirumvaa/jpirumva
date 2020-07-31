const projectsDOM= document.querySelector(".domworks")
const featuredWorksDOM= document.querySelector(".featured-activities")
const projFooter= document.querySelector('.cont-footer')

async function getProjects(){
    try{
        let results = await fetch('../Projects/projects.json')
        let data= await results.json()
        let projects= data.items
        return projects
    }catch(error){
        console.log(error)
    }
    
}


class UI{
displayProjects(projects){
    let results="" 

    projects.forEach((project)=>{
    results+=`
        <article class="work">
            <div class="img-container">
                <img class="work-img" src="${project.img}" alt="${project.name}">
                <div class="description">
                    <p>${project.description}</p>
                </div>
                
            </div>
            <h2>${project.name}</h2>
            <h3><a href="${project.url}" target="_blank">View Project</a></h3>				
        </article>
`
    })
    projectsDOM.innerHTML=results  
}
displayHomeProjects(projects){
    let homeResults="" 

    projects.slice(0,4).forEach((project)=>{
        homeResults+=`
        <article class="work">
            <div class="img-container">
                <img class="work-img" src="${project.img}" alt="${project.name}">
                <div class="description">
                    <p>${project.description}</p>
                </div>
                
            </div>
            <h2>${project.name}</h2>
            <h3><a href="${project.url}" target="_blank">View Project</a></h3>				
        </article>
`
    })
    featuredWorksDOM.innerHTML=homeResults
}


}

document.addEventListener("DOMContentLoaded", ()=>{
    const ui= new UI()
    getProjects().then(projects=>ui.displayProjects(projects))
    getProjects().then(projects=>ui.displayHomeProjects(projects))
})
/*
a project is of the following type:
{
    'name': String,
    'description': String
}
*/

//An array of projects.
let projects = [
    {
        'name':'sample',
        'description' : 'A sample project'
    },
    {
        'name' : 'Personal Website',
        'description' : 'You\'re looking at it right now. Built using HTML/CSS and Javascript ...'
    },
    {
        'name':'Sample2',
        'description' : 'Another sample project'
    },
];

//sets the projects count according to the length of projects
const setProjectCount = () => { document.getElementById('projectsBadge').innerHTML=projects.length; }

//operates on a single project to format
//displayProject(project): undefined
function displayProject(project){
    let wrapper = document.getElementById('project-wrapper');
    //using += adds new project
    wrapper.innerHTML += `
    <div class="project">
        <h2>${project.name}</h2>
        <p>${project.description}</p>
    </div>
    `;
}

//driver function to execute all functions to update content of site
function driverJS(){
    //set 
    setProjectCount();
    projects.forEach(displayProject);
}
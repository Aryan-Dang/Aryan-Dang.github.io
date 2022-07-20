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
        'name':'Destinations',
        'description' : "Cross-platform Material app built using Flutter which can dynamically add and display destinations saved by users"
    },
    {
        'name' : 'Personal Website',
        'description' : "You're looking at it right now. Built using HTML/CSS and Javascript, this website contains some of the projects I've worked on"
    },
    {
        'name':'Discord Gamebot',
        'description' : "Utilized Discord’s Javascript API to play 2 player TicTacToe through Discord."
    },
    {
        'name' : "DriveSave",
        'description' : "Awarded ’Best Venture Pitch’ prize at HackUMass IX for DriveSave, a project that takes kinetic measurements in real-time to detect bad driving habits and display them on the user’s phone."
    },
    {
        "name" : "Avoid the Asteroids",
        "description" : "Game built on Hardware where goal is to avoid the falling asteroids"
    },
    {
        "name" : "Project inbox dashboard",
        "description" : "Team project, more details coming soon..."
    }
];

//sets the projects count according to the length of projects
const setProjectCount = () => { document.getElementById('projectsBadge').innerHTML=projects.length; }

//operates on a single project to format
//displayProject(project): undefined
function displayProject(project){
    let wrapper = document.getElementById('project-wrapper');
    //using += adds new project
    wrapper.innerHTML += `
        <!--bootstrap code for displaying card-->
        <div class="card list-group-item-action d-flex w-100 justify-content-between" style="width: 18rem;">
            <div class="card-body">
            <h5 class="card-title">${project.name}</h5>
            <p class="card-text">${project.description}</p>
            </div>
        </div>
    `;
}

//driver function to execute all functions to update content of site
function driverJS(){
    //set 
    setProjectCount();
    projects.forEach(displayProject);
}
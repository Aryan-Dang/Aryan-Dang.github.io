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
    }
];

//sets the projects count according to the length of projects
const setProjectCount = () => { document.getElementById('projectsBadge').innerHTML=projects.length; }

//driver function to execute all functions to update content of site
function driverJS(){
    //set 
    setProjectCount();
}
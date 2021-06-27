//An array of projects.
let projects = [
    {
        'name':'sample',
        'description' : 'A sample project'
    }
];

//sets the projects count according to the length of projects
const setF = () => { document.getElementById('projectsBadge').innerHTML=projects.length; }
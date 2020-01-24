//GET - includes project name and project description

const db = require("../data/db-config")

module.exports ={
    find,
    findtasks,
    add
    
};

function find(id) {
    return db("tasks")
}




//GET (FIND)
function findtasks(id) {
    return db("tasks")
    .select("tasks.id","tasks.task_description","tasks.completed")
    .join("tasks.project_id","projects", "projects.id", "project.project_name","projects.project_description")
    .where( "tasks.project_id",id)
}


//POST (CREATE)
function add(task) {
    return db("tasks").insert(task)
    // .then(([id]) => {
    //     return findById(id);
    // });
}
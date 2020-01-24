//GET - includes project name and project description

//GET (FIND)
function find(id) {
    return db("tasks")
    .select("tasks.id","tasks.task_description")
    .join("projects", "projects.id", "projects.project_name","projects.project_description")
    .where( "tasks.",id)
}


//POST (CREATE)
function add(task) {
    return db("tasks").insert(task)
    .then(([id]) => {
        return findById(id);
    });
}
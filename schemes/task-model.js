//include project name and project description

//GET (FIND)
function find() {
    return db("tasks");
}


//POST (CREATE)
function add(task) {
    return db("tasks").insert(task)
    .then(([id]) => {
        return findById(id);
    });
}
//GET (FIND)
function find() {
    return db("projects");
}

//POST (CREATE)
function add(project) {
    return db("projects").insert(project)
    .then(([id]) => {
        return findById(id);
    });
}
//GET (FIND)
function find() {
    return db("resources");
}


//POST (CREATE)
function add(resource) {
    return db("resources").insert(resource)
    .then(([id]) => {
        return findById(id);
    });
}
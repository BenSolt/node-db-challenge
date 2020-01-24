
const db = require("../data/db-config")

module.exports ={
    find,
    findById,
    add
   
};


//GET (FIND)
function find() {
    return db("projects");
   
}

//GET (FIND BY ID)
function findById(userId) {
    //select * from users id 
    return db("projects")
    .where({id: userId})
    .first(); // = same as-> const user = users[0]
}



//POST (CREATE)
function add(project) {
    return db("projects").insert(project)
    .then(([id]) => {
        return findById(id);
    });
}
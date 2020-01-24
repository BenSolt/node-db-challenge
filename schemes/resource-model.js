const db = require("../data/db-config")

module.exports ={
    find,
    findById,
    add
    
};



//GET (FIND)
function find() {
    return db("resources");
}

//GET (FIND BY ID)
function findById(userId) {
    //select * from users id 
    return db("resources")
    .where({id: userId})
    .first(); // = same as-> const user = users[0]
}

//POST (CREATE)
function add(resource) {
    return db("resources").insert(resource)
    .then(([id]) => {
        return findById(id);
    });
}
//here we handle CRUD api requests
const handleList = async(req, res) =>{
    console.log("sent a get request to order controller")
};

const handleGetById = async (req, res) => {
    console.log("get by ID");
};

const handleCreate = async (req, res) =>{
console.log("created product");


};

const handleDelete = async(req, res) =>{
console.log("Product Deleted");

};

module.exports.handleCreate = handleCreate;
module.exports.handleList = handleList;
module.exports.handleGetById = handleGetById;
module.exports.handleDelete = handleDelete;
//here we handle CRUD api requests
const product = ('/backend/route/productsRoute.js');
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

exports.handleCreate = handleCreate;
exports.handleList = handleList;
exports.handleGetById = handleGetById;
exports.handleDelete = handleDelete;
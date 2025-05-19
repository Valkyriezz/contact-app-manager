const asyncHandler=require("express-async-handler")
//@description Get all Contacts
//@route GET /api/contacts
//@access Public
const getContacts = async(req, res) => {
  res.status(200).json({ message: "Get all contacts" });
};

//@description Create New Contact
//@route POST /api/contacts
//@access Public
const createContact = asyncHandler(async(req, res) => {
  console.log("The request body:",req.body);
  const {name,email,phone}=req.body;
  if (!name || !email || !phone){
    res.status(400);
    throw new Error("All fields are mandotory!");
  }
  res.status(201).json({ message: "Create contact" });
});

//@description Get Contact by ID
//@route GET /api/contacts/:id
//@access Public
const getContact = asyncHandler(async(req, res) => {
  res.status(200).json({ message: `Get Contact for ${req.params.id}` });
});

//@description Update Contact
//@route PUT /api/contacts/:id
//@access Public
const updateContact = asyncHandler(async(req, res) => {
  res.status(200).json({ message: `Update Contact for ${req.params.id}` });
});

//@description Delete Contact
//@route DELETE /api/contacts/:id
//@access Public
const deleteContact = asyncHandler(async(req, res) => {
  res.status(200).json({ message: `Delete Contact for ${req.params.id}` });
});

module.exports = {
  getContacts,
  createContact,
  getContact,
  updateContact,
  deleteContact,
};

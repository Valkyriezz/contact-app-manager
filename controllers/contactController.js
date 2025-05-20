const asyncHandler=require("express-async-handler")
const Contact=require("../models/contactModel")
//@description Get all Contacts
//@route GET /api/contacts
//@access Public
const getContacts = asyncHandler(async(req, res) => {
  const contacts= await Contact.find();
  res.status(200).json(contacts);
});

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
  const contact=await Contact.create({
    name,email,phone,
  });
  res.status(201).json(contact);
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

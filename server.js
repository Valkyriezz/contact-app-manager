const express=require("express");
const connectDb=require("./config/dbConnection")
const dotenv=require("dotenv").config();
const errorHandler=require("./middleware/errorHandler")

connectDb();

const app= express();

const port=process.env.PORT || 3000;

app.use(express.json());
app.use("/api/contacts",require("./routes/contactsRoutes"));
app.use(errorHandler);

app.listen(port,()=>{
    console.log(`Server is running on port ${port}`)
});


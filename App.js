//import express package
import express from 'express';
import dotenv from 'dotenv';
import router from "./Router/coffeRouter.js"

dotenv.config();
const App = express();
App.use(express.json());
App.use(express.urlencoded({extended : true})); // To parse URL-encoded bodies
const port = process.env.PORT || 3000; // Default port if not specified in .env
App.use("/api/coffee",router);
// create express app
        // url

        // port
App.listen(port,()=>{
    console.log("listening to PORT:"+ port);
})
 
import { connect } from "mongoose";

const DBConfig = async (DataBase) => {
    try {
        await connect(`mongodb://localhost:27017/${DataBase}`);
            console.log(`Connected to database: ${DataBase}`);
    }catch (error) {
        console.error(`Error connecting to database: ${error.message}`);
    }
}

export default DBConfig;


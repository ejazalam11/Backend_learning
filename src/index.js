import dotenv from "dotenv"
import ConnectDB from "./config/database.js";
import app from "./app.js";

dotenv.config({
    path: "./.env",
});

const startServer = async () => {
    try {
        await ConnectDB();

        app.on("error", (error) => {
            console.log("Error starting server", error);
            process.exit(1);
        });
        app.listen(process.env.PORT, () => console.log(`Server is running on port ${process.env.PORT}`));
    } catch (error) {
        console.log("Error starting server in index.js", error);
        process.exit(1);
    }
}   

startServer();
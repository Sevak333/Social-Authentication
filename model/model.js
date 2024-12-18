import mongoose from "mongoose";

main().catch(err => console.log(err))
async function main() {
    await mongoose.connect("mongodb://127.0.0.1:27017/auth")
    console.log("monogo connect")
}

const User = mongoose.Schema({
    name: String,
    surname: String,
    login: { type: String, unique: true, dropDups: true },
    password: String
})

export const UserModel = mongoose.model("users", User)

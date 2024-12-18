import "./model/model.js"
import express from 'express'
import bodyParser from "body-parser"
import { UserModel } from "./model/model.js"

const app = express()

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());



app.post("/signup", (req, res) => {
    const body = req.body
    UserModel.findOne({ login: body.login }).then(
        (data) => {
            if (data) {
                return res.send({ status: 'error', message: "Login is busy" })
            } else {
                UserModel.create(body)

                res.send({ status: "ok" })
            }
        }
    )
})

app.listen(4002, () => console.log("started..."))



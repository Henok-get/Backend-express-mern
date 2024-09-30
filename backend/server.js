const connect =require("./connect")
const express =require("express")
const cors =require("cors")

const posts=require("./postRoutes")

const app=express()

const PORT=3000

app.use(cors())

app.use(express.json())
app.use(posts)

app.listen(PORT,()=>{
    connect.connectToserver()
    console.log(`server is running on port ${PORT}`)

})
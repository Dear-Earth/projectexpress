// const express=require("express")
// const app=express();
// const port=80;
// app.get("/",(req,res)=>{
//     res.status(300).send("this is homepage of my first express app with arpit");
// });
// app.get("/about",(req,res)=>{
//     res.status(404).send("not found");
// });
// app.post("/",(req,res)=>{
//     res.status(200).send("this is about post request homepage of my first express app with arpit");
// });
// app.post("/this",(req,res)=>{
//     res.status(250).send("hello world")
// })
// app.listen(port,()=>{
//     console.log(`the app is running at port ${port}`)
// });
const express=require("express")
const path=require("path")
const app=express();
const port=80;
//for serving static files
app.use("/static",express.static("static"))
//set the template engine as pug

app.set('view engine','pug')
//set the views directory
app.set('views',path.join(__dirname,'views'))

app.get('/demo', function (req, res) {
    const con="this is the best content in the internet"
    res.status(200).render('demo', { title: 'Hey', content:con })
  })
// app.get("/",(req,res)=>{
//     res.status(200).send("this is my first hlo on  express app with arpit")
// })
app.listen(port,()=>{
    console.log(`the application started on succesfully on port ${port}`)
})


import express from 'express'

const app = express();


app.get("/",(req,res)=>{
    return res.status(200).json({
            massage:"server is up and jai shankar ",
            success:true
    })
})

// app.listen()
const port = 9191

app.listen(port, () => {
    // connectDb();
    console.log(`running on port ${port}`);
});
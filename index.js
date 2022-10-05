import express from  'express'

const  PORT = 5000;

const app = express()
app.listen(PORT, () => console.log('Server started on port ' + PORT))
app.use(express.json())


app.get('/get',(req, res) =>
    {
        res.status(200).json('Server is work!')
        console.log(req.query);
    })

app.post('/',(req, res) => {
    res.status(200).json('Server is work!' + req.body )
    console.log(req.body);
})


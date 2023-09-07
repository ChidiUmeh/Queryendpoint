require("dotenv").config()
const express = require("express")
const cors = require("cors")
const app = express()


app.use(cors())

const port = process.env.PORT || 3000


let weekdays = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
const details = [{
    slack_name:"Chidiebere",
    current_day:weekdays[new Date().getDay()],
    utc_time:new Date().toISOString(),
    track:"backend",
    github_file_url:"https://github.com/ChidiUmeh/Queryendpt.git",
    github_repo_url:"https://github.com/ChidiUmeh",
    status_code : 200
}]




app.get('/api', (req,res)=>{
    const {slack_name,track} = req.query
   const checkQuery = details.find(name=>name.slack_name===slack_name && name.track===track)
   if(checkQuery)
   return res.status(200).json(checkQuery)
   return res.status(404).json({error: "does not exist"})
})





app.listen(port, ()=>console.log(`Server listening on port ${port}`))



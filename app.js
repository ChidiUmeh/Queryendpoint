require("dotenv").config()
const express = require("express")
const cors = require("cors")
const app = express()


app.use(cors())

const port = process.env.PORT || 3000


let weekdays = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
let date = new Date().toISOString().split('')
date.splice(-5,4)
let utc_date = date.join("")
const details = [{
    slack_name:"ChidiebereAgate",
    current_day:weekdays[date.toISOString().getDay()],
    utc_time:utc_date,
    track:"backend",
    github_file_url:"https://github.com/ChidiUmeh/Queryendpoint/blob/main/app.js",
    github_repo_url:"https://github.com/ChidiUmeh/Queryendpoint",
    status_code : 200
}]




app.get('/api', (req,res)=>{
    const {slack_name,track} = req.query
   const checkQuery = details.find(name=>name.slack_name===slack_name && name.track===track)
   console.log(checkQuery.utc_time)
   if(checkQuery)
   return res.status(200).json(checkQuery)
   return res.status(404).json({error: "does not exist"})
})





app.listen(port, ()=>console.log(`Server listening on port ${port}`))




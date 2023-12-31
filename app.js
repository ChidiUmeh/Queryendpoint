require("dotenv").config()
const nocache = require('nocache')
const express = require("express")
const cors = require("cors")
const app = express()


app.use(cors())
app.use(nocache())


let port = process.env.PORT || 3000





app.get('/api', (req,res)=>{
    let currentDate = new Date();
let formattedUTCDate = currentDate.toISOString().slice(0, -5) + 'Z';

let weekdays = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
let details = [{
    slack_name:"ChidiebereAgate",
    current_day:weekdays[new Date().getUTCDay()],
    utc_time:formattedUTCDate,
    track:"backend",
    github_file_url:"https://github.com/ChidiUmeh/Queryendpoint/blob/main/app.js",
    github_repo_url:"https://github.com/ChidiUmeh/Queryendpoint",
    status_code : 200
}]
    const {slack_name,track} = req.query
   const checkQuery = details.find(name=>name.slack_name===slack_name && name.track===track)
   if(checkQuery)
   return res.status(200).json(checkQuery)
   return res.status(404).json({error: "does not exist"})
})





app.listen(port, ()=>console.log(`Server listening on port ${port}`))




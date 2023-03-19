
const  express=require("express");
const bodyParser=require("body-parser");
const fs=require("fs");
const { getHistoryFiguers, getHistoryEvents } = require("./helpers/historyAPI");

const  app=express();
app.get("/global",(req,res)=>{
    fs.readFile("data.json",(err,data)=>{
        if(err){console.log("error "+err);return;}
        else{
            let womendata=JSON.parse(data);
            res.json(womendata);  
        }
    });
});
app.get("/global/:womanName",(req,res)=>{
    const {womanName}=req.params
    
    fs.readFile("data.json",async(err,data)=>{
        if(err){console.log("error "+err);return;}
        else{
            const womendata=JSON.parse(data);
            const womanData=womendata.find(elem=>elem.name==womanName);  
            if(womanData){
                res.json(womanData)
            }else{
                try{
                    
                    let women=await getHistoryFiguers(womanName);
                    
                 
                    if(women.length==0){
                        throw new Error("Not Found");
                    }
                    bc=""
                    if(women[0].info.years?.indexOf("BC")){
                    bc="BC"
                    }
                const womenEvents=await getHistoryEvents(womanName);        
                res.status(200).json({name:women[0].name,impact:women[0].title+", "+womenEvents[0].event,birthYear:women[0].info.years?.split("-")[0]+bc,country:undefined})     
                }catch(err){
                    console.log(err.message)
                    res.status(404).json({message:err?err.message:"Something wrong happend"})
                };
            }
        }
    })
})

app.get("/arab",(req,res)=>{
    fs.readFile("data1.json",(err,data)=>{
        if(err){console.log("error "+err);return;}
        else{
            womenData=JSON.parse(data);
            res.json(womenData);  
        }
    });
});
app.get("/arab/:womanName",(req,res)=>{
    const {womanName}=req.params
    
    fs.readFile("data1.json",async(err,data)=>{
        if  (err){console.log("error "+err);return;}
        else{
            const womendata=JSON.parse(data);
            const womanData=womendata.find(elem=>elem.name==womanName);  
            if(womanData){
                res.json(womanData)
            }else{
                try{
                    
                    let women=await getHistoryFiguers(womanName);
                    
                 
                    if(women.length==0){
                        throw new Error("Not Found");
                    }
                    bc=""
                    if(women[0].info.years?.indexOf("BC")){
                    bc="BC"
                    }
                const womenEvents=await getHistoryEvents(womanName);        
                res.status(200).json({name:women[0].name,impact:women[0].title+", "+womenEvents[0].event,birthYear:women[0].info.years?.split("-")[0]+bc,country:undefined})     
                }catch(err){
                    console.log(err.message)
                    res.status(404).json({message:err?err.message:"Something wrong happend"})
                };
            }
        }
    })
})

app.listen(7000,()=>console.log("server start listening at 7000"));




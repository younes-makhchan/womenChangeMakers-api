


exports.getHistoryFiguers=async (womanName)=>{
   return  fetch("https://api.api-ninjas.com/v1/historicalfigures?name="+womanName,{
        headers:{
            "X-Api-Key":"LJnE88ofBoGzVwYZ4yN1PQ==GhDHUIJofQvRbbLk"
        },
        method:"GET"
    }).then(response=>response.json())
}
exports.getHistoryEvents=async (womanName)=>{
   return   fetch("https://api.api-ninjas.com/v1/historicalevents?text="+womanName,{
    headers:{
        "X-Api-Key":"LJnE88ofBoGzVwYZ4yN1PQ==GhDHUIJofQvRbbLk"
    },
    method:"GET"
      }).then(response=>response.json())
}



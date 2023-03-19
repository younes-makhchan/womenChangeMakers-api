//arabic women

// Souad Massi (born 1972, Algeria) - Algerian singer-songwriter and advocate for women's rights and cultural expression.
// Dr. Hayat Sindi (1967, Saudi Arabia) - a biotechnologist and founder of the i2 Institute for Imagination and Ingenuity. She is also a UNESCO Goodwill Ambassador for science education in the Middle East.
// Dr. Aisha Al-Mannai (Qatar, born 1960) - A pioneer in the field of environmentalism in Qatar, Dr. Al-Mannai is the founder and chairperson of the Qatar Sustainability Network, a non-profit organization dedicated to promoting sustainable development and environmental stewardship.
// Wafa Ben Hassine - Born in Tunisia in 1988, Wafa is a human rights activist and lawyer who focuses on freedom of expression and privacy rights in the digital age.
// Farida Allaghi (1953, Libya) - Women's rights activist and founder of the Women's Wing of the National Front Party of Libya.
// Huda Sha'rawi (Egypt, 1879-1947): Feminist activist and founder of the Egyptian Feminist Union.
// Jumana Odeh: Born in 1964 in Palestine, Odeh is a human rights activist and advocate for women's rights, particularly in the Gaza Strip.
//Laila Al-Marayati (1954-), USA - Physician and women's health activist
//Dr. Aisha Ahmad - A Canadian-Lebanese academic and author known for her work on international security and counterterrorism.
//Mariam Al-Sohel - (1967 - present) - Kuwait - Founder of the Kuwait Society for the Protection of Animals and Their Habitat (K’S PATH) and advocate for animal welfare and environmental protection in Kuwait.
//Rania Nashar: (Born 1976, Saudi Arabia) The first female CEO of Samba Financial Group, one of the largest banks in Saudi Arabia. She has been recognized by Forbes Middle East as one of the most powerful women in the Arab world.
//Asma Khader (1954- ) Jordan: A human rights lawyer and activist, Khader is known for her work in advocating for women's rights and equality in Jordan and the Arab world.
//Aziza Chaouni, 1975-, Morocco - Architect and urban planner who designed and implemented green infrastructure projects in Morocco.
// Anbara Salam Khalidi (1897-1986), Lebanon: Anbara Salam Khalidi was a pioneering feminist, educator, and writer, who advocated for women's education and emancipation in the Arab world.
// Khadija bint Khuwaylid (555-620), Saudi Arabia. First wife of the Prophet Muhammad and known for her business acumen and charitable works.
//Mounira bint al-Ahnaf (1832-1891), Egypt. Known for her contributions to Arabic literature, as well as her expertise in medicine and botany.
//1,9



let array=Array.from(document.querySelectorAll("li")).map(elem=>elem.textContent).filter(elem=>elem.slice(-1)==".").filter((elem,i)=>i<=391||i>394).slice(0,738)

// Fatima Al Qadiri (born 1981, Kuwait) - Kuwaiti artist and advocate for cultural exchange and gender equality.
function firstList(elem){
   
    
    elem=elem.replace(" - "," : ")
   let  [info,impact]=elem.split(":");
     [name,dateAndCounry]=info.split("(");
     date=dateAndCounry?.split(",")[0];
         let birthYear="",deathYear="";
 
         if(date){
            if(date.indexOf("-")>0){
             birthYear=date.split("-")[0];
             deathYear=date.split("-")[1];
 
            }else{
 
                birthYear=date.split(" ")[1];
            }
        
            if(birthYear?.indexOf("(")>-1){
                birthYear=birthYear.replace("(","")
            }
            if(deathYear?.indexOf(")")>-1){
                deathYear=deathYear.replace(")","")
            }
            if(deathYear?.indexOf("(")>-1){
                deathYear=deathYear.replace("(","")
            }
            if(birthYear?.indexOf(")")>-1){
                birthYear=birthYear.replace(")","")
            }
      }
     let country=dateAndCounry?.split(",")[1];
     if(country?.indexOf(")")>-1){
      country=country.replace(")","");
     }
     name=name.trim();
     birthYear=birthYear==undefined?"":birthYear.trim();
     deathYear=deathYear==undefined?"":deathYear.trim();
     country=country==undefined?"":country.trim();
     impact=impact==undefined?"":impact.trim();

  return {name,birthYear,deathYear,country,impact} 
}


// Amal Clooney (1978, Lebanon) - a human rights lawyer who has been working to promote international human rights and justice. She has represented political prisoners, journalists, and victims of human rights abuses around the world.
function secondList(elem){
   
       let  [info,impact]=elem.split(" - ");
     [name,dateAndCounry]=info.split("(");// name (127,county)
     date=dateAndCounry?.split(",")[0];
         let birthYear,deathYear;
         if(date){
            
            if(date.indexOf("-")>0){
                birthYear=date.split("-")[0];
                deathYear=date.split("-")[1];
    
               }else{
    
                   birthYear=date.split(" ")[1];
               }
      }
     let country=dateAndCounry?.split(",")[1];
     if(country?.indexOf(")")>-1){
      country=country.replace(")","");
     }

     name=name.trim();
     birthYear=birthYear==undefined?"":birthYear.trim();
     deathYear=deathYear==undefined?"":deathYear.trim();
     country=country==undefined?"":country.trim();
     impact=impact==undefined?"":impact.trim();

  return {name,birthYear,deathYear,country,impact} 
}
// Nisreen Barakat - Born in Syria in 1985, Nisreen is a women's rights activist and founder of an organization that provides support to Syrian women and children affected by the conflict.
function thirdList(elem){
      
       let  [name,impact]=elem.split(" - ");
     [dateAndCounry,impact]=impact.split(",");// name (127,county)
     date=dateAndCounry?.split("in")[2];
         let birthYear,deathYear;
         if(date){
          birthYear=date;
      }
     let country=dateAndCounry?.split("in")[1];
     if(country?.indexOf(")")>-1){
      country=country.replace(")","");
     }

     name=name.trim();
     birthYear=birthYear==undefined?"":birthYear.trim();
     deathYear=deathYear==undefined?"":deathYear.trim();
     country=country==undefined?"":country.trim();
     impact=impact==undefined?"":impact.trim();

  return {name,birthYear,deathYear,country,impact} 
}

// Dr. Noha Alshugairi (Saudi Arabia, born 1971) - A psychologist and author who has been working to improve mental health in the Arab world. She founded the website, DrNoha.com, which provides psychological counseling in Arabic.
function fourthList(elem){
   
    
    elem=elem.replace(" - "," : ")
   let  [info,impact]=elem.split(":");
     [name,dateAndCounry]=info.split("(");
     date=dateAndCounry?.split(",")[1];
         let birthYear,deathYear;
 
         if(date){
            if(date.indexOf("-")>0){
             birthYear=date.split("-")[0];
             deathYear=date.split("-")[1];
 
            }else{
 
                birthYear=date.split(" ")[2];
                if(birthYear?.indexOf(")")>-1){
                    birthYear=birthYear.replace(")","");
                 }
            }
        
  
      }
     let country=dateAndCounry?.split(",")[0];
    
     name=name.trim();
     birthYear=birthYear==undefined?"":birthYear.trim();
     deathYear=deathYear==undefined?"":deathYear.trim();
     country=country==undefined?"":country.trim();
     impact=impact==undefined?"":impact.trim();

  return {name,birthYear,deathYear,country,impact} 
}

//Huda Sha'rawi (Egypt, 1879-1947): Feminist activist and founder of the Egyptian Feminist Union.
function fifthList(elem){
    let  [info,impact]=elem.split(":");
  [name,dateAndCounry]=info.split("(");// name (127,county)
  date=dateAndCounry?.split(",")[1];
    let birthYear,deathYear;
    if(date){
        birthYear=date.split("-")[0];
        deathYear=date.split("-")[1];
        if(deathYear?.indexOf(")")>-1){
            deathYear=deathYear.replace(")","");
           }
    }



  let country=dateAndCounry?.split(",")[0];
 

  name=name.trim();
  birthYear=birthYear==undefined?"":birthYear.trim();
  deathYear=deathYear==undefined?"":deathYear.trim();
  country=country==undefined?"":country.trim();
  impact=impact==undefined?"":impact.trim();

return {name,birthYear,deathYear,country,impact} 
}


//Jumana Odeh: Born in 1964 in Palestine, Odeh is a human rights activist and advocate for women's rights, particularly in the Gaza Strip.
function sixList(elem){
      
    let  [name,impact]=elem.split(":");
  [dateAndCounry,impact]=impact.split(",");// name (127,county)
  date=dateAndCounry?.split("in")[1];
      let birthYear,deathYear;
      if(date){
       birthYear=date;
   }
  let country=dateAndCounry?.split("in")[2];

  name=name.trim();
  birthYear=birthYear==undefined?"":birthYear.trim();
  deathYear=deathYear==undefined?"":deathYear.trim();
  country=country==undefined?"":country.trim();
  impact=impact==undefined?"":impact.trim();

return {name,birthYear,deathYear,country,impact} 
}


// Laila Al-Marayati (1954), USA - Physician and women's health activist
function sevenList(elem){
    
    let  [info,impact]=elem.split(" - ");
  [name,dateAndCounry]=info.split("(");// name (127,county)
  date=dateAndCounry?.split(",")[0]; //1954), USA
      let birthYear,deathYear;
    if(date){
        if(date.indexOf("-")>-1){
            birthYear=date.split("-")[0];
            deathYear=date.split("-")[1];

        }
       if(birthYear?.indexOf(")")>-1){
        birthYear=birthYear.replace(")","");
       }
       if(deathYear?.indexOf(")")>-1){
        deathYear=deathYear.replace(")","");
       }
   }
  let country=dateAndCounry?.split(",")[1];
  

  name=name.trim();
  birthYear=birthYear==undefined?"":birthYear.trim();
  deathYear=deathYear==undefined?"":deathYear.trim();
  country=country==undefined?"":country.trim();
  impact=impact==undefined?"":impact.trim();

return {name,birthYear,deathYear,country,impact} 
}
//Huda Sharawi (Egypt, 1879-1947) - founded the Egyptian Feminist Union and led the first women's demonstration in Egypt in 1919
function eightList(elem){
    
    let  [info,impact]=elem.split(" - ");
  [name,dateAndCounry]=info.split("(");// name (county,15-59)
  date=dateAndCounry?.split(",")[1];
    let birthYear,deathYear;
    if(date){
        birthYear=date.split("-")[0];
        deathYear=date.split("-")[1];
        if(deathYear?.indexOf(")")>-1){
            deathYear=deathYear.replace(")","");
           }
    }



  let country=dateAndCounry?.split(",")[0];
 

  name=name.trim();
  birthYear=birthYear==undefined?"":birthYear.trim();
  deathYear=deathYear==undefined?"":deathYear.trim();
  country=country==undefined?"":country.trim();
  impact=impact==undefined?"":impact.trim();

return {name,birthYear,deathYear,country,impact} 
}
//Shireen Abu Akleh - (1964 - present) - Palestine - Advocate for women's rights and
function nineList(elem){
   
    
     [name,birthYear,deathYear,country,impact]=elem.split(" - ")

    if(birthYear?.indexOf("(")>-1){

        birthYear=birthYear.replace("(","");
    }
    if(deathYear?.indexOf(")")>-1){
        deathYear= deathYear.replace(")","");
    }
     name=name.trim();
     birthYear=birthYear==undefined?"":birthYear.trim();
     deathYear=deathYear==undefined?"":deathYear.trim();
     country=country==undefined?"":country.trim();
     impact=impact==undefined?"":impact.trim();

  return {name,birthYear,deathYear,country,impact} 
}


//Rasha Al Disuqi: (Born 1982, Egypt) A writer and cultural critic who has been involved in various initiatives to promote Arab culture and literature. She has served as the director of the Abu Dhabi International Book Fair and was named one of the 100 most powerful Arab women by Arabian Business magazine.
function tenList(elem){ 
   let  [name,info]=elem.split(":");
     [dateAndCounry,impact]=info.split(")");// (Born 1982, Egypt) A writer 
     date=dateAndCounry?.split(",")[0];
         let birthYear,deathYear;
 
         if(date){
            
            if(date.indexOf("-")>0){
             birthYear=date.split("-")[2];
             deathYear=date.split("-")[3];
 
            }else{
 
                birthYear=date.split(" ")[2];
            }
        
  
      }
     let country=dateAndCounry?.split(",")[1];
     if(country?.indexOf(")")>-1){
      country=country.replace(")","");
     }
     name=name.trim();
     birthYear=birthYear==undefined?"":birthYear.trim();
     deathYear=deathYear==undefined?"":deathYear.trim();
     country=country==undefined?"":country.trim();
     impact=impact==undefined?"":impact.trim();

  return {name,birthYear,deathYear,country,impact} 
}

// Asma Khader (1954- ) Jordan: A human rights lawyer and activist, Khader is known for her work in advocating for women's rights and equality in Jordan and the Arab world.
function elevenList(elem){
    
    let  [info,impact]=elem.split(":");
  [name,dateAndCounry]=info.split("(");
  date=dateAndCounry?.split(")")[0]; 
  console.log(date);
      let birthYear,deathYear;
    if(date){
        birthYear=date.split("-")[0];
        deathYear=date.split("-")[1];
   }
  let country=dateAndCounry?.split(")")[1];
  

  name=name.trim();
  birthYear=birthYear==undefined?"":birthYear.trim();
  deathYear=deathYear==undefined?"":deathYear.trim();
  country=country==undefined?"":country.trim();
  impact=impact==undefined?"":impact.trim();

return {name,birthYear,deathYear,country,impact} 
}
//Rawya Ateya, 1933, 1997, Egypt - Egypt's first female physician, renowned for her work on parasitic diseases.
function twelveList(elem){
    let name,birthYear,deathYear,country
    let [info,impact]=elem.split(" - ");
    if(info.split(",").length==4){
        
          [name,birthYear,deathYear,country]=info.split(",");
          
    }else{
          [name,birthYear,country]=info.split(",");
    }
  

  name=name.trim();
  birthYear=birthYear==undefined?"":birthYear.trim();
  deathYear=deathYear==undefined?"":deathYear.trim();
  country=country==undefined?"":country.trim();
  impact=impact==undefined?"":impact.trim();

return {name,birthYear,deathYear,country,impact} 
}
// Latifa Al-Hussaini, 1928-2019, Bahrain - A pioneer in microbiology in Bahrain who established the country's first microbiology lab.
function thirteenList(elem){
    let name,birthYear,date,deathYear,country
    let [info,impact]=elem.split(" - ");
   
   [name,date,country]=info.split(",");
          
    if(date?.indexOf("-")){
            birthYear=date.split("-")[0];
            deathYear=date.split("-")[1];
    }
  

  name=name.trim();
  birthYear=birthYear==undefined?"":birthYear.trim();
  deathYear=deathYear==undefined?"":deathYear.trim();
  country=country==undefined?"":country.trim();
  impact=impact==undefined?"":impact.trim();

return {name,birthYear,deathYear,country,impact} 
}
// Fatima Al-Fihri (c. 800-880), Morocco: Fatima Al-Fihri is credited with founding the world's oldest continually operating university, the University of Al-Qarawiyyin in Fez, Morocco. She also made significant contributions to the field of Islamic studies.
function fourteenList(elem){
    
    let  [info,impact]=elem.split(":");
  [name,dateAndCounry]=info.split("(");// name (127,county)
  date=dateAndCounry?.split(",")[0]; //1954), USA
      let birthYear,deathYear;
    if(date){
        if(date.indexOf("-")>-1){
            birthYear=date.split("-")[0];
            deathYear=date.split("-")[1];

        }
       if(birthYear?.indexOf(")")>-1){
        birthYear=birthYear.replace(")","");
       }
       if(deathYear?.indexOf(")")>-1){
        deathYear=deathYear.replace(")","");
       }
   }
  let country=dateAndCounry?.split(",")[1];
  

  name=name.trim();
  birthYear=birthYear==undefined?"":birthYear.trim();
  deathYear=deathYear==undefined?"":deathYear.trim();
  country=country==undefined?"":country.trim();
  impact=impact==undefined?"":impact.trim();

return {name,birthYear,deathYear,country,impact} 
}
//Amina Bint al-Huda al-Suwaidi (1892-1960), Iraq. Renowned chemist who studied the properties of Arabian perfumes.
function fiftenList(elem){
    
    let  [info,impact]=elem.split(".");
  [name,dateAndCounry]=info.split("(");// name (127,county)
  date=dateAndCounry?.split(",")[0]; //1954), USA
      let birthYear,deathYear;
    if(date){
        if(date.indexOf("-")>-1){
            birthYear=date.split("-")[0];
            deathYear=date.split("-")[1];

        }
       if(birthYear?.indexOf(")")>-1){
        birthYear=birthYear.replace(")","");
       }
       if(deathYear?.indexOf(")")>-1){
        deathYear=deathYear.replace(")","");
       }
   }
  let country=dateAndCounry?.split(",")[1];
  

  name=name.trim();
  birthYear=birthYear==undefined?"":birthYear.trim();
  deathYear=deathYear==undefined?"":deathYear.trim();
  country=country==undefined?"":country.trim();
  impact=impact==undefined?"":impact.trim();

return {name,birthYear,deathYear,country,impact} 
}

// Huda Sha'arawi (1879-1947): Founder of the Egyptian Feminist Union and the first women's magazine in Egypt, "L'Egyptienne." She was a leading figure in the Egyptian women's rights movement
function sixteenList(elem){
    
    let  [info,impact]=elem.split(":");
  [name,date]=info.split("(");
  console.log(date);
      let birthYear,deathYear;
    if(date){
        birthYear=date.split("-")[0];
        deathYear=date.split("-")[1];
        if(birthYear?.indexOf("(")>-1){
            birthYear=birthYear.replace("(","")
        }
        if(deathYear?.indexOf(")")>-1){
            deathYear=deathYear.replace(")","")
        }
        if(deathYear?.indexOf("(")>-1){
            deathYear=deathYear.replace("(","")
        }
        if(birthYear?.indexOf(")")>-1){
            birthYear=birthYear.replace(")","")
        }
   }
  let country="Egypt";
  

  name=name.trim();
  birthYear=birthYear==undefined?"":birthYear.trim();
  deathYear=deathYear==undefined?"":deathYear.trim();
  country=country==undefined?"":country.trim();
  impact=impact==undefined?"":impact.trim();

return {name,birthYear,deathYear,country,impact} 
}

// Leila Khaled (1944- ) - Palestine - Political activist and member of the Popular Front for the Liberation of Palestine.
function seventeenList(elem){
   
    
    let [name,info]=elem.split("(")

    let [date,country,impact]=info.split(" - ");
    if(date){
        if(date.indexOf("-")>-1){
           birthYear= date.split("-")[0];
           deathYear= date.split("-")[1];
        }
        if(birthYear?.indexOf("(")>-1){
            birthYear=birthYear.replace("(","")
        }
        if(deathYear?.indexOf(")")>-1){
            deathYear=deathYear.replace(")","")
        }
        if(deathYear?.indexOf("(")>-1){
            deathYear=deathYear.replace("(","")
        }
        if(birthYear?.indexOf(")")>-1){
            birthYear=birthYear.replace(")","")
        }
    }
    name=name.trim();
    birthYear=birthYear==undefined?"":birthYear.trim();
    deathYear=deathYear==undefined?"":deathYear.trim();
    country=country==undefined?"":country.trim();
    impact=impact==undefined?"":impact.trim();

 return {name,birthYear,deathYear,country,impact} 
}



data=array.map((elem,i)=>{
    if(i<228)
        return firstList(elem);
    else if(i==228)return   {
        "name": "Dr. Aisha Al-Mannai",
        "birthYear": "1960",
        "deathYear": "",
        "country": "Qatar",
        "impact": "A pioneer in the field of environmentalism in Qatar, Dr. Al-Mannai is the founder and chairperson of the Qatar Sustainability Network, a non-profit organization dedicated to promoting sustainable development and environmental stewardship."
    }
    if(i>=229&&i<247){
        return secondList(elem);
    }
    if(i>=247&&i<264){
        return thirdList(elem);
    }if(i>=264&&i<296){
        return secondList(elem);
    }
    if(i>=296&&i<306){
        return fourthList(elem);
    }if(i>=296&&i<316){
        return secondList(elem);
    }
    if(i>=316&&i<338){
        return fifthList(elem);
    }
    if(i>=338&&i<353){
        return sixList(elem);
    }
    if(i>=353&&i<374){
        return sevenList(elem);
    }
    if(i>=374&&i<391){
        return firstList(elem);
    }
    if(i>=391&&i<412){
        return secondList(elem);
    }if(i>=412&&i<432){
        return firstList(elem);
    }
    if(i>=432&&i<442){
        return nineList(elem);
    }
    if(i>=442&&i<452){
        return tenList(elem);
    }
    if(i>=452&&i<475){
        return sevenList(elem);
    }
    if(i>=475&&i<485){
        return elevenList(elem);
    }
    if(i>=485&&i<501){
        return firstList(elem);
    }
    if(i>=501&&i<525){
        return twelveList(elem);
    }
   
    if(i>=525&&i<536){
        return thirteenList(elem);
    }
    if(i>=536&&i<546){
        return fourteenList(elem);
    }
    if(i>=546&&i<567){
        return sevenList(elem);
    }
    if(i>=567&&i<580){
        return secondList(elem);
    }
    if(i>=580&&i<617){
        return fiftenList(elem);
    }
    if(i>=617&&i<694){
        return sevenList(elem);
    }
    if(i>=694&&i<702){
        return sevenList(elem);
    }
    if(i>=702&&i<715){
        return sevenList(elem);
    }
    if(i>=715&&i<738){
        return seventeenList(elem);
    }

   
    
    
    else{
        return {};
    }
 })











 cleaneddata=data.reduce((acc,elem)=>{
    let index=acc.findIndex(el=>el.name==elem.name);
        if(!elem.name||!elem.impact){
            return acc
        }
        if(index>=0){
            
    
            let el=acc[index]
            if(el.birthYear==undefined&&elem.birthYear!=undefined||el.country==undefined&&elem.country!=undefined){
    
                acc[index]=elem;
            }
        }else{
    acc.push(elem)
            
        }
    
    
    
    return acc
        
    },[]);

    cleaneddata=cleaneddata.filter(elem=>elem.impact)
    console.log(cleaneddata)




//women 
    array=Array.from(document.querySelectorAll("li")).slice(9).map(elem=>elem.textContent).filter(elem=>elem.slice(-1)==".").map(str=> str.replace(" - "," : "))


data=array.map((elem,i)=>{

    [info,impact]=elem.split(":");
     [name,metaInfo]=info.split("(");
     date=metaInfo?.split(",")[0];
         let birthYear,deathYear;
 
     if(date){
             [birthYear,deathYear]=date.split("-");
             if(deathYear?.indexOf(")")>-1){
                deathYear=deathYear.replace(")","");}
 
     }
     let country=metaInfo?.split(",")[1];
     if(country?.indexOf(")")>-1){
      country=country.replace(")","");
     }
     name=name.trim();
     birthYear=birthYear?.trim();
     deathYear=deathYear?.trim();
     country=country?.trim();
     impact=impact.trim()

  return {name:name==""?undefined:name,birthYear:birthYear==""?undefined:birthYear,deathYear:deathYear==""?undefined:deathYear,country:country==""?undefined:country,impact:impact==""?undefined:impact}    
 })





 cleaneddata=data.reduce((acc,elem)=>{
    let index=acc.findIndex(el=>el.name==elem.name);
    
        if(index>=0){
            
    
            let el=acc[index]
            if(el.birthYear==undefined&&elem.birthYear!=undefined||el.country==undefined&&elem.country!=undefined){
    
                acc[index]=elem;
            }
        }else{
    acc.push(elem)
            
        }
    
    
    
    return acc
        
    },[]);
cleaneddata.forEach(element => {
    if(element.country==undefined)element.country="china";
});
    console.log(cleaneddata);
// RightSide.jsx
import React,{useState,useContext} from "react";
import { Product } from "./Context/ProductContext";
import Button from "./Button";
import SuggestImage from "./SuggestImage";

const getBase64=(file)=>new Promise((res,rej)=>{
 const r=new FileReader();
 r.readAsDataURL(file);
 r.onload=()=>res(r.result.split(",")[1]);
 r.onerror=rej;
});

export default function RightSide(){
 const {MainData}=useContext(Product);
 const [image,setImage]=useState({file:null,previewUrl:null});
 const [recommendations,setRecommendations]=useState([]);
 const [status,setStatus]=useState({loading:false,error:null});

 const handleImageChange=(e)=>{
   const f=e.target.files?.[0];
   if(!f)return;
   setImage({file:f,previewUrl:URL.createObjectURL(f)});
   setRecommendations([]);
   setStatus({loading:false,error:null});
 };



 const fetchAiSuggestions=async()=>{
   if(!image.file){
     setStatus({loading:false,error:"Upload an image first"});
     return;
   }
   setStatus({loading:true,error:null});
   try{
     const apiKey= "YOUR_API_KEY";

     console.log("1. Function Start");

     const base64=await getBase64(image.file);

     console.log("2. Base64 Done");
     const inventory=MainData.map(({id,title,category})=>({id,title,category}));

     const response=await fetch("https://api.groq.com/openai/v1/chat/completions",{

    
       method:"POST",
       headers:{
         "Content-Type":"application/json",
         Authorization:`Bearer ${APi}`
       },
       body:JSON.stringify({
         model:"meta-llama/llama-4-scout-17b-16e-instruct",
         temperature:0.2,
         messages:[{
           role:"user",
           content:[
             {
               type:"text",
               text:`You are a fashion stylist.
Inventory:
${JSON.stringify(inventory)}

Analyze the uploaded outfit and return ONLY a JSON array of exactly 4 matching product ids.
Example:
[1,5,8,10]`
             },
             {
               type:"image_url",
               image_url:{
                 url:`data:${image.file.type};base64,${base64}`
               }
             }
           ]
         }]
       })
     });

       console.log("4. Response Received");

     const data=await response.json();

     console.log("5. Data:", data);

     console.log(data);
console.log(content);
console.log(ids);
console.log(MainData);


     if(!response.ok){
       throw new Error(data.error?.message||"API Error");
     }

     const content=data.choices[0].message.content;
     const ids=JSON.parse(content);

     setRecommendations(
       MainData.filter(p=>ids.includes(p.id))
     );
   }catch(err){
     console.error(err);
     setStatus({loading:false,error:err.message});
     return;
   }
   setStatus(s=>({...s,loading:false}));
 };

 return(
<div className="right-side">
<div className="upload-image">
<p>Your AI Style</p>
<label htmlFor="file" style={{cursor:"pointer"}}>
<input id="file" type="file" hidden accept="image/*" onChange={handleImageChange}/>
Upload Your Outfit Photo
</label>

<div className="demo-img">
{image.previewUrl?
<img src={image.previewUrl} alt="preview" style={{width:"100%",borderRadius:8}}/>:
<div>No image selected</div>}
</div>
</div>

<div className="suggest">
<div onClick={fetchAiSuggestions} style={{pointerEvents:status.loading?"none":"auto"}}>
<Button text={status.loading?"Analyzing...":"Suggest Matching Items"} size="14.5px"/>
</div>

{status.error&&<p style={{color:"red"}}>{status.error}</p>}

<div className="suggest-img">
{recommendations.length?
recommendations.map(item=><SuggestImage key={item.id} image={item.image} title={item.title}/>)
:<p>{status.loading?"Finding matches...":"Upload image and click button."}</p>}
</div>
</div>
</div>
 );
}

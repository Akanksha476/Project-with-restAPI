const express = require("express");
 const users = require("./MOCK_DATA.json");
 const app = express();
 const PORT = 5001;
 
 //HTML DOCUMENT
 app.get("/users", (req, res) => {
     const html = `
       <ul>
           ${users.map((user) => `<li>${user.id}</li>`).join("")}
       </ul>`;
     return res.send(html);
   });
   app.get("/api/users/:id",(req,res)=>{
    const id = Number(req.params.id);
    const user = users.find((user)=>user.id === id);
    return res.json(user);
});

 //REST API
 app.get("/api/users", (req, res) => {
   res.json(users);
 });
  app.post("/api/users",(req,res)=>{
    return res.json({statusbar:"pending"});

  })
  app.patch("/api/users/:id",(req,res)=>{
    return res.json({statusbar:"pending"});

  })
  app.delete("/api/users/:id",(req,res)=>{
    return res.json({statusbar:"pending"});

  })
  app.post("/api/users",(req,res)=>{
    const body =res.body;
    users.push({...body,id : users.lenght+1});
    FileSystem.writeFile('./data.json',JSON.stringify(users),(err,data)=>{
      res.json({status:"SENT"});

    })
  })
  
 app.listen(PORT, () => {
   console.log(`Server is Running on PORT: ${PORT}`);
 });
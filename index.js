// implement your API here
const express = require("express");
const db = require("./data/db.js");
const cors = require("cors");

const server = express();

server.use(express.json());
server.use(cors());

server.get("/api/users", (req,res)=>{
    db.find()
        .then(data=>{
            res.status(200).json(data);
        })
        .catch(error=>{
            console.log("error on GET /api/users", error);
            res
            .status(500)
            .json({ error: "The users information could not be retrieved."});
        });
});

server.post("/api/users", (req,res)=>{
    const user = req.body;
    if(user.name === "" || user.bio === ""){
        res.status(400).json({ errorMessage: "Please provide name and bio for the user." });
    }else{
        db.insert(req.body)
        .then(data=>{
            res.status(201).json({...user, ...data});
        })
        .catch(error=>{
            console.log("error on POST /api/users", error);
            res
            .status(500)
            .json({ error: "Error adding new user"});
        });
    }
    
});

server.get("/api/users/:id", (req,res)=>{
    db.findById(req.params.id)
        .then(data=>{
            if(data.id){
                res.status(200).json(data);
            }
            
        })
        .catch(error=>{
            console.log(`error on GET /api/users/${req.params.id}`, error);
            res
            .status(404)
            .json({ message: "The user with the specified ID does not exist." });
        });
});

server.delete("/api/users/:id", (req,res)=>{
    db.remove(req.params.id)
        .then(data=>{
            if(data === 1){
                res.status(200).json({ message:"User was deleted successfully"});
            }else if (data === 0){
                res
                .status(404)
                .json({ message: "The user with the specified ID does not exist." }); 
            }
            
        });
});

server.put("/api/users/:id", (req,res)=>{
    const user = req.body;
    if(user.name === "" || user.bio === ""){
        res.status(400).json({ errorMessage: "Please provide name and bio for the user." });
    }else{
        db.update(req.params.id, user)
            .then(data=>{
                if(data === 1){
                    return db.find()
                    .then(data=>{
                        res.status(200).json(data);
                    })
                }else if (data === 0){
                    res
                    .status(404)
                    .json({ message: "The user with the specified ID does not exist." }); 
                }
                
            })
            .catch(error=>{
                console.log("error on PUT /api/users", error);
                res
                .status(500)
                .json({ error: "The user information could not be modified."});
            });
    }
});


const port = 4000;
server.listen(port, ()=>{
    console.log(`\n ** API running on port ${port} **\n`)
})
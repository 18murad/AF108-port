import express from "express";
import fs from "fs";
import { v4 as uuidv4 } from 'uuid';

const app = express();
const port= 3000;

app.get("/", (req, res) => {
    res.send("Af108")
});

let { users } = JSON.parse(fs.readFileSync("db.json"));

app.get("/api/users", (req, res) => {
    try {
        res.status(200).send({message: "success", data: users})
    } catch (error) {
        res.status(500).send({message: "Internal Server error"})
    }
});

app.get("/api/users/:id", (req, res) => {
    let {id} = req.params;
    try {
        const findUser = users.find((user) => user.id == id);
    
        if (!findUser) {
            res.status(404).send({message:  "user not found"});
        }
        res.status(200).send({message: "success", data: findUser});
    } catch (error) {
        res.status(500).send({message: "Internal Server error"})
        
    }
});

app.post("/api/users", (req, res) => {
    console.log("sdf");
    
    try {
        const newUser = req.body;

        if (!newUser.name && newUser.age) {
            return res.status(404).send({message: "Bad request"})
        }

        users.push({ id: uuidv4(), ...newUser});

        fs.writeFileSync("db.json", JSON.stringify({ users }));

        res.status(201).send({message: "User create", data: newUser});
    } catch (error) {
        res.status(500).send({message: "Internal Server error"});
        
    }
});

app.delete("/api/users/:id", (req, res) => {
let { id } = req.params;

    try {
        let userIndex = users.findIndex((user) => user.id == id);

        if (userIndex == -1) {
            res.status(404).send({message: "User not Found"});
        }

        users.splice(userIndex, 1);

        fs.writeFileSync("db.json", JSON.stringify({users}));

        res.status(200).send({message: "user Delete successfully"});
    } catch (error) {
        res.status(500).send({message: "Internal Server error"});
        
    }
});

app.put("/api/users/;id", (req, res) => {
    let { id } = req.params;
    try {
        
        let updatedUser = req.body;

        let userIndex = users.findIndex((user) => user.id === id);

        if (userIndex === -1) {
            res.status(404).send({message: "User not Found"});
        }

        users[userIndex] = {id, ...updatedUser };
        fs.writeFileSync("db.json", JSON.stringify({ users }));

        res.status(200).send({message: "user Updated successfully", data: updatedUser});
    } catch (error) {
        res.status(500).send({message: "Internal Server error"});
        
    }
});

const patchById = (req, res) => {
    try {
      const { id } = req.params;
  
      const updatedUser = req.body;
      const existUserIndex = users.findIndex(
        (user) => user.id === id
      );
      if (existUserIndex === -1) {
        return res.status(404).send({ message: "user not found" });
      }
      users[existUserIndex] = {
        ...users[existUserIndex],
        ...updatedUser,
      };
      fs.writeFileSync("db.json", JSON.stringify({ users }));
      res
        .status(200)
        .send({
          message: "user updated successfully",
          data: users[existUserIndex],
        });
    } catch (error) {
      res.status(500).send({ message: "Internal server error" });
    }
  };


app.listen(port, () => {
    console.log(`Server is running from ${`http://localhost:${port}/`}`);
});
import express, { Router } from "express";
import Person from "../models/personSchema.js";


const router = express.Router();


// Adding person route
router.post("/", async (req, res) => {
  try {

    const data = req.body;
    const newPerson = new Person(data);
    await newPerson.save();
    res.status(201).json({ message: "Data saved successfully", person: newPerson });

  } catch (error) {
    console.error("Error saving data:", error);
      res.status(500).json({ message: "Error in adding person" , error: error.message});
  }
});

// get all person route
router.get("/", async (req, res) => {
  try {
    const people = await Person.find();
    res.status(200).json(people);

  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).json({ message: "Error fetching data" , error: error.message});
  }
});

// get person by work route
router.get("/:work", async (req, res) => {
  try {
    
    const workType = req.params.work;
    if(workType === "chef" || workType === "waiter" || workType === "manager"){
      const response  = await Person.find({work: workType});
      return res.status(200).json(response)
    }else{
      return res.status(400).json({ message: "Invalid work type. Must be 'chef', 'waiter', or 'manager'." });
    }


  } catch (error) {
    console.error("Error fetching data:", error);
    return res.status(500).json({ message: "Error fetching data" , error: error.message});
  }
});


// update person details route
router.put("/:id", async (req, res) => {

  try {
    
    const personId = req.params.id;
    const updateData = req.body;
    const updatedPerson = await Person.findByIdAndUpdate(personId, updateData, {
      new: true,
      runValidators: true,
    })

    if(!updatedPerson){
      return res.status(404).json({ message: "Person not found with the provided ID." });
    }

    return res.status(200).json({ message: "Person details updated successfully", person: updatedPerson });

  } catch (error) {
    console.error("Error updating data:", error);
    return res.status(500).json({ message: "Error updating data" , error: error.message});
  }


});


// delete person route
router.delete("/:id", async (req, res) => {
  try {
    
    const personId = req.params.id;
    const deletedPerson = await Person.findByIdAndDelete(personId);
    if(!deletedPerson){
      return res.status(404).json({ message: "Person not found with the provided ID." });
    }

    return res.status(200).json({ message: "Person deleted successfully", person: deletedPerson });

  } catch (error) {
    console.error("Error deleting data:", error);
    return res.status(500).json({ message: "Error deleting data" , error: error.message});
  }
});

export default router;
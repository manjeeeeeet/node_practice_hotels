import express from "express";
import menuItem from "../models/menuItem.js";

const router = express.Router();

// Add menu item route
router.post("/", async (req, res) => {
  try {
    
    const data = req.body;
    const newMenuItem = new menuItem(data);
    await newMenuItem.save();
    res.status(201).json({ message: "Menu item added successfully" , menuItem: newMenuItem });

  } catch (error) {
    console.error("Error adding menu item:", error);
    res.status(500).json({ message: "Error adding menu item" , error: error.message});
  }
}
);


// get all menu 

router.get("/", async (req, res) => {
  try {
    const items = await menuItem.find();
    res.status(200).json(items);
  } catch (error) {
    console.error("Error fetching menu items:", error);
    res.status(500).json({ message: "Error fetching menu items" , error: error.message});
  }
});

// get menu item by taste

router.get("/:taste" , async(req,res)=>{
  const taste = req.params.taste;
  if(taste == 'sweet' || taste == 'spicy' || taste == 'sour' || taste == 'savory' || taste == 'bitter'){
    try{
      const items = await menuItem.find({taste: taste});
      res.status(200).json(items);
    }catch(error){
      console.error("Error fetching menu items by taste:", error);
      res.status(500).json({ message: "Error fetching menu items by taste" , error: error.message});
    }
  }else{
    return res.status(400).json({ message: "Invalid taste parameter. Must be one of: sweet, spicy, sour, savory, bitter" });
  }
});


export default router;





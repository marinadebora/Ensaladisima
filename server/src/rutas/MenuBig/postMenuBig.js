const MenuBig= require("../../modelos/MenuBig");

const postMenuBig= async (req,res)=>{
    const {name,price,image,base,protein,complement,sauce,topping}=req.body;
    try {
        const buscar= await MenuBig.find({name});
        console.log(buscar)
        if(buscar[0]) res.status(404).send("Ya contamos con ese menu");
        else{
              const crear= await MenuBig.create({name,price,image,base,protein,complement,sauce,topping});
              res.send(crear);
        }
      
    } catch (error) {
        console.error(error);
    }
};


module.exports={postMenuBig};
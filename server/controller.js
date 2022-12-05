const cars=['BMW', 'Honda','Toyota','Audi']
module.exports = {

    getCompliment: (req, res) => {
        const compliments = ["Gee, you're a smart cookie!", "Cool shirt!", "Your Javascript skills are stellar."];
      
        // choose random compliment
        let randomIndex = Math.floor(Math.random() * compliments.length);
        let randomCompliment = compliments[randomIndex];
      
        res.status(200).send(randomCompliment);
    },
    getFortune:(req,res)=>{
        const fortunes=['you win', 'you are beatiful', 'you will get a job', 'A golden egg of opportunity falls into your lap this month.', 'A person of words and not deeds is like a garden full of weeds', 'A small donation is call for. It’s the right thing to do.', 'Accept something that you cannot change, and you will feel better.','Carve your name on your heart and not on marble.']
        let randomIndex=Math.floor(Math.random()*fortunes.length)
        let randomFortune=fortunes[randomIndex]
        
        res.status(200).send(randomFortune)
    },
    getCars:(req,res)=>{
        res.status(200).send(cars)
    },

    addCars:(req,res)=>{
        let {item}=req.body
        cars.push(item)
        res.status(200).send(cars)


    },
    deleteCars:(req,res)=>{
        let index=req.params.id
        cars.splice(index,1)
        res.status(200).send(cars)
    },
    editCars:(req,res)=>{
        let index=req.params.id
        let{item}=req.body

        cars.splice(index, 1, item)
        console.log(cars)
        res.status(200).send(cars)
       
    }

}
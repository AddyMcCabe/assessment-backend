const fortunes = ['There is money in your future', 'Youre ability for accomplishment will follow with success', 'You will marry your lover', 'That bug bite from last week will bring super powers', 'Nothing can be seen about your future'];


module.exports = {

    getCompliment: (req, res) => {
        const compliments = ["Gee, you're a smart cookie!", "Cool shirt!", "Your Javascript skills are stellar."];
      
        // choose random compliment
        let randomIndex = Math.floor(Math.random() * compliments.length);
        let randomCompliment = compliments[randomIndex];
      
        res.status(200).send(randomCompliment);
    },

    getFortune: (req, res) => {

        let randomIndex = Math.floor(Math.random() * fortunes.length);
        let randomFortune = fortunes[randomIndex];

        res.status(200).send(randomFortune);
    },

    addFortune: (req, res) => {
        const {newFortune} = req.body

        fortunes.push(newFortune);
        res.status(200).send('fortune added');
    },

    deleteFortune: (req, res) => {
        const {id} = req.params

        fortunes.splice(id, 1);
        res.status(200).send('fortune removed');
    }

    



}
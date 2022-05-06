const complimentBtn = document.getElementById("complimentButton")
const fortuneBtn = document.getElementById('fortuneBtn')
const submit = document.getElementById('submitBtn')
 
const getCompliment = () => {
    axios.get("http://localhost:4000/api/compliment/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};

const getFortune = () => {
    axios.get('http://localhost:4000/api/fortune/')
    .then(res => {
        const data = res.data;
        alert(data);
    })
};

const submitHandler = () => {
    axios.post('http://localhost:4000/api/encouragement')
    .then(res => {
        alert(res.data)
    })
}


fortuneBtn.addEventListener('click', getFortune)
complimentBtn.addEventListener('click', getCompliment)
submit.addEventListener('click', submitHandler)

const complimentBtn = document.getElementById("complimentButton")
const fortuneBtn = document.getElementById('fortune-button')
const newFortuneBtn = document.getElementById('new-fortune-button')
const newFortuneInput = document.getElementById('new-fortune-input')
const deleteBtn = document.getElementById('delete-button')
const deleteInput = document.getElementById('delete-input')
 
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

const addFortune = () => {
    axios.post('http://localhost:4000/api/fortune/', {newFortune: newFortuneInput.value})
    .then(res => {
        alert(res.data)
        newFortuneInput.value=''
    })
};

const deleteFortune = () => {
    axios.delete(`http://localhost:4000/api/fortune/${deleteInput.value}`)
    .then(res => {
        alert(res.data);
        deleteInput.value = ''
    })
}




fortuneBtn.addEventListener('click', getFortune)
complimentBtn.addEventListener('click', getCompliment)
newFortuneBtn.addEventListener('click', addFortune)
deleteBtn.addEventListener('click', deleteFortune )


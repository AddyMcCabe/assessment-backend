const complimentBtn = document.getElementById("complimentButton")
const fortuneBtn = document.getElementById('fortune-button')
const newFortuneBtn = document.getElementById('new-fortune-button')
const newFortuneInput = document.getElementById('new-fortune-input')
const deleteBtn = document.getElementById('delete-button')
const deleteInput = document.getElementById('delete-input')
const getRingsBtn = document.getElementById('get-rings-button')
const addRingBtn = document.getElementById('add-ring-button')
const addRingInput = document.getElementById('new-ring-input')
const deleteRingBtn = document.getElementById('delete-ring-button')
const deleteRingInput = document.getElementById('delete-ring-input')
 
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
    .catch(err => {
        alert('no fortune to delete')
    })
}

const getRings = () => {
    axios.get('http://localhost:4000/api/rings/')
    .then(res => {
    let display = document.createElement('h2')
    display.textContent = res.data
    document.getElementById('ring-display').appendChild(display)
    })
}

const addRing = () => {
    axios.post('http://localhost:4000/api/rings/', {newRing: addRingInput.value})
    .then(res => {
        alert(res.data)
        addRingInput.value = ''

    })

}

const deleteRing = () => {
    axios.delete(`http://localhost:4000/api/rings/0`)
    .then(res => {
        alert(res.data);
        deleteInput.value = ''
    })
    .catch(err => {
        alert('no rings left to delete')
    })
}






fortuneBtn.addEventListener('click', getFortune)
complimentBtn.addEventListener('click', getCompliment)
newFortuneBtn.addEventListener('click', addFortune)
getRingsBtn.addEventListener('click', getRings)
addRingBtn.addEventListener('click', addRing)
deleteBtn.addEventListener('click', deleteFortune)
deleteRingBtn.addEventListener('click', deleteRing)


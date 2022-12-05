const baseURL='http://localhost:4000'

//step 1: Select html element
const complimentBtn = document.getElementById("complimentButton")
const fortuneBtn= document.getElementById('fortuneButton')

const carsBtn=document.getElementById('getCars')
const carsRack=document.getElementById('displayCars')

const addForm= document.getElementById('addForm')
const addInput=document.getElementById('addInput')

const deleteForm=document.getElementById('deleteForm')
const deleteInput=document.getElementById('deleteInput')

const editForm=document.getElementById('editForm')
const editIndex=document.getElementById('editIndex')
const editInput=document.getElementById('editInput')




//Step 2: Write function
const getCompliment = () => {
    axios.get("http://localhost:4000/api/compliment/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};
const getFortune=()=>{
    axios.get("http://localhost:4000/api/fortune/")
    .then(response=>{
        const fortune=response.data;
        alert(fortune)
    })

}
const getCars=()=>{
    axios.get(`${baseURL}/api/cars`)
    .then((res)=>{
        console.log(res.data)
        const cars=res.data
        carsRack.innerHTML=''

        for(let i=0; i<cars.length; i++){
            let newCar=document.createElement('li')
            newCar.textContent=cars[i]
            carsRack.appendChild(newCar)
        }

    })
    .catch((err)=>{
        console.log(err)
    })

}
const addNewCars=(event)=>{
    event.preventDefault()

    let bodyObj={
        item: addInput.value
    }

    axios.post(`${baseURL}/api/addCars`,bodyObj)
    .then((res)=>{
        console.log(res.data)
        const cars=res.data
        carsRack.innerHTML=''

        for(let i=0; i<cars.length; i++){
            let newCar=document.createElement('li')
            newCar.textContent=cars[i]
            carsRack.appendChild(newCar)
        }
        addInput.value=''
    })
    .catch((err)=>{
        console.log(err)
    })



}
const deleteCars=(event)=>{
    event.preventDefault()

    axios.delete(`${baseURL}/api/deleteCars/${deleteInput.value}`)
    .then((res)=>{
        console.log(res.data)
        const cars=res.data
        carsRack.innerHTML=''

        for(let i=0; i<cars.length; i++){
            let newCar=document.createElement('li')
            newCar.textContent=cars[i]
            carsRack.appendChild(newCar)
        }
        deleteInput.value=''
    })
    .catch((err)=>{
        console.log(err)
    })


}

const editItem=(e)=>{
    e.preventDefault()

    let bodyObj={
        item: editInput.value

    }
    axios.put(`${baseURL}/api/editCars/${editIndex.value}`,bodyObj)
    .then((res)=>{
        console.log(res.data)
        const cars=res.data
        carsRack.innerHTML=''

        for(let i=0; i<cars.length; i++){
            let newCar=document.createElement('li')
            newCar.textContent=cars[i]
            carsRack.appendChild(newCar)
        }
        editInput.value=''
        editIndex.value=''
    })
    .catch((err)=>{
        console.log(err)
    })


}



//Step 3: comnbine them with event Listener 
complimentBtn.addEventListener('click', getCompliment)
fortuneBtn.addEventListener('click', getFortune)
carsBtn.addEventListener('click',getCars)
addForm.addEventListener('submit',addNewCars)
deleteForm.addEventListener('submit',deleteCars)
editForm.addEventListener('submit', editItem)
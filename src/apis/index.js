import axios from "axios";



const fakeStore= axios.create({
    baseURL: "https://fakestoreapi.com",
    timeout:6000,
    headers:{
        name: "eCommerce"
    }
})

export{
    fakeStore
}
import { fakeStore } from "../apis";
import END_POINTS from "../apis/endpoints"
import axios from "axios";



// using axios

export const getCategories=()=>{
    //api call
    return new Promise((resolve,reject)=>{

        
        axios.get(END_POINTS.get_categories)
            .then(({data})=>{
                const categories = data.map((i)=>({id:i , label:i.toUpperCase()}))
                resolve(categories)
            })
            .catch((err)=>{
                console.log(err)
                reject(err)
            })
    })

    
}




export const getProducts=()=>{
    const filters = new URLSearchParams(location.search)
    const sortBy = filters.get('sortBy')
    return new Promise((resolve,reject)=>{

        
        fakeStore.get(END_POINTS.get_products,{
            params:{
                sort: sortBy,
            },
        })         
            .then(({data})=>{
               // console.log(data)
            resolve({data});
            })
            .catch((err)=>{
                if(err&&err.reponse){
                    const status =err.reponse.status;
                    console.log(status)
                }
                
                reject(err)
            })
    })
}


export const getFilteredProducts = ()=>{
    const filters = new URLSearchParams(location.search)
    const category = filters.get('category')||'';
    const sortBy = filters.get('sortBy')
    const url = END_POINTS.get_category_products + category;
    return axios.get(url,{
        params:{
            sort: sortBy,
        },
    })
}

//********* using Fetch function **************

// export const getCategories=()=>{
//     //api call
//     return new Promise((resolve,reject)=>{

        
//         fetch(END_POINTS.get_categories)
//             .then(res=>res.json())
//             .then((data)=>{
//                 const categories = data.map((i)=>({id:i,label:i.toUpperCase()}))
//                 resolve(categories)
//             })
//             .catch((err)=>{
//                 console.log(err)
//                 reject(err)
//             })
//     })

    
// }




// export const getProducts=()=>{
//     return new Promise((resolve,reject)=>{

        
//         fetch(END_POINTS.get_products)
//             .then(res=>res.json())
//             .then((data)=>{
//                resolve(data);
//             })
//             .catch((err)=>{
//                 console.log(err)
//                 reject(err)
//             })
//     })



// }
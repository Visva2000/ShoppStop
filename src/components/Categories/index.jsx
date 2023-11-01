import React, { useEffect, useState } from "react";
import Chip from '@mui/material/Chip';
import { Skeleton, Stack } from "@mui/material";
import { getCategories } from "../../actions/homeActions";
import { useSearchParams } from "react-router-dom";






const Categories = () => {

    const [categories,setCategories]=useState([]);
    const[apiStatus,setApiStatus] = useState('');
    const[param,setParams] = useSearchParams();

    const fetchCategories= async ()=>{
        setApiStatus("loading")

        try{
            const data= await getCategories()
            setCategories(data|| []); 
            setApiStatus("SUCCESS")
        }
        catch(e){
            console.log(e);
            setApiStatus("error")


        } 
    }

    // const fetchCategories=()=>{
    //     setApiStatus("loading")
    //     getCategories().then((data)=>{
    //         setCategories(data|| []); 
    //         setApiStatus("SUCCESS")
    //     }).catch((err)=>{
    //         setApiStatus("error")

    //     }); 
    // }

    useEffect(()=>{
        fetchCategories();
        

    },[])
    const showLoader = apiStatus==='loading';
    
    const loaderArray= new Array(4).fill(0);

    const onHandFilter = (id) => {
        let selectedCategory = param.get("category");

        if(selectedCategory===(id)){
            param.delete("category");
        } else{
            param.set("category",id);

        }
        setParams(param);
    }
   //mt={1} spacing={2} gap={1}  flexWrap={"wrap"}
    return (
        <Stack direction={"row"} gap={2} sx={{ flexGrow: 1, display: { xs: 'block', sm: 'flex' }}}   >
            

            {
               Array.isArray(categories)&&categories.map(({ id, label }) => (
                    <Chip   label={label} key={id} size="medium" variant={param.get("category")===(id)?"filled":"outlined"} onClick={() => onHandFilter(id)} />

                ))
            }
            {
                showLoader&& loaderArray.map((_, index)=> <Skeleton key={index} sx={{borderRadius:20}} variant="rectangular" width={117} height={32} />)
            }
        </Stack>

    );
};
export default Categories;
import React,{useState,useEffect} from 'react';

const PostmanApi = () =>{
    const [items,setItems] = useState([]);
    useEffect(()=>{
        fetch('https://api.postman.com/collections/20945399-f20f2cbe-0079-4d4e-932d-905793f9de5b?access_key=PMAT-01GJHM4C73YVP47S18YA6SG275')
        .then(response=>response.json())
        .then(data=>{
          console.log(data)
        })
    })

    return(
        <div className='container'>
            <h1 className='text-dark'>Postman API Fetch</h1>
        </div>
    )
}
export default PostmanApi;
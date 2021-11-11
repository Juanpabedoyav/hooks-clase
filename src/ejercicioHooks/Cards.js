import React, { useEffect, useState } from 'react'

const Cards = ({categoria}) => {


const [images, setImages] = useState([]);

useEffect(()=>{
imgGif().then(imgData => setImages(imgData))
// setImages(imgGif())
},[])



const imgGif= async ()=>{
    const url='https://api.giphy.com/v1/gifs/search?q=pokemon&limit=10&api_key=5qulVmQyTA9RQqTtRs2C13JnP1dXc97s'
    const res= await fetch(url);
    const {data} = await res.json();
    // console.log(data);

    const imgData= data.map((img)=>{
        return {
            id: img.id,
            title:img.title,
            url: img.images?.downsized_medium.url

        }
    })
    return imgData

}

    return (
        <div>
          <h1>{categoria}</h1> 
          <ol>
            {
                images.map((img)=>(
                  
                  <li key={img.id} >
                    <h3>{img.title}</h3>
                    <img src={img.url} alt=''/>
                    </li>

                ))



            }      
              
        </ol> 
        </div>
    )
}

export default Cards

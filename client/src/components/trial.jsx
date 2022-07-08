import React from 'react'
import { useEffect } from 'react'

function Trial() {

    const getPopulatedData = async()=>{


        const res = await fetch('/getAllPopulatedData', {
            method: "GET",
            headers: {
                Accept: "application/json",
                "Content-type": "application/json"
            },
            credentials: "include"
        });
    }

    useEffect(()=>{
        getPopulatedData();
    })
  return (


    <>
    <h1>hello i am trial</h1>
    
    </>
  )
}

export default Trial
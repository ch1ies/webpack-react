import React from 'react'
import What from './components/what'
import Img from "./assets/xiaoyezi.png"
export default function test() {
    console.log(Img,'img---------s')
    return (
    
        <>
            <h1>leooo</h1>
            <div><img style={{ width:'50px'}} src={Img}/></div>
            <What></What>
        </>
    )
}

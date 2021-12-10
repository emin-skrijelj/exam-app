import {useEffect, useState} from "react"
import Api from "./fishApi"
import './fish.css'

function Fish(props){
    const [fish,setFishes] = useState([])
    useEffect(()=>{
        Api.get().then((rezultat)=>{
            setFishes(rezultat.data.data)
            console.log(rezultat)
        })
    },[])
    return (
            fish.map((value) =>  {
                return (
                <div class="all">
                <div class="card">
                    <a href={value.url} target="_blank" >
                        <div class="content">
                            <h4>{value.State}</h4>
                            <p>ID State:{value["ID State"]}</p>
                            <p>ID Year:{value["ID Year"]}</p>
                            <p>Population:{value.Population}</p>
                            <center><p>Slug State: {value["Slug State"]}</p></center>

                        </div>
                    </a>

                    </div>
                </div>)})
)
}

export default Fish;
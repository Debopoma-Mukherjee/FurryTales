import { Link } from "react-router-dom";
import Header from "./Header";
import axios from 'axios';
import { useEffect, useState } from "react";

function Adopt(){

    const [pets,setpets] =  useState([]);

    useEffect(() => {
        const url = 'http://localhost:4000/get-pets';
        axios.get(url)
            .then((res) => {
                console.log(res);
                if(res.data.pets){
                    setpets(res.data.pets);
                }
            })
            .catch((err)=> {
                console.log(err);
                alert('server err')
            })
    })


    return (
        <div>
            <Header/>
            <Link to="/add-pet" > ADD PET </Link>
            <h2>MY PETS: </h2>

            {pets && pets.length>0 &&
            pets.map((item, index) => {
                return(
                    <div className="card m-3">
                        <img src={item.pimage} />
                        <p className="p-2" > {item.pname} | {item.category} </p>
                        <p className="p-2 text-success"> {item.pdesc} </p>
                        <h3 className="text-danger" > {item.price} </h3>
                    </div>
                )
            })}
        </div>

        
    );
}

export default Adopt;
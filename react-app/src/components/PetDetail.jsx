import { useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Header from "./Header";
function PetDetail()
{
    const p=useParams()
    console.log(p.petId)

    const[pet,setPet] = useState(' ');

    useEffect(() => {
      const url = 'http://localhost:4000/get-pet/' + p.petId;
      axios.get(url)
        .then((res) => {
          console.log("API Response:", res.data);
          if(res.data.pet){
            setPet(res.data.pet)
          }
        })
        .catch((err) => {
          console.log("API Error:", err);
          alert('Server error');
        });
    }, []);
    


    return(
      <>

      <Header/>
      <div className="container mt-5">
      <h2 className="mb-4">Pet Details</h2>
      {pet ? (
        <div className="row">
          <div className="col-md-6">
            <img className="img-fluid" src={`http://localhost:4000/${pet.pimage}`} alt="" />
          </div>
          <div className="col-md-6">
            <h5>{pet.pname}</h5>
            <p>{pet.pdesc}</p>
            <p>Category: {pet.category}</p>
            <p className="text-danger">Price: Rs. {pet.price}</p>
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>

      </>
    )
}
export default PetDetail;

import { useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import axios from "axios";
function PetDetail()
{
    const p=useParams()
    console.log(p.petId)
    useEffect(() => {
        const url = 'http://localhost:4000/get-pet/' + p.petId;
        axios.get(url)
          .then((res) => {
            console.log(res);
          })
          .catch((err) => {
            console.log(err);
            alert('server err');
          });
      }, [])
    return(
      <div>hyyu</div>
    )
}
export default PetDetail;
/*import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function PetDetails() {
  const { id } = useParams();
  const [pet, setPet] = useState(null);

  useEffect(() => {
    fetchPetDetails();
  }, [id]);

  const fetchPetDetails = () => {
    const url = `http://localhost:4000/get-pet/${id}`;
    axios.get(url)
      .then((res) => {
        console.log("Pet Details:", res.data);
        setPet(res.data);
      })
      .catch((err) => {
        console.log("API Error:", err);
        alert('Failed to fetch pet details');
      });
  };

  return (
    <div>
      <h2>Pet Details</h2>
      {pet ? (
        <div className="card">
          <img width="300px" height="200px" src={`http://localhost:4000/${pet.pimage}`} alt="" />
          <p className="p-2"> {pet.pname} | {pet.category} </p>
          <h3 className="text-danger"> {pet.price} </h3>
          <p className="p-2 text-success"> {pet.pdesc} </p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default PetDetails;*/


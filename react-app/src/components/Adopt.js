import { Link } from "react-router-dom";
import Header from "./Header";
import axios from 'axios';
import { useEffect, useState } from "react";


function Adopt() {
    const [pets, setpets] = useState([]);
  
    useEffect(() => {
      const url = 'http://localhost:4000/get-pets';
      axios.get(url)
        .then((res) => {
          console.log(res);
          if (res.data.pets) {
            setpets(res.data.pets);
          }
        })
        .catch((err) => {
          console.log(err);
          alert('server err');
        });
    }, []);
  
    return (
      <div>
        <Header />
        
        {
            !!localStorage.getItem('token') && <Link to="/add-pet"> ADD PET </Link>
        }

        <h2>MY PETS: </h2>
  <div className="d-flex justify-content-center flex-wrap">
        {pets && pets.length > 0 &&
          pets.map((item, index) => {
            return (
              <div className="card m-3" key={index}>
                <img width="300px" height="200px" src={'http://localhost:4000/'+item.pimage} alt=""/>
                <p className="p-2"> {item.pname} | {item.category} </p>
                <h3 className="text-danger"> {item.price} </h3>
                <p className="p-2 text-success"> {item.pdesc} </p>
                
              </div>
            );
          })}
          </div>
      </div>
    );
  }
  
  export default Adopt;
  
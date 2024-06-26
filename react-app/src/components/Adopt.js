import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "./Header";
import Categories from "./Categories";
import axios from "axios";

function Adopt() {
  const navigate = useNavigate();
  const [pets, setPets] = useState([]);
  const [filteredPets, setFilteredPets] = useState([]);
  const [search, setSearch] = useState('');
  const [selectedCategory, setSelectedCategory] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);  

  useEffect(() => {
    applyFilters();
  }, [search, selectedCategory, pets]);  

  const fetchData = () => {
    const url = 'http://localhost:4000/get-pets';
    axios.get(url)
      .then((res) => {
        console.log("API Response:", res.data);
        if (res.data.pets) {
          setPets(res.data.pets);
        }
      })
      .catch((err) => {
        console.log("API Error:", err);
        alert('Server error');
      });
  };

  const handleSearch = (value) => {
    setSearch(value);
  };

  const handleCategory = (value) => {
    setSelectedCategory(value);
  };

  const applyFilters = () => {
    let filteredPets = pets;

    if (search || selectedCategory) {
      const searchTerm = search.toLowerCase();
      filteredPets = pets.filter((item) =>
        item.category.toLowerCase().includes(searchTerm)
      );

      if (selectedCategory) {
        filteredPets = filteredPets.filter(
          (item) => item.category.toLowerCase() === selectedCategory.toLowerCase()
        );
      }
    }

    setFilteredPets(filteredPets);
  };

  const handlePet = (id) => {
    navigate('/pet/' + id);
  };

  return (
    <div>
      <Header search={search} handlesearch={handleSearch} handleClick={applyFilters} />
      <Categories handleCategory={handleCategory} selectedCategory={selectedCategory} />

      

      <h2>MY PETS: </h2>
      <div className="d-flex justify-content-center flex-wrap">
        {filteredPets && filteredPets.length > 0 ?
          (filteredPets.map((item, index) => (
            <div onClick={() => handlePet(item._id)} className="card m-3" key={index}>
              <img width="300px" height="200px" src={`http://localhost:4000/${item.pimage}`} alt="" />
              <p className="p-2"> {item.pname} | {item.category} </p>
              <h3 className="text-danger"> {item.price} </h3>
              <p className="p-2 text-success"> {item.pdesc} </p>
            </div>
          ))) :
          (<p>No matching pets found.</p>)
        }
      </div>
    </div>
  );
}

export default Adopt;

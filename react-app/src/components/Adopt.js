/*import { Link } from "react-router-dom";
import Header from "./Header";
import Categories from "./Categories";
import axios from 'axios';
import { useEffect, useState } from "react";


function Adopt() {
    const [pets, setpets] = useState([]);
    const [search, setsearch] = useState('');
  
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

    const handlesearch = (value) => {
      setsearch(value);
    }

    const handleClick = () => {
      console.log('pets',pets);
      
      let filteredPets=pets.filter((item)=>{
          if(item.pname.includes(search) || item.pdesc.includes(search))
          {
            return item;
          }
      });
      setpets(filteredPets);
      
    };

    const handleCategory = (value) => {
         console.log(value,"v")
         let filteredPets=pets.filter((item) => {
          console.log(item)
          if(
          item.category.toLowerCase() == (value.toLowerCase()))
          {
            return item;
          }
      })
      setpets(filteredPets)
    }
  
    return (
      <div>
        <Header search={search} handlesearch={handlesearch} handleClick={handleClick}/>
        <Categories handleCategory={handleCategory}/>
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
  
  export default Adopt;*/
  /*import { Link } from "react-router-dom";
import Header from "./Header";
import Categories from "./Categories";
import axios from 'axios';
import { useEffect, useState } from "react";

function Adopt() {
  const [pets, setPets] = useState([]);
  const [filteredPets, setFilteredPets] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    const url = 'http://localhost:4000/get-pets';
    axios.get(url)
      .then((res) => {
        console.log(res);
        if (res.data.pets) {
          setPets(res.data.pets);
        }
      })
      .catch((err) => {
        console.log(err);
        alert('server err');
      });
  }, []);

  const handleSearch = (value) => {
    setSearch(value);
    applyFilters(value, pets);
  };

  const handleClick = () => {
    console.log('pets', pets);
    applyFilters(search, pets);
  };

  const handleCategory = (value) => {
    console.log(value, "v");
    applyFilters(value, pets);
  };

  const applyFilters = (filterValue, petsToFilter) => {
    if (filterValue) {
      let filteredPets = petsToFilter.filter((item) => {
        if (item.pname.includes(filterValue) || item.pdesc.includes(filterValue)) {
          return item;
        }
      });
      setFilteredPets(filteredPets);
    } else {
      setFilteredPets(petsToFilter);
    }
  };

  return (
    <div>
      <Header search={search} handlesearch={handleSearch} handleClick={handleClick} />
      <Categories handleCategory={handleCategory} />
      { !!localStorage.getItem('token') && <Link to="/add-pet"> ADD PET </Link> }

      <h2>MY PETS: </h2>
      <div className="d-flex justify-content-center flex-wrap">
        {filteredPets && filteredPets.length > 0 ?
          (filteredPets.map((item, index) => (
            <div className="card m-3" key={index}>
              <img width="300px" height="200px" src={'http://localhost:4000/' + item.pimage} alt="" />
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

export default Adopt;*/
import { Link } from "react-router-dom";
import Header from "./Header";
import Categories from "./Categories";
import axios from 'axios';
import { useEffect, useState } from "react";

function Adopt() {
  const [pets, setPets] = useState([]);
  const [filteredPets, setFilteredPets] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    const url = 'http://localhost:4000/get-pets';
    axios.get(url)
      .then((res) => {
        console.log(res);
        if (res.data.pets) {
          setPets(res.data.pets);
        }
      })
      .catch((err) => {
        console.log(err);
        alert('server err');
      });
  }, []);

  useEffect(() => {
    applyFilters(search, pets);
  }, [search, pets]);

  /*const handleSearch = (value) => {
  setSearch(value);
  };*/
  const handleSearch = (value) => {
   // e.preventDefault();
    setSearch(value);
    applyFilters(value, pets);
  };

  const handleClick = (e) => {
    e.preventDefault();
    console.log('pets', pets);
    applyFilters(search, pets);
  };

  const handleCategory = (value) => {
    console.log(value, "v");
    applyFilters(value, pets);
  };

  const applyFilters = (filterValue, petsToFilter) => {
    if (filterValue) {
      let filteredPets = petsToFilter.filter((item) => {
        if (item.pname.includes(filterValue) || item.pdesc.includes(filterValue)) {
          return item;
        }
      });
      setFilteredPets(filteredPets);
    } else {
      setFilteredPets(petsToFilter);
    }
  };

  return (
    <div>
      <Header search={search} handlesearch={handleSearch} handleClick={handleClick} />
      <Categories handleCategory={handleCategory} />
      { !!localStorage.getItem('token') && <Link to="/add-pet"> ADD PET </Link> }

      <h2>MY PETS: </h2>
      <div className="d-flex justify-content-center flex-wrap">
        {filteredPets && filteredPets.length > 0 ?
          (filteredPets.map((item, index) => (
            <div className="card m-3" key={index}>
              <img width="300px" height="200px" src={'http://localhost:4000/' + item.pimage} alt="" />
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

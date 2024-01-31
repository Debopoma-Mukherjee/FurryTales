import "./Color.css";
import ProductInput from "../../components/ProductInput"

function Color({handleChange}) {
    return (
      <div className="ml">
        <h2 className="sidebar-title color-title">Color</h2>
       {/*<label className="sidebar-label-container ">
          <input type="radio" name="test2"/>
          <span className="checkmark"></span>All
        </label>
        <label className="sidebar-label-container">
          <input type="radio" name="test2"/>
          <span className="checkmark"></span>Black

        </label>
        <label className="sidebar-label-container">
          <input type="radio" name="test2"/>
          <span className="checkmark"></span>White

        </label>
        <label className="sidebar-label-container">
          <input type="radio" name="test2"/>
          <span className="checkmark"></span>Yellow

        </label>
        <label className="sidebar-label-container">
          <input type="radio" name="test2"/>
          <span className="checkmark"></span>Pink

        </label>
        <label className="sidebar-label-container">
          <input type="radio" name="test2"/>
          <span className="checkmark"></span>Purple

        </label>
        <label className="sidebar-label-container">
          <input type="radio" name="test2"/>
          <span className="checkmark"></span>Blue

    </label>*/}
    
    <label className="sidebar-label-container">
            <input onChange={handleChange} type="radio" value="" name="test3"/>
            <span className="checkmark all"></span> All

      </label>

      <ProductInput
      handleChange={handleChange}
      value="black"
      title="Black"
      name="test3"
      color="black"
      />

{/*<ProductInput
      handleChange={handleChange}
      value="White"
      title="White"
      name="test2"
      color="White"
  />*/}

<ProductInput
      handleChange={handleChange}
      value="yellow"
      title="Yellow"
      name="test3"
      color="yellow"
      />

<ProductInput
      handleChange={handleChange}
      value="blue"
      title="Blue"
      name="test3"
      color="blue"
      />
      <ProductInput
      handleChange={handleChange}
      value="purple"
      title="Purple"
      name="test3"
      color="purple"
      />

<ProductInput
      handleChange={handleChange}
      value="pink"
      title="Pink"
      name="test3"
      color="pink"
      />

      <label className="sidebar-label-container">
        <input type="radio" onChange={handleChange} value="white" name="test1"/>
        <span className="checkmark" style={{background:"white",border:"2px solid black"}}></span> White
      </label>
      </div>


    )
  }

export default Color;
import "./Category.css";
import Input from "../../components/Input";

function Category({ handleChange }) {
  return (
    <div>
      <h2 className="sidebar-title">Top Categories</h2>

      <div>
        <label className="sidebar-label-container">
          <input onChange={handleChange} type="radio" value="" name="test" />
          <span className="checkmark"></span>All
        </label>
        <Input
          handleChange={handleChange}
          value="stationary"
          title="Stationary"
          name="test"
        />
          <Input
          handleChange={handleChange}
          value="workwear"
          title="Workwear"
          name="test"
        />
         <Input
          handleChange={handleChange}
          value="beauty"
          title="Beauty"
          name="test"
        />
        <Input
          handleChange={handleChange}
          value="technology"
          title="Technology"
          name="test"
        />  
        <Input
          handleChange={handleChange}
          value="furniture"
          title="Furniture"
          name="test"
        />
      </div>
    </div>
  );
}

export default Category;
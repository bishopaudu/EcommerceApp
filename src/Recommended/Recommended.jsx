import Button from "../components/Button";
import "./Recommended.css";

const Recommended = ({ handleClick }) => {
  return (
    <>
      <div>
        <h2 className="recommended-title">Recommended</h2>
        <div className="recommended-flex">
          <Button onClickHandler={handleClick} value="" title="All Products" />
          <Button onClickHandler={handleClick} value="LG Electronics" title="LG Electronics" />
          <Button onClickHandler={handleClick} value="SIK Tools" title="SIK Tools" />
          <Button onClickHandler={handleClick} value="Loreal" title="Loreal" />
          <Button onClickHandler={handleClick} value="IKEA" title="IKEA" />
         {/* <Button onClickHandler={handleClick} value="Furniture" title="" />*/}
        </div>
      </div>
    </>
  );
};

export default Recommended;
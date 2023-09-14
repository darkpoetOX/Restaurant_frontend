import React from 'react';

const SubmitRestaurantForm = ({ handleClose }) => {
    const priceRangeOptions = [
        'Low',
        'Medium',
        'High',
      ];
    

  return (
    <div>
      <h2>Submit Restaurant Form</h2>
      <form action="/action_page.php">
        <label for="rname">Restaurant name:</label><br/>
        <input type="text" id="rname" value=""/>
        <input type="submit" value="Enter"/>

        <label for="fborough">Borough name:</label><br/>
        <input type="text" id="fborough" value=""/>
        <input type="submit" value="Enter"/><br/>

        <label htmlFor="fprice">Price range:</label><br />
        <select id="fprice">
          {priceRangeOptions.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </select><br />

        <label for="frating">Rating:</label><br/>
        <input type="text" id="frating" value=""/>
        <input type="submit" value="Enter"/><br/>
      </form>
      <br/>
      <button onClick={handleClose}>Close</button>
    </div>
  );
};

export default SubmitRestaurantForm;
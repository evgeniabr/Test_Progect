import React, { useState } from 'react'

export default function Filter({carPrice, carBrands, filterCards}) {
    const [mileageFrom, setMileageFrom] = useState('');
    const [mileageTo, setMileageTo] = useState('');

    const handleMileageFromChange = (event) => {
        setMileageFrom(event.target.value);
      };
    
      const handleMileageToChange = (event) => {
        setMileageTo(event.target.value);
      };

      const formSubmit = (e) => {
        e.preventDefault();
        const Brands = e.currentTarget.carBrands.value;
        const Price = e.currentTarget.carPriceInput.value;
        filterCards(Brands, Price, mileageFrom, mileageTo);
    }

  return (
  <>
  <form  onSubmit={formSubmit}>
  <div>
    <label htmlFor="carBrandInput">Car Brand</label>

    <select 
                id="carBrands"  
                placeholder='Enter the text'
                >
         <option key="0" value={""} hidden>Enter the text</option>
                {carBrands.map((brand, index) => (
                <option key={index} value={brand}>{brand}</option>
                ))}
svg
            </select>
            </div>
            <div> 
            <label htmlFor="carPriceInput">Price/ 1 hour</label>
            <select 
                id="carPriceInput"
                >
                <option value={""}> </option> 
                {carPrice.map((price, index) => (
                <option key={index} value={price}>{price}</option>
                ))}
            </select>
            svg
            <p>To</p>
            <p>$</p>
            </div>
            <div>
            <label htmlFor="mileageFromInput">Сar mileage / km</label>
            <div>
            <input
              type="number"
              id="mileageFromInput"
              value={mileageFrom}
              onChange={handleMileageFromChange}
            />
            <p>From:</p>

            <input
              type="number"
              id="mileageFromInput"
              value={mileageTo}
              onChange={handleMileageToChange}
            />
            <p>To:</p>
            </div>
          </div>

          <button type="submit">
          <span>Search</span>
           <span>Go!</span>         
            </button>
      </form> 
    </>
  )
}

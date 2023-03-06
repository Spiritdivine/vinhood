import React, { useState, useEffect } from 'react';
import FilterBTN from '../filterBTN';

export default function Geo({ updateLocation, updatePageNumber }) {
  const [locationId, setLocationId] = useState(1);
  const [locationData, setLocationData] = useState([]);

  useEffect(() => {
    const fetchLocationData = async () => {
      const response = await fetch(`https://rickandmortyapi.com/api/location/?id=${locationId}`);
      const data = await response.json();
      setLocationData(data.results);
    };
    fetchLocationData();
  }, [locationId]);

  return (
    <div className="accordion-item ">
      <h2 className="accordion-header" id="headingTwo">
        <button
          className="accordion-button collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapseTwo"
          aria-expanded="false"
          aria-controls="collapseTwo"
        >
          Location
        </button>
      </h2>
      <div
        id="collapseTwo"
        className="accordion-collapse collapse"
        aria-labelledby="headingTwo"
        data-bs-parent="#accordionExample"
      >
        <div className="accordion-body d-flex flex-wrap gap-3">
          {locationData.map((item, index) => (
            <FilterBTN
              name="location"
              index={index}
              key={index}
              updatePageNumber={updatePageNumber}
              task={updateLocation}
              input={item}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

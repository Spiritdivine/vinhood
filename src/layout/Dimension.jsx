import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import React, { useState, useEffect } from "react";
import Dard from "../component/card/Dimecard";
import Pagination from "../Pagination/pagination";

function Dimensions() {
  let [pageNumber, updatePageNumber] = useState(1);
  let [fetchedData, updateFetchedData] = useState([]);
  let {info, results} = fetchedData;
  
  console.log(results);

  let api = `https://rickandmortyapi.com/api/location/?page=${pageNumber}`;

  useEffect(() => {
    (async function () {
      let data = await fetch(api).then((res) => res.json());
      updateFetchedData(data)
    })();
  }, [api]);
  return (
    <div className="character">
        <h1>Location</h1>
        <div className="col-lg-8 col-12">
            <div className="row">
                <Dard page="/" results={results} />
            </div>
        </div>
        <Pagination
        info={info}
        pageNumber={pageNumber}
        updatePageNumber={updatePageNumber}
        />
    </div>
  );
}
  
  export default Dimensions;
  
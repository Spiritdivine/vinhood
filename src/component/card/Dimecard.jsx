import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "./card.scss";

const Dard = ({ page, results }) => {
  const [residentCounts, setResidentCounts] = useState([]);

  useEffect(() => {
    if (results) {
      const fetchResidentCounts = async () => {
        const counts = await Promise.all(
          results.map((location) =>
            fetch(location.url)
              .then((response) => response.json())
              .then((data) => data.residents.length)
          )
        );
        setResidentCounts(counts);
      };
      fetchResidentCounts();
    }
  }, [results]);

  let display;

  if (results) {
    display = results.map((location, index) => {
      const { id, name, type, dimension } = location;
      const residentCount = residentCounts[index];

      return (
        <Link
          style={{ textDecoration: "none", padding: "1rem", border: "1px solid black", borderRadius:"5px", margin:"1rem" }}
          to={`${page}${id}`}
          key={id}
          className="col-lg-4 col-md-6 col-sm-6 col-12 mb-4 position-relative text-dark"
        >
          <div className={`${styles.card} d-flex flex-column justify-content-center`}>
            <div className={`${styles.content}`}>
              <div className="fs-5 fw-bold mb-4">{name}</div>
              <div className="">
                <div className="fs-6 fw-normal">{type}</div>
                <div className="fs-6 fw-normal">{residentCount} residents</div>
                <div className="fs-5">{dimension}</div>
              </div>
            </div>
          </div>
        </Link>
      );
    });
  } else {
    display = "No Locations Found :/";
  }

  return <>{display}</>;
};

export default Dard;

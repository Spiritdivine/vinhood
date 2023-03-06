import React, {useState} from "react";
import Gender from "./category/Gender";
import Geo from "./category/Geo";
import Species from "./category/Specie";
import Status from "./category/Status";

export class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // You can also log the error to an error reporting service
    console.error(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return <h1>Something went wrong.</h1>;
    }

    return this.props.children; 
  }
}

const Filter = ({
  updatePageNumber,
  updateStatus,
  updateGender,
  updateSpecies,
  updateLocation,
}) => {
  let clear = () => {
    updateStatus("");
    updateGender("");
    updateSpecies("");
    updateLocation("");
    updatePageNumber(1);
    window.location.reload(false);
  };

  const [locationId, setLocationId] = useState(1);

  const handleLocationChange = (newLocationId) => {
    setLocationId(newLocationId);
    updatePageNumber(1); // reset page number to 1 whenever location changes
  };

  return (
    <div className="col-lg-3 col-12 mb-5">
      <div className="text-center fw-bold fs-4 mb-2">Filters</div>
      <div
        style={{ cursor: "pointer" }}
        onClick={clear}
        className="text-primary text-decoration-underline text-center mb-3"
      >
        Clear Filters
      </div>
      <div className="accordion" id="accordionExample">
        <Status
          updatePageNumber={updatePageNumber}
          updateStatus={updateStatus}
        />
        <Species
          updatePageNumber={updatePageNumber}
          updateSpecies={updateSpecies}
        />
        <Gender
          updatePageNumber={updatePageNumber}
          updateGender={updateGender}
        />
        <ErrorBoundary>
        <Geo 
          updateLocation={handleLocationChange} 
          updatePageNumber={updatePageNumber} 
        />
        </ErrorBoundary>
      </div>
    </div>
  );
};

export default Filter;

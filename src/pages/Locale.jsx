import { Fragment } from "react";
import Dimensions from "../layout/Dimension";
import Navbar from "../layout/Navbar";

const Locale = () => {
    return ( 
        < div className="locale">
            <Navbar/>
            <Dimensions/>
        </div>
     );
}
 
export default Locale;
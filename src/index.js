import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
//import StarRating from "./StarRating";

// function Test() {
//   const [movieRating, SetMovieRating] = useState(0);
//   return (
//     <div>
//       <StarRating color="Blue" maxRating={10} onSetRating={SetMovieRating} />
//       <p Style={{ color: "Blue" }}>
//         The movie was Rated with {movieRating} Stars
//       </p>
//     </div>
//   );
// }

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
    {/* <StarRating />
    <Test /> */}
  </React.StrictMode>
);

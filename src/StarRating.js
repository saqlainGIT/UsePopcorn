import { useState } from "react";

export default function StarRating({
  maxRating = 5,
  color = "#fcc419",
  size = 48,
  className = "",
  messages = [],
  defaultRating = 0,
  onSetRating,
}) {
  const [Rating, setRating] = useState(defaultRating);
  const [TempRating, setTempRating] = useState(0);
  // const [ValueExists, setValueExist] = useState(true);
  function handlerating(rating) {
    setRating(rating);
    onSetRating(rating);
  }

  const containerStyle = {
    display: "flex",
    alignItems: "center",
    gap: "16px",
  };

  const starContainerStyle = {
    display: "flex",
    alignItems: "center",
    gap: "4px",
  };

  const TextStyle = {
    lineHeight: "1",
    margin: "0",
    color,
    fontSize: `${size / 1.5}px`,
  };
  return (
    <>
      {
        <div style={containerStyle} className={className}>
          <div div style={starContainerStyle}>
            {Array.from({ length: maxRating }, (_, i) => (
              <Star
                key={i}
                onRate={() => handlerating(i + 1)}
                full={TempRating ? TempRating >= i + 1 : Rating >= i + 1}
                onHoverIn={() => setTempRating(i + 1)}
                onHoverOut={() => setTempRating(0)}
                color={color}
                size={size}
              />
            ))}
          </div>

          <p style={TextStyle}>
            {messages.length === maxRating
              ? messages[TempRating ? TempRating - 1 : Rating - 1]
              : TempRating || Rating || ""}
          </p>
        </div>
      }
    </>
  );
}

function Star({ onRate, full, onHoverIn, onHoverOut, color, size }) {
  const StarStyle = {
    width: `${size}px`,
    height: `${size}px`,
    display: "block ",
    cursor: "pointer",
  };
  return (
    <span
      role="button"
      style={StarStyle}
      onClick={onRate}
      onMouseEnter={onHoverIn}
      onMouseLeave={onHoverOut}
    >
      {full ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill={color}
          stroke={color}
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke={color}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="{2}"
            d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
          />
        </svg>
      )}
    </span>
  );
}
// Rating Calculation: In the <Star> component, the onRate function is called when a star is clicked.
//  The i + 1 is used to calculate the rating value for the clicked star.
//  Here, i is the index of the star (0-based), so i + 1 ensures that the rating starts from 1 instead of 0.

/*

In the StarRating component, each <Star> component is associated with an index i determined by the Array.from() function.
 The index i corresponds to the position of the star in the array of stars being rendered.

When a star is clicked, the onRate function is triggered.
 This function is passed as a prop to each <Star> component and is executed with the argument i + 1,
 indicating the rating associated with the clicked star.

Inside the handlerating function within the StarRating component, 
the setRating function is called with the provided rating value. This updates the Rating state variable to the clicked star's rating.

Now, when rendering each <Star> component, 
the full prop is determined based on whether the index (i) of the star being rendered is less than or equal to the current Rating.
 If i is less than Rating, it means that the star should be filled, as it represents a rating value that has been clicked.

For example:

If Rating is 3, and i is 0, 1, or 2, the stars with these indices will be filled because i is less than Rating.
If Rating is 3, and i is 3, 4, or greater, the stars with these indices will not be filled because i is greater than or equal to Rating.
This logic ensures that the appropriate number of stars are filled based on the rating that has been clicked. As Rating changes with each click, the full prop for each <Star> component is updated accordingly, leading to the dynamic filling and unfilling of stars based on the current rating.










*/

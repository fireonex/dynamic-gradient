import React from "react";

function DisplayImage({ uploadedImage, colorPalette }) {
  const toHex = (rgb) => {
    let hex = Number(rgb).toString(16);
    if (hex.length < 2) {
      hex = "0" + hex;
    }

    return hex;
  };

  return (
    <div>
      <div className="image">
        {uploadedImage ? (
          <img src={uploadedImage} alt="uploaded" />
        ) : (
          <div></div>
        )}
      </div>

      {colorPalette && (
        <>
          {colorPalette.map((color, index) => {
            const rgb = `rgb(${color.join(",")})`;
            const hex = `#${toHex(color[0])}${toHex(color[1])}${toHex(
              color[2]
            )}`;

            console.log(rgb, hex);
          })}
        </>
      )}
    </div>
  );
}

export default DisplayImage;

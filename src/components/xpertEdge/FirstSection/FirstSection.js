import React from "react";
import FirstContent from "./FirstContent";

function FirstSection({
  firstToparaImg,
  firstHeading,
  FirstRightImg,
  cityParaCont,
   mblToparaImg,
}) {

  return (
    <>
      <FirstContent
        firstToparaImg={firstToparaImg}
        firstHeading={firstHeading}
        FirstRightImg={FirstRightImg}
        cityParaCont={cityParaCont}
        
         mblToparaImg={ mblToparaImg}
      />
    </>
  );
}
export default React.memo(FirstSection);

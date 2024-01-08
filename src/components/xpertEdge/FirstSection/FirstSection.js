import React from "react";
import FirstContent from "./FirstContent";

function FirstSection({
  firstToparaImg,
  firstHeading,
  FirstRightImg,
  cityParaCont,
}) {

  return (
    <>
      <FirstContent
        firstToparaImg={firstToparaImg}
        firstHeading={firstHeading}
        FirstRightImg={FirstRightImg}
        cityParaCont={cityParaCont}
      />
    </>
  );
}
export default React.memo(FirstSection);

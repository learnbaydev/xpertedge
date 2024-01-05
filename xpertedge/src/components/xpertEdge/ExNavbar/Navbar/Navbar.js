import dynamic from "next/dynamic";
import React, { useState } from "react";
const NavbarContent = dynamic(() => import("./NavbarContent"));
const Popup = dynamic(() => import("../../../Global/Popup/Popup"));
const FormCareer = dynamic(() => import("../../../Global/CareerPortal/Form/Form"));
const Form = dynamic(() => import("../../../Global/Form/Form"));


const Navbar = ({
  radio,
  dataScience,
  fullStack,
  careerForm,
  dataScienceCounselling,
  adPage,
  dataScienceGeneric,
  interstedInHide,
}) => {
  const [popups, setPopups] = useState(false);

  return (
    <div>
      <Popup trigger={popups} setTrigger={setPopups} className="popupModal">
        <div className="leftPopup">
          <div className="whiteP" />
        </div>
        <div className="RightPopup">
          <h5>Apply For Counselling</h5>
          {/* <p>Fill the below details to get started</p> */}
          {careerForm ? (
            <FormCareer />
          ) : (
            <Form
              popup={true}
              setTrigger={setPopups}
              radio={radio}
              fullStack={fullStack}
              dataScience={dataScience}
              dataScienceGeneric={dataScienceGeneric}
              dataScienceCounselling={dataScienceCounselling}
              upSkillingHide={true}
              interstedInHide={interstedInHide}
            />
          )}
        </div>
      </Popup>

      <NavbarContent adPage={adPage} setPopups={setPopups} />
    </div>
  );
};

export default React.memo(Navbar);

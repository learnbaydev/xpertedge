// formFunctions.js

const getEndPoint = (pathname, event) => {
  let endPoint = "https://getform.io/f/85e92281-63f9-4d2f-b946-31d1098532f4";
  if (event) {
    endPoint = "https://getform.io/f/fd9da107-864c-4617-a52a-7e112297efa6";
  }

  if (pathname === "/organic") {
    endPoint = "https://getform.io/f/a876146f-2c5d-4a1f-b177-f993db3d7aaf";
  }

  if (pathname === "/referrals") {
    endPoint = "https://getform.io/f/a876146f-2c5d-4a1f-b177-f993db3d7aaf";
  }

  if (
    pathname === "/learning-learnbay" ||
    pathname === "/learning-learnbay-select"
  ) {
    endPoint = "https://getform.io/f/fd68bf82-a911-435e-9719-7c134a89a731";
  }
  if (pathname === "/resume-builder") {
    endPoint = "https://getform.io/f/fd9da107-864c-4617-a52a-7e112297efa6";
  }
  if (pathname === "/cloud&devops/s3-cloud-computing-and-devOps-certification-program") {
    endPoint = "https://getform.io/f/785b3539-e7ce-497c-a975-0dc288c3286c";
  }
  return endPoint;
  // ... (Logic to determine the endpoint based on the router)
};

const redirectionThankYou = (
  pathname,
  fullStack,
  event,
  dataScience,
  dataScienceGeneric,
  dataScienceCounselling,
  redirection
) => {
  let routerPath = "";
  if (pathname === "/learning-learnbay") {
    routerPath = "/learning-learnbay-select";
  }
  if (pathname === "/learning-learnbay-select") {
    routerPath = "/Thank-you-counselling";
  }
  if (pathname === "resume-builder") {
    routerPath = "Thank-you-counselling";
  }
  if (fullStack) {
    routerPath = "/Thank-you-fsd";
  }
  if (event) {
    routerPath = "/event/Thank-You-event";
  }
  if (dataScience) {
    routerPath = "/Thank-you";
  }
  if (dataScienceGeneric) {
    redirection();
  }
  if (dataScienceCounselling) {
    routerPath = "/Thank-you-counselling";
  }
  if (pathname === "/organic" || pathname === "/referrals") {
    routerPath = "/Thank-you-counselling";
  }
  if (pathname === "/Thank-you") {
    setToggle(false);
    setAlertMSG("Form Submitted successfully");
  }
  return routerPath;
};

const getValidation = (radio, interstedInHide, query) => {
  if (query.phone === "" || query.phone === undefined) {
    return true;
  } else if (radio === true && interstedInHide === true) {
    if (query.interstedIn === "Interested In") {
      return true;
    } else if (query.interstedIn === "") {
      return true;
    } else if (query.platform === "Select an option") {
      return true;
    } else if (query.platform === "") {
      return true;
    } else {
      return false;
    }
  } else if (
    interstedInHide === true &&
    (radio === undefined || radio === false)
  ) {
    if (query.interstedIn === "Interested In") {
      return true;
    } else if (query.interstedIn === "") {
      return true;
    } else return false;
  } else if (
    interstedInHide === false ||
    interstedInHide === undefined ||
    radio === false ||
    radio === undefined
  ) {
    return false;
  }
};
const getFormFields = (radio, google, referrals, interstedInHide) => {
  return [
    // ... (previous form fields)
    {
      name: "name",
      label: "Name",
      type: "text",
      required: true,
      placeholder: "Enter your Full Name",
      showField: true,
    },
    {
      name: "email",
      label: "E-Mail",
      type: "email",
      required: true,
      placeholder: "Enter your Email",
      showField: true,
    },
    {
      name: "phone",
      label: "Phone Number",
      type: "phone",
      inputStyle: {
        borderRadius: "6px",
        border: "0",
      },
      containerStyle: {
        borderRadius: "6px",
        border: "1px solid #D3D3D3",
      },
      inputProps: {
        name: "phone",
        required: true,
      },
      required: true,
      placeholder: "Enter Phone Number",
      showField: true,
    },
    {
      name: "WAdropdown",
      label: "WAdropdown",
      type: "select",
      options: [
        { value: "Select One", label: "Select One", hidden: true },
        { value: "Calls", label: "Calls" },
        { value: "WhatsApp", label: "WhatsApp" },
        { value: "Referral", label: "Referral" },
        { value: "Krishna Sir", label: "Krishna Sir" },
      ],
      required: google, // Conditionally required
      showField: google, // Conditionally render the field
    },
    {
      name: "WAdropdown",
      label: "WAdropdown",
      type: "select",
      options: [
        { value: "Referral", label: "Referral" },
        { value: "Krishna Sir", label: "Krishna Sir" },
      ],
      required: referrals, // Conditionally required
      showField: referrals, // Conditionally render the field
    },
    {
      name: "interstedIn",
      label: "Interested In",
      type: "select",
      options: [
        { value: "Interested In", label: "Interested In", hidden: true },
        {
          value: "Master Degree Program",
          label: "Master Degree Program",
        },
        {
          value: "Certification Program",
          label: "Certification Program",
        },
      ],
      required: interstedInHide, // Conditionally required
      showField: interstedInHide, // Conditionally render the field
    },
    
    {
      name: "platform",
      label: "Course Preference",
      type: "select",
      options: [
        { value: "Select an option", label: "Select an option", hidden: true },
        {
          value: "Data Science & AI Courses",
          label: "Data Science & AI Courses",
        },
        {
          value: "Cloud Computing & DevOps ",
          label: "Cloud Computing & DevOps ",
        },
        {
          value: "Master in CS: Data Science and AI",
          label: "Master in CS: Data Science and AI",
        },
      ],
      required: radio, // Conditionally required
      showField: radio, // Conditionally render the field
    },
  ];
};

export { getEndPoint, redirectionThankYou, getValidation, getFormFields };

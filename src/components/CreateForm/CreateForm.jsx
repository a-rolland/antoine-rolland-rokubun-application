import React from "react";
import Form from "../ElementalComponents/Form/Form";

const CreateForm = (props) => {
  const createPlaceFields = [
    {
      name: "name",
      label: "Name",
      type: "text",
      placeholder: "Ex: 'Parc de la Ciutadella'",
      input: "input",
    },
    {
      name: "description",
      label: "Description",
      type: "text",
      placeholder: "Ex: 'A nice park in the center of Barcelona.",
      input: "textarea",
    },
  ];

  return <Form createPlaceForm {...props} fields={createPlaceFields} />;
};

export default CreateForm;

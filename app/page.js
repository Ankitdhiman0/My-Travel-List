import React from "react";
import Header from "./Components/Header";
import Form from "./Components/Form";
import ItemsList from "./Components/ItemsList";
import Status from "./Components/Status";

const page = () => {
  return (
    <>
      <Header />
      <Form />
      <ItemsList />
      <Status />
    </>
  );
};

export default page;

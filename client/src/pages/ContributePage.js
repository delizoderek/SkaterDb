import React from "react";
import FormContainer from "./contributeForm/FormContainer";
import Auth from '../utils/auth'

function ContributePage() {
  return (
    <div className="d-flex justify-content-center m-5 bg-transparent">
      <div className="col-12 p-0 rounded bg-light">
        {Auth.loggedIn()? <FormContainer/> : <h1>Please Login to contribute</h1>}
      </div>
    </div>
  );
}

export default ContributePage;

import React from "react";

function Searchbar() {
  return (
    <div className="d-flex">
      <div className="form-group col">
        <input
          className="form-control"
          type="text"
          placeholder="Szukaj..."
        />
      </div>
      <div>
        <button className="ml-1 btn btn-secondary">Szukaj</button>
        </div>
    </div>
  );
}

export default Searchbar;

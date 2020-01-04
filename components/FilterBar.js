import React from "react";
import { Link } from "react-router-dom";

const FilterBar = () => {
  return (
    <div>
      <div>
        <br></br>
        <br></br>
        <br /><br/><br/>
      </div>

      <div className="panel is-info">
        <p className="panel-heading">Filters</p>
        <p className="panel-sub">Type</p>
        <label className="panel-block">
          <input type="checkbox" />
          Free
        </label>
        <label className="panel-block">
          <input type="checkbox" />
          Paid
        </label>
        <p className="panel-sub">Medium</p>
        <label className="panel-block">
          <input type="checkbox" />
          Video
        </label>
        <label className="panel-block">
          <input type="checkbox" />
          App
        </label>
        <label className="panel-block">
          <input type="checkbox" />
          Books
        </label>
        <p className="panel-sub">Level</p>
        <label className="panel-block">
          <input type="checkbox" />
          Beginner
        </label>
        <label className="panel-block">
          <input type="checkbox" />
        Intermediate
        </label>
        <label className="panel-block">
          <input type="checkbox" />
        Advanced
        </label>
      </div>
    </div>
  );
};

export default FilterBar;

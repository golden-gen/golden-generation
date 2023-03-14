import React from "react";

const GridWithFloat = () => {
  return (
    <section>
      <div className="grid">
        <div className="row">
          <div className="col-1-of-2">col-1-of-2</div>
          <div className="col-1-of-2">col-1-of-2</div>
        </div>
        <div className="row">
          <div className="col-1-of-3">col-1-of-3</div>
          <div className="col-1-of-3">col-1-of-3</div>
          <div className="col-1-of-3">col-1-of-3</div>
        </div>
        <div className="row">
          <div className="col-1-of-3">col-1-of-3</div>
          <div className="col-2-of-3">col-2-of-3</div>
        </div>
        <div className="row">
          <div className="col-1-of-4">col-1-of-4</div>
          <div className="col-1-of-4">col-1-of-4</div>
          <div className="col-1-of-4">col-1-of-4</div>
          <div className="col-1-of-4">col-1-of-4</div>
        </div>
        <div className="row">
          <div className="col-1-of-4">col-1-of-4</div>
          <div className="col-1-of-4">col-1-of-4</div>
          <div className="col-2-of-4">col-2-of-4</div>
        </div>
        <div className="row">
          <div className="col-1-of-4">col-1-of-4</div>
          <div className="col-3-of-4">col-3-of-4</div>
        </div>
      </div>
    </section>
  );
};

export default GridWithFloat;

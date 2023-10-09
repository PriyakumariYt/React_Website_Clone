import React from 'react';

const CommanData = (props) => {
  return (
    <div className="container-fluid main_header">
      <div className="row">
        <div className="col-md-10 col-12 mx-auto">
          <div className="row">
            <div className="col-md-6 col-12 main_header_left">
              <p>{props.names}</p>
              <h1>{props.name2}</h1>
              <a href="/"><button>{props.btnName}</button></a>
            </div>

            <div className="col-md-6 col-12 main_header_right">
              <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img className="w-100" src={props.imgSrc} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CommanData;
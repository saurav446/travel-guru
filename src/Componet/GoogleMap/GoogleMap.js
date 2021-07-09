import React from 'react';
import GoogleMapReact from 'google-map-react'; 

const GoogleMap = (props) => { 

    const use = props.use;
    console.log(use)
    const AnyReactComponent = ({ text }) =>
    
    <div>
        <div className="marker__wrapper"> 
        <div className="marker__info"> 
          <div className="d-flex align-items-center justify-content-between">
            <span>
              <span
                style={{
                  color: 'goldenrod',
                  fontSize: '22px',
                  marginRight: '10px',
                }}
              >
                &#9733;
              </span>
               
            </span>
            <span>
              <span className="font-weight-bold"></span> 
            </span>
          </div>
        </div> 
      <div   className="markers">
        {text}
      </div>
    </div>
    </div>;

    const center = {
        lat: 21.4271,
        lng: 92.0059
    }
    return (
        <div> 
            <div>
      <div
        style={{
          height: '100vh',
          width: '100%',
          borderRadius: '15px',
          overflow: 'hidden',
        }}
      >
        <GoogleMapReact 
          defaultZoom={18} defaultCenter={center}
        > 
            {use.map((pd, index) => (
            <AnyReactComponent
              key={index}
              lat={pd.location.lat}
              lng={pd.location.lng}
              text={pd.amount} 
              data={pd}
            />
          ))}
        </GoogleMapReact>
      </div>
    </div>
     
        </div>
    );
};

export default GoogleMap;
import React, { useState } from 'react';
import GoogleMapReact from 'google-map-react'; 

const GoogleMap = ({place}) => { 
  
    const [use,setUse] = useState(place)
     

    const AnyReactComponent = ({ text,data }) =>
    
    <div>
        <div className="marker__wrapper"> 
        <div className="marker__info"> 
         <p style={{color:'#2ecc71',width:'100%'}}>{data.title}</p>
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
      <div    className="marker" className="markers">
        ${text}
      </div>
    </div>
    </div>;

    const center = {
        lat: 21.4271,
        lng: 92.0059
    }
    return (
        <div>  
      <div className="google__maps" >
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
    );
};

export default GoogleMap;
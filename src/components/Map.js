import React, { useState } from "react";
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;


const defaultProps = {
  center: {
    lat: 10.99835602,
    lng: 77.01502627
  },
  zoom: 11
};
const markers = [
  {
    id: 1,
    name: "Chicago, Illinois",
    position: { lat: 41.881832, lng: -87.623177 }
  },
  {
    id: 2,
    name: "Denver, Colorado",
    position: { lat: 39.739235, lng: -104.99025 }
  },
  {
    id: 3,
    name: "Los Angeles, California",
    position: { lat: 34.052235, lng: -118.243683 }
  },
  {
    id: 4,
    name: "New York, New York",
    position: { lat: 40.712776, lng: -74.005974 }
  }
];

function Map() {
  const [activeMarker, setActiveMarker] = useState(null);

  const handleActiveMarker = (marker) => {
    if (marker === activeMarker) {
      return;
    }
    setActiveMarker(marker);
  };

  const handleOnLoad = (map) => {
    const bounds = new window.google.maps.LatLngBounds();
    markers.forEach(({ position }) => bounds.extend(position));
    map.fitBounds(bounds);
  console.log("ddd"+markers[0].position.lat);
  };

  return (
    <div style={{ height: '100vh', width: '100%' }}>
    <GoogleMapReact
      bootstrapURLKeys={{ key: "AIzaSyBPFym4hcICGvPCiwaShNyjf7653DV_e-0" }}
      defaultCenter={defaultProps.center}
      defaultZoom={defaultProps.zoom}
    >
    
    </GoogleMapReact>
  </div>
    // <GoogleMap

    
    //   onLoad={handleOnLoad}
    //   onClick={() => setActiveMarker(null)}
    //   mapContainerStyle={{ width: "100vw", height: "100vh" }}
    // >
    //   {markers.map(({ id, name, position }) => (
        
    //     <Marker
    //       key={id}
    //       position={position}
    //       onClick={() => handleActiveMarker(id)}
    //     >
    //       {activeMarker === id ? (
    //         <InfoWindow onCloseClick={() => setActiveMarker(null)}>
    //           <div>{name}</div>
    //         </InfoWindow>
    //       ) : null}
    //     </Marker>
    //   ))}
    // </GoogleMap>
  );
}

export default Map;

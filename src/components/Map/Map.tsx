import react from "react";
import { Marker, Popup, MapContainer, TileLayer } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css"
import markerIcon from "leaflet/dist/images/marker-icon.png"
import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png"
import markerShadow from "leaflet/dist/images/marker-shadow.png"
import type { style } from "framer-motion/client";
import { color } from "framer-motion";
import {Icon} from "leaflet";



L.Icon.Default.mergeOptions({
    markerUrl: markerIcon2x,
    iconUrl: markerIcon,
    shadowUrl: markerShadow
})

const SimpleMap: React.FC = () => {
    const karad: [number, number] = [17.2724895298486, 74.17970499467154];
    const sangli: [number, number] =[16.875538182492168, 74.56272198950026]
    const Islampur: [number, number] =[17.04523630344427, 74.26459541243842]

const redIcon = new Icon({
    iconUrl : 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
    shadowSize: [41, 41]
})


    return(
        <>
        <div>
            <MapContainer center={karad} zoom={9} scrollWheelZoom={false} style={{height:'400px' ,width:'100%   %', borderRadius:'10px'}} >
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={karad} icon={redIcon}>
                <Popup>
                    <h1>AN Fish World Karad</h1> <br /> <p>kolhapur Naka, NH4, puna Bangalore Road, nearby Shriram Tyres!, Nehru Nagar, Karad, Maharashtra 415539</p>
                </Popup>
            </Marker>
              <Marker position={sangli}>
                <Popup>
                    A pretty CSS3 popup. <br /> Easily customizable.
                </Popup>
            </Marker>
             <Marker position={Islampur}>
                <Popup>
                    A pretty CSS3 popup. <br /> Easily customizable.
                </Popup>
            </Marker>
        </MapContainer>
        </div>
         
        </>
       
    );
};

export default SimpleMap;
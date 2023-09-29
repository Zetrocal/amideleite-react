import styled from "styled-components";
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import {LatLngExpression} from 'leaflet';

let StoreCoordinates:LatLngExpression = [-17.388181, -66.162514]

export default function StaticMap() {
    return (
        <StaticMapApp>
            <MapContainer center={StoreCoordinates} zoom={18} scrollWheelZoom={true} style={{height:"100%"}}>
                <TileLayer 
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={StoreCoordinates}>
                    <Popup>
                        <CenteredText>Amideleite<br />Restaurant</CenteredText>
                    </Popup>
                </Marker>
            </MapContainer>
        </StaticMapApp>
    );
}


const StaticMapApp = styled.div`
    width: 100%;
    height: 50vh;
`

const CenteredText = styled.div`
    text-align: center;
`
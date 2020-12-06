import React, { useState, useContext } from "react";
import styled from "styled-components";
import ReactMapGL, { Marker } from "react-map-gl";
import { GlobalStateContext } from "../../Context/GlobalState";
import Icon from "../icons/icons";

const StyledMap = styled.div`
  text-align: center;

  h1 {
    @media (max-width: 495px) {
      font-size: 30px;
    }
  }

  .map {
    margin: 70px auto;
  }

  svg {
    width: 25px;
    height: 25px;
    fill: #cfc1c1;
  }
`;

const Map: React.FC = () => {
  const LhData = {
    latitude: 10.823986,
    longitude: 122.536414,
    width: "100vw",
    height: "80vh",
    zoom: 15,
  };
  const [viewPort, setViewPort] = useState(LhData);
  const { navbar } = useContext(GlobalStateContext);

  const accessToken =
    "pk.eyJ1Ijoiem5lcmV0MDMiLCJhIjoiY2tpY2xua2tzMHQ3ajJ5cG02azE4anNpZSJ9.6mvW3nR21yWG5soYdUNCow";
  const darkMap = "mapbox://styles/zneret03/ckict1j8q0dn419rwz19h8k6b";
  const lightMap = "mapbox://styles/zneret03/ckicmcmgx1u6v19maxo506rty";

  return (
    <StyledMap>
      <h1>Join Us in LH Community</h1>
      <div className="map">
        <ReactMapGL
          {...viewPort}
          mapboxApiAccessToken={accessToken}
          onViewportChange={(viewPort: any) => {
            setViewPort(viewPort);
          }}
          mapStyle={navbar ? darkMap : lightMap}
        >
          <Marker latitude={10.823986} longitude={122.536414}>
            <div>
              <Icon name="Pin" />
            </div>
          </Marker>
        </ReactMapGL>
      </div>
    </StyledMap>
  );
};

export default Map;

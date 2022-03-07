import styled from "styled-components";
import GoogleMapReact from "google-map-react";
import { animated, config, easings, useSpring } from "@react-spring/web";
import LocationMarkerIcon from "@components/ui/icons/LocationMarkerIcon";
import palette from "@styles/palette";

type TMarkerProps = {
  lat: number;
  lng: number;
};

const MARKER_WIDTH = 45;
const MARKER_HEIGHT = 45;

const Marker: React.FC<React.HTMLAttributes<HTMLDivElement> & TMarkerProps> = ({
  lat,
  lng
}) => {
  const [animation] = useSpring(() => ({
    loop: { reverse: true },
    from: { y: -MARKER_HEIGHT },
    to: { y: -MARKER_HEIGHT + 20 },
    config: {
      duration: 1000
    }
  }));
  return (
    // @ts-ignore
    <AniDiv lat={lat} lng={lng} style={animation}>
      <MarkerText>
        동대문구
        <br /> 회기동
      </MarkerText>
      <LocationMarkerIcon
        fill={palette.blue_azure}
        width={MARKER_WIDTH}
        height={MARKER_HEIGHT}
      />
    </AniDiv>
  );
};

const Gmap: React.FC = () => {
  const _DEFAULT_CENTER = {
    lat: 37.592263,
    lng: 127.058212
  };
  const _DEFAULT_ZOOM = 12;

  const createMapOptions = maps => ({
    fullscreenControl: false,
    scaleControl: false,
    minZoom: _DEFAULT_ZOOM,
    styles: [
      {
        stylers: [
          { saturation: -100 },
          { gamma: 0.8 },
          { lightness: 4 },
          { visibility: "on" }
        ]
      }
    ]
  });

  return (
    <Container>
      <GoogleMapReact
        bootstrapURLKeys={{ key: process.env.GOOGLE_MAPS_API_KEY }}
        defaultCenter={_DEFAULT_CENTER}
        defaultZoom={_DEFAULT_ZOOM}
        options={createMapOptions}
        yesIWantToUseGoogleMapApiInternals
        onGoogleApiLoaded={({ map, maps }) => console.log(map, maps)}
      >
        <Marker lat={_DEFAULT_CENTER.lat} lng={_DEFAULT_CENTER.lng} />
      </GoogleMapReact>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 90vh;
`;

const AniDiv = styled(animated.div)`
  position: "absolute";
  transform: "translate(-50%, -50%)";
`;

const MarkerText = styled.span`
  display: block;
  width: 3rem;
  color: ${palette.blue_azure};
  font-weight: bolder;
  text-align: center;
`;

export default Gmap;

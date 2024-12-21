import { AdvancedMarker, Pin } from "@vis.gl/react-google-maps";

const CustomPin = ( {lat, long} ) => (
    <AdvancedMarker position={{lat: lat, lng: long}}>
      <Pin background={'#FFFF00'} glyphColor={'#FF0'} borderColor={'#FF0'} />
    </AdvancedMarker>
  );
export default CustomPin;
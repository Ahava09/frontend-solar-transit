import { AdvancedMarker, Pin } from "@vis.gl/react-google-maps";

const CustomPin = ({ lat, long, isLast }) => {
  // Appliquez une couleur différente si c'est le dernier marqueur
  const pinColor = isLast ? '#0000FF' : '#FFFF00'; // Bleu pour le dernier, Jaune pour les autres

  return (
    <AdvancedMarker position={{ lat, lng: long }}>
      <Pin
        background={pinColor}
        glyphColor={pinColor}
        borderColor={pinColor}
      />
    </AdvancedMarker>
  );
};

export default CustomPin;

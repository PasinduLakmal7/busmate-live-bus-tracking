import { useEffect, useMemo, useState } from "react";
import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";
import { db } from "../firebase";
import { doc, onSnapshot } from "firebase/firestore";

export default function LiveBusMap({ driverId }) {
  const [pos, setPos] = useState(null);

  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY,
  });

  useEffect(() => {
    const ref = doc(db, "driver_locations", driverId);

    const unsub = onSnapshot(ref, (snap) => {
      if (!snap.exists()) return;
      const d = snap.data();

      if (typeof d.latitude === "number" && typeof d.longitude === "number") {
        setPos({ lat: d.latitude, lng: d.longitude });
      }
    });

    return () => unsub();
  }, [driverId]);

  const center = useMemo(() => pos || { lat: 6.9271, lng: 79.8612 }, [pos]); // default Colombo

  if (loadError) return <p>Map load error</p>;
  if (!isLoaded) return <p>Loading map...</p>;

  return (
    <div style={{ width: "100%", height: "500px" }}>
      <GoogleMap
        center={center}
        zoom={16}
        mapContainerStyle={{ width: "100%", height: "100%" }}
      >
        {pos && <Marker position={pos} />}
      </GoogleMap>
    </div>
  );
}

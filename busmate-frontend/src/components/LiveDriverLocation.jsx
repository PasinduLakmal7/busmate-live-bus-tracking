import { useEffect, useState } from "react";
import { db } from "../firebase";
import { doc, onSnapshot } from "firebase/firestore";

export default function LiveDriverLocation({ driverId }) {
    const [data, setData] = useState(null);
    const [status, setStatus] = useState("Waiting for location...");

    useEffect(() => {
        console.log("Listening to:", `driver_locations/${driverId}`);
        console.log("Firebase projectId:", db.app.options.projectId);

        const ref = doc(db, "driver_locations", driverId);

        const unsub = onSnapshot(
            ref,
            (snap) => {
                console.log("Snapshot received. exists =", snap.exists());
                if (snap.exists()) {
                    const d = snap.data();
                    console.log("📦 Data:", d);
                    setData(d);
                    setStatus("Location received");
                } else {
                    setData(null);
                    setStatus("Document not found");
                }
            },
            (err) => {
                console.error("Firestore onSnapshot error:", err);
                setStatus(`Error: ${err.code || ""} ${err.message || ""}`);
            }
        );

        return () => unsub();
    }, [driverId]);

    return (
        <div style={{ padding: 20 }}>
            <h3>Live Driver Location</h3>
            <p>Status: {status}</p>

            {data && (
                <div>
                    <p>Driver: {driverId}</p>
                    <p>Latitude: {data.latitude}</p>
                    <p>Longitude: {data.longitude}</p>
                    <p>Name: {data.name}</p>
                    <p>
                        UpdatedAt:{" "}
                        {data.updatedAt?.toDate ? data.updatedAt.toDate().toString() : "—"}
                    </p>
                </div>
            )}
        </div>
    );
}

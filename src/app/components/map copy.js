// components/Map.js
"use client";
import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";
import { useMemo } from "react";

const containerStyle = {
    width: "100%",
    height: "600px",
};

const center = {
    lat: 8.880187,
    lng: 76.629437,
};

function MapComponent() {
    const { isLoaded } = useJsApiLoader({
        id: "google-map-script",
        googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
    });

    const options = useMemo(
        () => ({
            disableDefaultUI: false,
            clickableIcons: false,
            mapId: "YOUR_MAP_ID", // Optional, for custom map styling
        }),
        []
    );

    return (isLoaded ? (
        <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={15}
            options={options}
        ></GoogleMap>
    ) : (
        <div>Loading...</div>
    ));
}

export default MapComponent;
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

    return (
        <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3942.013648382302!2d76.62313247518834!3d8.878320691177132!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b05fcb94040720d%3A0xddcd712609c47eea!2sFathima%20Memorial%20Training%20College!5e0!3m2!1sen!2sin!4v1751609680384!5m2!1sen!2sin"
            width="100%"
            height="500"
            allowFullScreen />
    );
}

export default MapComponent;
import { Loader } from "@googlemaps/js-api-loader";

const loader = new Loader({
  apiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
  version: "weekly",
  libraries: ["places", "geometry"],
});

export const initMap = async (mapContainer, options = {}) => {
  await loader.load();
  return new window.google.maps.Map(mapContainer, {
    center: { lat: 0, lng: 0 },
    zoom: 8,
    ...options,
  });
};

export const getDistance = (origin, destination) => {
  return new Promise((resolve) => {
    const service = new window.google.maps.DistanceMatrixService();
    service.getDistanceMatrix(
      {
        origins: [origin],
        destinations: [destination],
        travelMode: "DRIVING",
      },
      (response, status) => {
        if (status === "OK") {
          resolve(response.rows[0].elements[0]);
        } else {
          resolve(null);
        }
      }
    );
  });
};

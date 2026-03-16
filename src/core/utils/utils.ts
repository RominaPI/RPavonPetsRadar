import { envs } from "src/config/envs"

export const generateMapBoxImage = (lat: number, lon: number): string => {
    const accesToken = envs.MAPBOX_TOKEN;
    const zoom = 11;
    const width = 800;
    const height = 400; 
    return `https://api.mapbox.com/styles/v1/mapbox/light-v11/static/pin-s-l+000(${lon},${lat})/${lon},${lat},${zoom}/${height}x${width}?access_token=${accesToken}`
}
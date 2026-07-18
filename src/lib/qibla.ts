export const KAABA: Coordinates = {
  latitude: 21.4224779,
  longitude: 39.8251832,
};

export interface Coordinates {
  latitude: number;
  longitude: number;
}

export interface QiblaResult {
  bearing: number;
  distanceKm: number;
}

const EARTH_RADIUS_KM = 6371.0088;

const toRadians = (degrees: number): number => (degrees * Math.PI) / 180;
const toDegrees = (radians: number): number => (radians * 180) / Math.PI;

export function normalizeDegrees(value: number): number {
  return ((value % 360) + 360) % 360;
}

export function shortestAngle(value: number): number {
  const normalized = normalizeDegrees(value);
  return normalized > 180 ? normalized - 360 : normalized;
}

export function calculateQiblaBearing(
  origin: Coordinates,
  destination: Coordinates = KAABA,
): number {
  const latitude1 = toRadians(origin.latitude);
  const latitude2 = toRadians(destination.latitude);
  const deltaLongitude = toRadians(destination.longitude - origin.longitude);

  const y = Math.sin(deltaLongitude) * Math.cos(latitude2);
  const x =
    Math.cos(latitude1) * Math.sin(latitude2) -
    Math.sin(latitude1) * Math.cos(latitude2) * Math.cos(deltaLongitude);

  return normalizeDegrees(toDegrees(Math.atan2(y, x)));
}

export function calculateDistanceKm(
  origin: Coordinates,
  destination: Coordinates = KAABA,
): number {
  const latitude1 = toRadians(origin.latitude);
  const latitude2 = toRadians(destination.latitude);
  const deltaLatitude = latitude2 - latitude1;
  const deltaLongitude = toRadians(destination.longitude - origin.longitude);

  const haversine =
    Math.sin(deltaLatitude / 2) ** 2 +
    Math.cos(latitude1) * Math.cos(latitude2) * Math.sin(deltaLongitude / 2) ** 2;

  return 2 * EARTH_RADIUS_KM * Math.atan2(Math.sqrt(haversine), Math.sqrt(1 - haversine));
}

export function calculateQibla(
  origin: Coordinates,
  destination: Coordinates = KAABA,
): QiblaResult {
  return {
    bearing: calculateQiblaBearing(origin, destination),
    distanceKm: calculateDistanceKm(origin, destination),
  };
}

export function getRelativeQiblaBearing(qiblaBearing: number, deviceHeading: number): number {
  return shortestAngle(qiblaBearing - deviceHeading);
}

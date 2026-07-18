import type { APIRoute } from 'astro';
import { qiblaCities } from '../../content/cities';
import { calculateQibla } from '../../lib/qibla';

export const GET: APIRoute = () => {
  const cities = qiblaCities.map((city) => {
    const result = calculateQibla({latitude:city.latitude,longitude:city.longitude});
    return {...city,bearingFromTrueNorth:Number(result.bearing.toFixed(2)),distanceKm:Math.round(result.distanceKm)};
  });
  return new Response(JSON.stringify({name:'GetQibla verified city bearings',method:'Initial great-circle bearing to 21.4224779, 39.8251832',updated:'2026-07-18',license:'MIT',cities},null,2),{headers:{'Content-Type':'application/json; charset=utf-8'}});
};

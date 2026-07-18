export interface QiblaCity {
  slug: string; city: string; region: string; country: string; latitude: number; longitude: number; note: string;
}

export const qiblaCities: QiblaCity[] = [
  {slug:'new-york',city:'New York',region:'New York',country:'United States',latitude:40.7128,longitude:-74.006,note:'The shortest great-circle route begins north-east, even though Makkah can look south-east on a flat map.'},
  {slug:'boston',city:'Boston',region:'Massachusetts',country:'United States',latitude:42.3601,longitude:-71.0589,note:'The Qibla begins north-east from Boston along the shortest route over the globe.'},
  {slug:'london',city:'London',region:'England',country:'United Kingdom',latitude:51.5074,longitude:-0.1278,note:'From London the Qibla is generally south-east. The exact true-north angle is more useful than the broad direction alone.'},
  {slug:'karachi',city:'Karachi',region:'Sindh',country:'Pakistan',latitude:24.8607,longitude:67.0011,note:'From Karachi the Qibla is almost due west, with the exact angle slightly south of west.'},
  {slug:'toronto',city:'Toronto',region:'Ontario',country:'Canada',latitude:43.6532,longitude:-79.3832,note:'The shortest great-circle direction from Toronto begins north-east rather than following a straight line on a flat map.'},
  {slug:'dubai',city:'Dubai',region:'Dubai',country:'United Arab Emirates',latitude:25.2048,longitude:55.2708,note:'From Dubai the Qibla is west-south-west toward Makkah.'},
  {slug:'sydney',city:'Sydney',region:'New South Wales',country:'Australia',latitude:-33.8688,longitude:151.2093,note:'From Sydney the Qibla is slightly north of due west on a true-north compass.'},
];

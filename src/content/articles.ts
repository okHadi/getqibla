export interface ArticleSection { heading: string; paragraphs?: string[]; bullets?: string[] }
export interface ArticleFaq { question: string; answer: string }
export interface Article {
  slug: string; title: string; description: string; heading: string; summary: string;
  sections: ArticleSection[]; faqs?: ArticleFaq[]; sources?: { label: string; href: string }[];
}

export const updatedDate = '2026-07-18';

export const articles: Article[] = [
  {
    slug:'how-to-find-qibla-direction', title:'How to Find Qibla Direction on Your Phone | GetQibla',
    description:'Learn how to find the Qibla direction from your location using a phone compass, a Qibla angle or a separate compass.',
    heading:'How to find Qibla direction',
    summary:'The quickest method is to use your phone’s location and compass. Allow both permissions, hold the phone steady away from metal, and turn until the Qibla arrow aligns. The calculated angle tells you the same direction clockwise from true north.',
    sections:[
      {heading:'Find Qibla with your phone',bullets:['Open GetQibla and tap Find Qibla.','Allow location access so the browser can calculate the direction from where you are.','Allow motion or compass access if your phone asks.','Turn slowly until the arrow becomes green, then face the top of the phone.']},
      {heading:'Is Qibla east or west?',paragraphs:['There is no single answer for every country. The Kaaba is fixed in Makkah, but your position changes the direction. From Karachi it is roughly west. From New York and Toronto the shortest great-circle direction begins north-east.']},
      {heading:'Use the angle with a compass',paragraphs:['A Qibla angle starts at true north and moves clockwise. If the result is 268°, begin at north and turn clockwise to 268°, which is just south of west. Phone compasses can differ from true north because of magnetic declination and nearby interference.']},
    ],
    faqs:[{question:'How do I find Qibla from my current location?',answer:'Allow GetQibla to use your location and phone compass, then turn until the arrow becomes green.'},{question:'Can I use a normal compass?',answer:'Yes. Read the Qibla angle and measure that number of degrees clockwise from true north.'}],
  },
  {
    slug:'qibla-angle', title:'Qibla Angle Explained – Degrees from True North | GetQibla',
    description:'Understand what a Qibla angle means, how compass degrees work and why the direction is measured clockwise from true north.',
    heading:'What the Qibla angle means',
    summary:'A Qibla angle is the initial direction from your location to the Kaaba, measured clockwise from true north. An angle of 0° is north, 90° east, 180° south and 270° west. It is more precise than a broad label such as west or north-east.',
    sections:[
      {heading:'Read compass degrees',bullets:['0° means north.','90° means east.','180° means south.','270° means west.','A value between them gives a more exact direction.']},
      {heading:'True north and magnetic north',paragraphs:['The calculated Qibla bearing is based on geographic, or true, north. A magnetic compass points toward magnetic north. The difference is called magnetic declination and varies by place and time. A phone may compensate for it, but browser sensor behavior differs by device.']},
      {heading:'Why apps can show different numbers',paragraphs:['Some services display a true bearing, others display an adjusted magnetic angle, and some label a broad direction only. Always check what the number is measured from before comparing two results.']},
    ],
    faqs:[{question:'What degree is Qibla on a compass?',answer:'It depends on your location. Use the calculated angle from your coordinates and measure it clockwise from true north.'},{question:'Is Qibla exactly west?',answer:'Only in some places. Even where the general direction is west, the exact bearing may be slightly north or south of west.'}],
  },
  {
    slug:'qibla-compass-not-working', title:'Qibla Compass Not Working? Fix the Direction | GetQibla',
    description:'Fix a Qibla compass that points the wrong way, jumps or does not move. Check permissions, calibration, metal interference and browser support.',
    heading:'Qibla compass not working',
    summary:'A phone Qibla compass can fail because motion access is blocked, the device has no compass sensor, the compass needs calibration, or nearby magnets and metal are interfering. Check permissions first, then move away from interference and calibrate the phone.',
    sections:[
      {heading:'Check these first',bullets:['Use HTTPS and allow location access.','Allow motion and orientation access when prompted.','Move away from magnetic cases, speakers, chargers, laptops and metal furniture.','Move the phone slowly in a figure eight.','Try the browser that came with the phone if another browser blocks sensor data.']},
      {heading:'Why the direction keeps changing',paragraphs:['A magnetometer measures a weak magnetic field. Small changes in tilt, nearby electronics and metal can move the reading. Location accuracy affects the calculated bearing much less than magnetic interference affects the live arrow.']},
      {heading:'When the phone has no compass',paragraphs:['GetQibla still shows the calculated angle after it receives your location. Use that angle with a separate physical compass. A desktop computer usually has no orientation sensor.']},
    ],
    faqs:[{question:'Why is the Qibla compass pointing the opposite way?',answer:'First calibrate the phone and remove magnetic accessories. If the error remains, the browser may be reporting an unsupported or relative orientation instead of a usable compass heading.'},{question:'Why does the arrow not move?',answer:'The browser may not have motion permission, or the device may not provide compass data.'}],
  },
  {
    slug:'qibla-direction-iphone', title:'How to Find Qibla Direction on iPhone | GetQibla',
    description:'Find Qibla direction on an iPhone in Safari. Learn which location and motion permissions the live compass needs.',
    heading:'Find Qibla direction on iPhone',
    summary:'Open GetQibla in Safari, tap Find Qibla, and approve both motion and location access. Hold the iPhone flat and turn slowly until the arrow becomes green. If no motion prompt appears, check Safari and Location Services permissions.',
    sections:[
      {heading:'iPhone steps',bullets:['Open the site in Safari over HTTPS.','Tap Find Qibla.','Allow Motion & Orientation Access if requested.','Allow location while using the site.','Turn slowly until the arrow is green.']},
      {heading:'If permission was denied',paragraphs:['Open iPhone Settings and review Safari motion access and Location Services for Safari Websites. Reload the page after changing permission. Exact menu labels can differ between iOS versions.']},
      {heading:'Improve the reading',paragraphs:['Remove magnetic cases or accessories, keep the phone away from chargers and speakers, and move it in a figure eight before trying again.']},
    ],
  },
  {
    slug:'qibla-direction-android', title:'How to Find Qibla Direction on Android | GetQibla',
    description:'Find Qibla direction on Android using Chrome or your phone browser, with clear location and compass permission steps.',
    heading:'Find Qibla direction on Android',
    summary:'Open GetQibla in Chrome or your phone’s browser, tap Find Qibla and allow location access. On supported phones the browser reads the orientation sensor automatically. Turn slowly until the arrow becomes green.',
    sections:[
      {heading:'Android steps',bullets:['Open GetQibla over HTTPS.','Tap Find Qibla and allow precise location if available.','Hold the phone steady and turn slowly.','Face the top of the phone in the direction shown by the green arrow.']},
      {heading:'If the compass does not respond',paragraphs:['Check the site permissions in the browser, make sure Location Services are on, and test whether the phone has a compass sensor. Browser support varies by manufacturer.']},
      {heading:'Calibrate the compass',paragraphs:['Move the phone slowly in a figure eight and keep it away from magnetic cases, speakers, chargers and large metal objects.']},
    ],
  },
  {
    slug:'find-qibla-without-compass', title:'How to Find Qibla Without a Phone Compass | GetQibla',
    description:'Find the Qibla without a phone compass by using a calculated true-north angle with a physical compass or a verified local direction.',
    heading:'Find Qibla without a phone compass',
    summary:'You can calculate the Qibla angle from your location even when the phone has no compass sensor. Apply that angle clockwise from true north with a separate physical compass, or use a direction confirmed by a local mosque or another reliable local reference.',
    sections:[
      {heading:'Use a physical compass',bullets:['Use GetQibla to calculate the angle from your location.','Find true north, accounting for local magnetic declination if necessary.','Turn clockwise by the displayed angle.','Mark or remember that direction.']},
      {heading:'Use a trusted local direction',paragraphs:['A nearby established mosque can provide a useful local reference. Buildings and prayer spaces should be checked rather than assumed, especially when precision matters.']},
      {heading:'About sun-based methods',paragraphs:['The Sun can be used to establish directions, but the method depends on date, time and location. Use an authoritative local astronomical source rather than a generic rule.']},
    ],
  },
  {
    slug:'how-qibla-is-calculated', title:'How Qibla Direction Is Calculated | GetQibla Method',
    description:'Read GetQibla’s open calculation method, Kaaba coordinates, great-circle bearing formula, test locations and compass limitations.',
    heading:'How Qibla direction is calculated',
    summary:'GetQibla calculates the initial great-circle bearing from your coordinates to the Kaaba at 21.4224779° N, 39.8251832° E. The result is a clockwise angle from true north. On supported phones, that angle is compared with the device heading to rotate the arrow.',
    sections:[
      {heading:'The calculation',paragraphs:['The latitude and longitude of both points are converted to radians. Spherical trigonometry gives the initial bearing of the shortest route over the Earth’s surface. The result is normalized to a value from 0° to less than 360°.']},
      {heading:'What runs on the device',paragraphs:['The browser requests your coordinates and reads orientation events when available. GetQibla performs the bearing and arrow calculations in browser JavaScript. The open-source project does not send those readings to an application server.']},
      {heading:'Accuracy limits',paragraphs:['The mathematical bearing is deterministic for the supplied coordinates. The live arrow can still be affected by location accuracy, magnetic declination, sensor calibration, tilt, metal, magnets and browser differences. GetQibla does not claim perfect compass accuracy.']},
      {heading:'Open test data',paragraphs:['The project publishes calculation tests and a machine-readable city bearing dataset so results can be checked independently.']},
    ],
    sources:[{label:'Google Qibla Finder calculation explanation',href:'https://support.google.com/faqs/answer/7364753?hl=en'},{label:'GetQibla source code',href:'https://github.com/okHadi/getqibla'},{label:'GetQibla city bearing data',href:'/data/qibla-bearings.json'}],
  },
  {
    slug:'privacy', title:'Privacy | GetQibla', description:'How GetQibla handles location and compass data. Calculations run in your browser and no account is required.', heading:'Privacy',
    summary:'GetQibla is designed to calculate Qibla direction in your browser. The open-source application does not send your coordinates or compass readings to an application server and does not require an account.',
    sections:[
      {heading:'Location',paragraphs:['Your browser asks before sharing location. The coordinates are used in browser memory to calculate the bearing to the Kaaba. You can remove permission at any time in browser settings.']},
      {heading:'Compass and motion',paragraphs:['On supported phones, orientation readings rotate the compass dial and Qibla arrow. They are processed on the current page.']},
      {heading:'Storage and analytics',paragraphs:['The open-source project does not require analytics, advertising cookies or an account. If a deployment owner adds third-party services, that deployment should update this notice.']},
      {heading:'Source code',paragraphs:['The implementation can be inspected publicly on GitHub.']},
    ],
    sources:[{label:'GetQibla source code',href:'https://github.com/okHadi/getqibla'}],
  },
];

export const articleSlugs = articles.map((article) => article.slug);

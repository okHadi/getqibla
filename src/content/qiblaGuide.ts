export const qiblaGuide = {
  introduction:
    'The Qibla is the direction to the Kaaba in Makkah, Saudi Arabia. Muslims face it during salah (prayer). The direction changes from place to place, so your location matters.',
  steps: [
    {
      title: 'Allow your location',
      text: 'Tap Find Qibla and allow location access. GetQibla uses it in your browser to calculate the direction from where you are.',
    },
    {
      title: 'Allow compass access',
      text: 'If your phone asks for compass or motion access, allow it. This lets the arrow respond as you turn your phone.',
    },
    {
      title: 'Move your phone slowly',
      text: 'Hold your phone steady and move it slowly until the arrow turns green. Keep it away from magnets and large metal objects.',
    },
    {
      title: 'Face the arrow',
      text: 'When the arrow is green, point the top of your phone in that direction. That is the Qibla from your location.',
    },
  ],
  calculation:
    'GetQibla uses your latitude and longitude and the Kaaba’s fixed coordinates to calculate the initial great-circle bearing—the shortest direction over the Earth’s surface. It then compares that Qibla angle with the compass heading from your phone. The calculation runs in your browser; your location and sensor readings are not sent to a server.',
  facts: [
    'The Kaaba is in Masjid al-Haram in Makkah, Saudi Arabia.',
    'There is no single Qibla compass direction for everyone. It depends on where you are.',
    'The angle is measured clockwise from north: 0° is north, 90° is east, 180° is south, and 270° is west.',
    'A phone compass can be affected by magnets and nearby metal. Calibrate it if the reading jumps or looks wrong.',
  ],
  faqs: [
    {
      question: 'What is the Qibla direction?',
      answer:
        'The Qibla is the direction Muslims face during prayer. It points to the Kaaba in Masjid al-Haram in Makkah, Saudi Arabia.',
    },
    {
      question: 'How do I find the Qibla on my phone?',
      answer:
        'Open GetQibla, tap Find Qibla, allow location and compass access, and move your phone slowly until the arrow turns green. Face the top of your phone in the arrow’s direction.',
    },
    {
      question: 'Why does the Qibla direction change?',
      answer:
        'The Qibla direction changes because the Kaaba is in one fixed place while people use the app from different locations around the world.',
    },
    {
      question: 'What does the Qibla angle mean?',
      answer:
        'The Qibla angle is measured clockwise from north. For example, 260° points a little south of due west, while 270° is due west.',
    },
    {
      question: 'Does GetQibla store my location?',
      answer:
        'No. GetQibla calculates the Qibla direction in your browser. Your location and compass readings are not sent to a server, and no account is needed.',
    },
    {
      question: 'Why is my phone compass inaccurate?',
      answer:
        'Magnets, metal objects, and a phone that needs calibration can affect a compass. Move away from interference and use the Calibrate compass instruction in GetQibla. Some browsers also do not provide compass data.',
    },
  ],
} as const;

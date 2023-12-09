const Questions = [
  {
    question: 'Which gender do you prefer your roommate identify as?',
    fieldName: 'genderPreference',
    options: ['Female', 'Male', 'Transgender', 'Nonbinary', 'No Preference'],
    image: 'playing-game.png',
  },
  {
    question: 'Which age group do you prefer your roommate belong to?',
    fieldName: 'preferredAge',
    options: [
      '18-22',
      '23-27',
      '28-32',
      '33-37',
      '38-42',
      '43-47',
      '48-52',
      '53-55',
      '55+',
    ],
    image: 'playing-game.png',
  },
  {
    question: 'Which type of living space are you looking for?',
    fieldName: 'accommodationType',
    options: [
      'House',
      'Apartment',
      'A bed in a Shared Bedroom',
      'No preference',
    ],
    image: 'building.jpg',
  },
  {
    question:
      'Which criteria is MOST important to you when deciding on a potential roommate?',
    fieldName: 'topPreference',
    options: [
      'Cleanliness',
      'Social and lifestyle habits',
      'Financial Stability',
    ],
    image: 'twofriends-moving.jpg',
  },
];

export default Questions;

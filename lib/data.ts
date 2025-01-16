import { QuizItem } from "../types/quiz";

const data: QuizItem[] = [
  {
    id: 1,
    question: "When is Aquarius season ?",
    options: [
      " January 20 to February 18",
      "November 22 to December 21",
      "September 23 to October 23",
      "September 23 to October 23",
    ],
    answer: "January 20 to February 18",
  },
  {
    id: 2,
    question: "What is each part of the zodiac associated with?",
    options: [
      "A specific constellation",
      "A specific animal",
      "A specific plant",
      "A specific historical event",
    ],
    answer: "A specific constellation",
  },
  {
    id: 3,
    question: "When is Leo season ?",
    options: [
      "September 23 to October 23",
      "July 23 to August 22",
      "December 22 to January 19",
      "June 22 to July 22",
    ],
    answer: "July 23 to August 22",
  },
  {
    id: 4,
    question: " When is Gemini season ?",
    options: [
      "March 21 to April 19",
      "May 21 to June 20",
      "October 24 to November 21",
      "January 20 to February 18",
    ],
    answer: "May 21 to June 20",
  },
  {
    id: 5,
    question: " When is Libra season ?",
    options: [
      "February 19 to March 20",
      "May 21 to June 21",
      "January 20 to February 18",
      "September 23 to October 23",
    ],
    answer: "September 23 to October 23",
  },

  {
    id: 8,
    question: "What is Leo gifted at ?",
    options: [
      "Caring, nurturing and protective",
      "Affective and optimistic ",
      "Analytical, practical and critical",
      "Diplomatic, fair-minded and social",
    ],
    answer: "Affective and optimistic",
  },

  {
    id: 9,
    question: "What is Virgo gifted at ?",
    options: [
      "Generous and open minded",
      "Adventurous and optimistic ",
      "Analytical, practical and critical",
      "Diplomatic, fair-minded and social",
    ],
    answer: "Loyal, practical and critical",
  },
  {
    id: 10,
    question: "What is Libra gifted at ?",
    options: [
      "Caring, nurturing and protective",
      "Adventurous and optimistic ",
      "Analytical, diplomatic and loyal",
      "Diplomatic, fairx and harmonious",
    ],
    answer: "Diplomatic, fair-minded and harmonious",
  },
  {
    id: 11,
    question: "What is the origin of the word 'astrology'?",
    options: [
      "Latin terms for 'star' and 'word'",
      "Greek terms for 'star' and 'word'",
      "Roman terms for 'star' and 'word'",
      "Egyptian terms for 'star' and 'word'",
    ],
    answer: "Greek terms for 'star' and 'word'",
  },
  {
    id: 12,
    question: "How is the zodiac divided?",
    options: [
      "Into ten equal parts",
      "Into twelve equal parts",
      "Into eight equal parts",
      "Into six equal parts",
    ],
    answer: "Into twelve equal parts",
  },

  //  {
  //    "id": 13,
  //   "question": "What is Capricorn gifted at ?",
  //    "options": ["Caring, nurturing and protective", "Adventurous and optimistic ", "Curios, leaders and smart", "Diplomatic, fair-minded and social"],
  //    "answer": "Curios,leaders and smart"
  //  },

  {
    id: 14,
    question: "What is Pisces gifted at ?",
    options: [
      "Intuitive, creative and sensitive",
      "Adventurous and optimistic ",
      "Curios,leaders and smart",
      "Diplomatic, fair-minded and social",
    ],
    answer: "Intuitive, creative and sensitive",
  },
  {
    id: 15,
    question:
      "Which three core aspects of your personality are symbolized in a natal chart??",
    options: [
      "Mercury, Venus, and Mars",
      "Sun, Moon, and Ascendant",
      "Uranus, Neptune, and Pluto",
      "Jupiter, Saturn, and Pluto",
    ],
    answer: "Sun, Moon, and Ascendant",
  },
  {
    id: 16,
    question: "What does a natal chart offer?",
    options: [
      "A daily horoscope",
      "A unique, personal blueprint of your life's energies",
      "Predictions for the future",
      "Compatibility analysis",
    ],
    answer: "A unique, personal blueprint of your life's energies",
  },
  {
    id: 17,
    question: "What is a natal chart also known as?",
    options: ["Birth chart", "Horoscope", "Zodiac chart", "Astrological map"],
    answer: "A unique, personal blueprint of your life's energies",
  },
  {
    id: 18,
    question: "What do the twelve houses in a natal chart represent?",
    options: [
      "Different zodiac signs",
      "Key life areas like identity, relationships, career, and spirituality",
      "Different planets",
      "Daily horoscopes",
    ],
    answer:
      "Key life areas like identity, relationships, career, and spirituality",
  },
];

function shuffleArray(array: typeof data) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

export default shuffleArray(data);

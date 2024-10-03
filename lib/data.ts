 import { QuizItem } from "../types/quiz";
 
const data: QuizItem[] = [

  {
    "id": 1,
    "question": "When is Aquarius season ?",
    "options": [" January 20 to February 18", "November 22 to December 21", "September 23 to October 23", "September 23 to October 23"],
    "answer": "January 20 to February 18"
  },
  {
    "id": 2,
    "question": " When is Taurus Season ?",
    "options": ["June 22 to July 22", "November 22 to December 21", "April 20 to May 20", "July 23 to August 22"],
    "answer": "April 20 to May 20"
  },
  {
    "id": 3,
    "question": "When is Leo season ?",
    "options": ["September 23 to October 23", "July 23 to August 22", "December 22 to January 19", "June 22 to July 22"],
    "answer": "July 23 to August 22"
  },
  {
    "id": 4,
    "question": " When is Gemini season ?",
    "options": ["March 21 to April 19", "June 22 to July 22", "October 24 to November 21", "January 20 to February 18"],
    "answer": "May 21 to June 20"
  },
  {
    "id": 5,
    "question": " When is Libra season ?",
    "options": ["February 19 to March 20", "May 21 to June 21", "January 20 to February 18", "September 23 to October 23"],
    "answer": "September 23 to October 23"
  },
  {
    "id": 5,
    "question": "What does our Sun sign represent ?",
    "options": ["expression, sanity and joy", "Emotions and Subconscious", "Outermost Layer, First Impression", "Our Weaknesses and limitations"], 
    "answer": "expression, sanity and joy"
  },
  {
    "id": 6,
    "question": "What is Cancer gifted at ? ",
    "options": ["Caring, nurturing and protective", "Adventurous and optimistic ", "Analytical, practical and critical", "Diplomatic, fair-minded and social"],
    "answer": "Caring, nurturing and protective"
  }
  ,
  {
    "id": 7,
    "question": "What is Leo gifted at  ?",
    "options": ["Caring, nurturing and protective", "Affective and optimistic ", "Analytical, practical and critical", "Diplomatic, fair-minded and social"],
    "answer": "Affective and optimistic"
  },
   
  {
    "id": 8,
    "question": "What is Virgo gifted at ?",
    "options": ["Generous and open minded", "Adventurous and optimistic ", "Analytical, practical and critical", "Diplomatic, fair-minded and social"],
    "answer": "Loyal, practical and critical"
  },
  {
    "id": 9,
    "question": "What is Libra gifted at ?",
    "options": ["Caring, nurturing and protective", "Adventurous and optimistic ", "Analytical, diplomatic and loyal", "Diplomatic, fairx and harmonious"],
    "answer": "Diplomatic, fair-minded and harmonious"
  },
  {
    "id": 10,
    "question": "What are the weaknesses of Scorpio ?",
    "options": ["Impatient, stubborn and intense", "Stubborn, insecure and uncommunicative ", "impatient, greedy and gelous", "Intense, moody, addicted"],
   "answer": "Impatient, stubborn and intense"
  },
  {
    "id": 11,
    "question": "What are the weaknesses of Sagittarius ?",
    "options": ["Exuberant, impatient and flighty", "Unforgiving and self-critical ", "Intense, moody, addicted", "Impatient, stubborn and intense"],
    "answer": "Exuberant, impatient and flighty"
  },
   {
     "id": 12,
    "question": "What is Capricorn gifted at ?",
     "options": ["Caring, nurturing and protective", "Adventurous and optimistic ", "Curios, leaders and smart", "Diplomatic, fair-minded and social"],
     "answer": "Curios,leaders and smart"
   },
  // {
  //   "id": 13,
  //   "question": "What are the gifts of Aquarius ?",
  //   "options": ["Caring, nurturing and protective", "Adventurous and optimistic ", "Analytical, practical and critical", "Diplomatic, fair-minded and social"],
  //   "answer": "Diplomatic, fair-minded and social"
  // },
  {
    "id": 13,
    "question": "What is Pisces gifted at ?",
    "options": ["Intuitive, creative and sensitive", "Adventurous and optimistic ", "Curios,leaders and smart", "Diplomatic, fair-minded and social"],
    "answer": "Intuitive, creative and sensitive"
  }
  
 ];

 function shuffleArray(array: typeof data) {
  for (let i = array.length - 1; i > 0; i--) {
    // Generate a random index between 0 and i
    const j = Math.floor(Math.random() * (i + 1));
    // Swap elements at indices i and j
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

 export default shuffleArray(data);
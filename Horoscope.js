const birthMonth = prompt("Enter your birth month (for example: January, February, March):");
const fortunes = {
  "Capricorn": [
    "A new opportunity is coming your way. Be ready to seize it.",
    "Keep up the hard work and you will achieve your goals.",
    "Expect a pleasant surprise in the near future."
  ],
  "Aquarius": [
    "Your innovative ideas will bring you success.",
    "It's time to try something new and different.",
    "Your communication with others will open new doors for you."
  ],
  "Pisces": [
    "Trust your intuition, it is leading you on the right path.",
    "Creativity is your key to overcoming challenges.",
    "Expect a special meeting with someone who inspires you."
  ],
  "Aries": [
    "Your energy will be high today, use it wisely.",
    "Don't be afraid to take the lead.",
    "Success is waiting for you if you are brave."
  ],
  "Taurus": [
    "Patience is a virtue, and you will soon reap the fruits of your efforts.",
    "Focus on your financial and emotional stability.",
    "Enjoy quiet moments, as they renew your energy."
  ],
  "Gemini": [
    "Your communication skills will be at their best.",
    "Get ready to receive important news.",
    "Be flexible and adapt to changes."
  ],
  "Cancer": [
    "Your family relationships will be a source of happiness for you.",
    "Take care of yourself and your feelings.",
    "A small change in your environment will bring you comfort."
  ],
  "Leo": [
    "Your charisma will attract attention today.",
    "Don't be afraid to be in the spotlight.",
    "Expect appreciation for your efforts."
  ],
  "Virgo": [
    "Your precision and attention to detail will lead to great success.",
    "Organize your daily plans to get the most out of your day.",
    "You may find a solution to an old problem."
  ],
  "Libra": [
    "Seeking balance will bring you inner peace.",
    "Your collaboration with others will yield great results.",
    "Expect an enjoyable social event."
  ],
  "Scorpio": [
    "Your passion will help you overcome any obstacle.",
    "Look for the truth behind things.",
    "You might discover an important secret."
  ],
  "Sagittarius": [
    "Your adventurous spirit will lead you to new experiences.",
    "Explore ideas you haven't thought of before.",
    "Your optimism will bring you good luck."
  ]
};

let zodiacSign = "";
let fortune = "";

const lowerCaseMonth = birthMonth.toLowerCase();
if (lowerCaseMonth === "january") {
  zodiacSign = "Capricorn";
} else if (lowerCaseMonth === "february") {
  zodiacSign = "Aquarius";
} else if (lowerCaseMonth === "march") {
  zodiacSign = "Pisces";
} else if (lowerCaseMonth === "april") {
  zodiacSign = "Aries";
} else if (lowerCaseMonth === "may") {
  zodiacSign = "Taurus";
} else if (lowerCaseMonth === "june") {
  zodiacSign = "Gemini";
} else if (lowerCaseMonth === "july") {
  zodiacSign = "Cancer";
} else if (lowerCaseMonth === "august") {
  zodiacSign = "Leo";
} else if (lowerCaseMonth === "september") {
  zodiacSign = "Virgo";
} else if (lowerCaseMonth === "october") {
  zodiacSign = "Libra";
} else if (lowerCaseMonth === "november") {
  zodiacSign = "Scorpio";
} else if (lowerCaseMonth === "december") {
  zodiacSign = "Sagittarius";
} else {
  console.log("Please enter a valid birth month.");
}

if (zodiacSign) {
  const fortunesArray = fortunes[zodiacSign];
  const randomIndex = Math.floor(Math.random() * fortunesArray.length);
  fortune = fortunesArray[randomIndex];

  console.log(`Your zodiac sign is: ${zodiacSign}`);
  console.log(`Your fortune today: ${fortune}`);
}


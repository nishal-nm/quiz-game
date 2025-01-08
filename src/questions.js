const questions = [
  {
    question: "What is the capital of France?",
    options: ["Berlin", "Madrid", "Paris", "Lisbon"],
    correctAnswer: "Paris",
  },
  {
    question: "Who developed the theory of relativity?",
    options: ["Isaac Newton", "Albert Einstein", "Nikola Tesla", "Marie Curie"],
    correctAnswer: "Albert Einstein",
  },
  {
    question: "What is the smallest planet in our solar system?",
    options: ["Mars", "Earth", "Mercury", "Venus"],
    correctAnswer: "Mercury",
  },
  {
    question: "Which element has the chemical symbol 'O'?",
    options: ["Gold", "Oxygen", "Silver", "Osmium"],
    correctAnswer: "Oxygen",
  },
  {
    question: "What is the longest river in the world?",
    options: ["Amazon", "Nile", "Yangtze", "Mississippi"],
    correctAnswer: "Nile",
  },
  {
    question: "Which country is known as the Land of the Rising Sun?",
    options: ["China", "Australia", "Japan", "India"],
    correctAnswer: "Japan",
  },
  {
    question: "Who wrote 'Macbeth'?",
    options: [
      "William Shakespeare",
      "Charles Dickens",
      "Jane Austen",
      "Leo Tolstoy",
    ],
    correctAnswer: "William Shakespeare",
  },
  {
    question: "What is the hardest natural substance on Earth?",
    options: ["Gold", "Iron", "Diamond", "Quartz"],
    correctAnswer: "Diamond",
  },
  {
    question: "Which planet is known as the Red Planet?",
    options: ["Mars", "Jupiter", "Saturn", "Venus"],
    correctAnswer: "Mars",
  },
  {
    question: "What is the main ingredient in guacamole?",
    options: ["Tomato", "Avocado", "Onion", "Pepper"],
    correctAnswer: "Avocado",
  },
  {
    question: "What year did the Titanic sink?",
    options: ["1912", "1905", "1898", "1923"],
    correctAnswer: "1912",
  },
  {
    question: "What is the largest organ of the human body?",
    options: ["Heart", "Skin", "Liver", "Kidney"],
    correctAnswer: "Skin",
  },
  {
    question: "Who painted the Mona Lisa?",
    options: [
      "Vincent Van Gogh",
      "Leonardo da Vinci",
      "Pablo Picasso",
      "Claude Monet",
    ],
    correctAnswer: "Leonardo da Vinci",
  },
  {
    question: "What is the currency of Japan?",
    options: ["Yen", "Won", "Dollar", "Rupee"],
    correctAnswer: "Yen",
  },
  {
    question: "What is the boiling point of water?",
    options: ["100°C", "90°C", "120°C", "80°C"],
    correctAnswer: "100°C",
  },
  {
    question: "What is the capital of Australia?",
    options: ["Sydney", "Melbourne", "Perth", "Canberra"],
    correctAnswer: "Canberra",
  },
  {
    question:
      "Which bird is known for its colorful plumage and courtship dance?",
    options: ["Peacock", "Eagle", "Sparrow", "Penguin"],
    correctAnswer: "Peacock",
  },
  {
    question: "Which country hosted the 2016 Summer Olympics?",
    options: ["Brazil", "China", "Russia", "United Kingdom"],
    correctAnswer: "Brazil",
  },
  {
    question: "What is the largest planet in our solar system?",
    options: ["Earth", "Jupiter", "Mars", "Neptune"],
    correctAnswer: "Jupiter",
  },
  {
    question: "Who is the author of 'Pride and Prejudice'?",
    options: ["Emily Bronte", "Jane Austen", "Charles Dickens", "Mark Twain"],
    correctAnswer: "Jane Austen",
  },
  {
    question: "What is the chemical symbol for gold?",
    options: ["Au", "Ag", "Pb", "Fe"],
    correctAnswer: "Au",
  },
  {
    question: "Who painted the ceiling of the Sistine Chapel?",
    options: ["Michelangelo", "Raphael", "Leonardo da Vinci", "Donatello"],
    correctAnswer: "Michelangelo",
  },
  {
    question: "Which gas do plants absorb during photosynthesis?",
    options: ["Oxygen", "Carbon dioxide", "Nitrogen", "Hydrogen"],
    correctAnswer: "Carbon dioxide",
  },
  {
    question: "What is the capital of Italy?",
    options: ["Venice", "Rome", "Florence", "Naples"],
    correctAnswer: "Rome",
  },
  {
    question: "In what year did World War II end?",
    options: ["1941", "1945", "1939", "1950"],
    correctAnswer: "1945",
  },
  {
    question: "Who invented the telephone?",
    options: [
      "Alexander Graham Bell",
      "Thomas Edison",
      "Nikola Tesla",
      "Guglielmo Marconi",
    ],
    correctAnswer: "Alexander Graham Bell",
  },
  {
    question: "What is the hardest naturally occurring mineral?",
    options: ["Ruby", "Diamond", "Sapphire", "Quartz"],
    correctAnswer: "Diamond",
  },
  {
    question: "Which continent is the Sahara Desert located in?",
    options: ["Asia", "Africa", "Australia", "South America"],
    correctAnswer: "Africa",
  },
  {
    question: "What is the smallest bone in the human body?",
    options: ["Stapes", "Femur", "Tibia", "Ulna"],
    correctAnswer: "Stapes",
  },
  {
    question: "Who was the first President of the United States?",
    options: [
      "George Washington",
      "Abraham Lincoln",
      "John Adams",
      "Thomas Jefferson",
    ],
    correctAnswer: "George Washington",
  },
  {
    question: "What is the currency of the United Kingdom?",
    options: ["Dollar", "Euro", "Pound Sterling", "Yen"],
    correctAnswer: "Pound Sterling",
  },
  {
    question: "Who discovered penicillin?",
    options: [
      "Alexander Fleming",
      "Louis Pasteur",
      "Marie Curie",
      "Gregor Mendel",
    ],
    correctAnswer: "Alexander Fleming",
  },
  {
    question: "What is the most abundant gas in the Earth's atmosphere?",
    options: ["Oxygen", "Nitrogen", "Carbon dioxide", "Helium"],
    correctAnswer: "Nitrogen",
  },
  {
    question: "Which is the largest island in the world?",
    options: ["Greenland", "Australia", "Madagascar", "Borneo"],
    correctAnswer: "Greenland",
  },
  {
    question: "Who is the author of 'The Catcher in the Rye'?",
    options: [
      "J.D. Salinger",
      "F. Scott Fitzgerald",
      "Harper Lee",
      "George Orwell",
    ],
    correctAnswer: "J.D. Salinger",
  },
  {
    question: "Which planet is closest to the Sun?",
    options: ["Mercury", "Venus", "Earth", "Mars"],
    correctAnswer: "Mercury",
  },
  {
    question:
      "What is the main ingredient in a traditional Japanese miso soup?",
    options: ["Tofu", "Miso paste", "Seaweed", "Rice"],
    correctAnswer: "Miso paste",
  },
  {
    question: "What is the study of fossils called?",
    options: ["Archaeology", "Paleontology", "Geology", "Anthropology"],
    correctAnswer: "Paleontology",
  },
  {
    question: "What is the national animal of India?",
    options: ["Tiger", "Elephant", "Peacock", "Lion"],
    correctAnswer: "Tiger",
  },
  {
    question:
      "What gas is most commonly used to fill balloons to make them float?",
    options: ["Oxygen", "Hydrogen", "Helium", "Carbon Dioxide"],
    correctAnswer: "Helium",
  },
  {
    question: "Which planet is known as the Evening Star?",
    options: ["Mars", "Jupiter", "Venus", "Saturn"],
    correctAnswer: "Venus",
  },
  {
    question: "What is the capital of Canada?",
    options: ["Toronto", "Vancouver", "Ottawa", "Montreal"],
    correctAnswer: "Ottawa",
  },
  {
    question: "What element does 'Na' represent on the periodic table?",
    options: ["Nitrogen", "Nickel", "Neon", "Sodium"],
    correctAnswer: "Sodium",
  },
  {
    question: "Which animal is known as the ship of the desert?",
    options: ["Horse", "Elephant", "Camel", "Donkey"],
    correctAnswer: "Camel",
  },
  {
    question: "What is the longest river in the USA?",
    options: [
      "Missouri River",
      "Mississippi River",
      "Colorado River",
      "Yukon River",
    ],
    correctAnswer: "Mississippi River",
  },
  {
    question: "What is the largest animal on Earth?",
    options: ["Elephant", "Blue Whale", "Great White Shark", "Giraffe"],
    correctAnswer: "Blue Whale",
  },
  {
    question: "Who wrote 'Hamlet'?",
    options: [
      "William Shakespeare",
      "Charles Dickens",
      "Ernest Hemingway",
      "Jane Austen",
    ],
    correctAnswer: "William Shakespeare",
  },
  {
    question: "What is the currency of Switzerland?",
    options: ["Euro", "Swiss Franc", "Pound", "Dollar"],
    correctAnswer: "Swiss Franc",
  },
  {
    question: "What temperature does water freeze at?",
    options: ["0°C", "32°C", "100°C", "10°C"],
    correctAnswer: "0°C",
  },
  {
    question: "What is the chemical symbol for water?",
    options: ["H2O", "HO2", "O2", "H2"],
    correctAnswer: "H2O",
  },
  {
    question: "What is the capital of Egypt?",
    options: ["Cairo", "Alexandria", "Luxor", "Giza"],
    correctAnswer: "Cairo",
  },
  {
    question: "Who was the first woman to win a Nobel Prize?",
    options: [
      "Marie Curie",
      "Rosalind Franklin",
      "Ada Lovelace",
      "Barbara McClintock",
    ],
    correctAnswer: "Marie Curie",
  },
  {
    question: "What is the largest mammal found on land?",
    options: ["Elephant", "Rhino", "Hippo", "Giraffe"],
    correctAnswer: "Elephant",
  },
  {
    question: "What planet is known as the blue planet?",
    options: ["Earth", "Neptune", "Uranus", "Saturn"],
    correctAnswer: "Earth",
  },
  {
    question: "Who discovered gravity when he saw a falling apple?",
    options: [
      "Isaac Newton",
      "Galileo Galilei",
      "Albert Einstein",
      "Nikola Tesla",
    ],
    correctAnswer: "Isaac Newton",
  },
  {
    question: "What is the main ingredient in chocolate?",
    options: ["Milk", "Cocoa", "Butter", "Sugar"],
    correctAnswer: "Cocoa",
  },
  {
    question: "What is the hardest part of the human body?",
    options: ["Bone", "Tooth Enamel", "Skull", "Femur"],
    correctAnswer: "Tooth Enamel",
  },
  {
    question: "Which country gifted the Statue of Liberty to the USA?",
    options: ["France", "United Kingdom", "Germany", "Canada"],
    correctAnswer: "France",
  },
  {
    question: "What is the longest wall in the world?",
    options: [
      "Berlin Wall",
      "Western Wall",
      "Great Wall of China",
      "Hadrian's Wall",
    ],
    correctAnswer: "Great Wall of China",
  },
  {
    question: "Who is the author of '1984'?",
    options: ["George Orwell", "Aldous Huxley", "Ray Bradbury", "Stephen King"],
    correctAnswer: "George Orwell",
  },
  {
    question: "Which blood group is known as the universal donor?",
    options: ["A", "B", "AB", "O"],
    correctAnswer: "O",
  },
  {
    question: "Who invented the light bulb?",
    options: [
      "Thomas Edison",
      "Nikola Tesla",
      "Benjamin Franklin",
      "Alexander Graham Bell",
    ],
    correctAnswer: "Thomas Edison",
  },
  {
    question: "Which vitamin is most commonly associated with citrus fruits?",
    options: ["Vitamin A", "Vitamin B12", "Vitamin C", "Vitamin D"],
    correctAnswer: "Vitamin C",
  },
  {
    question:
      "Which organ is responsible for pumping blood throughout the body?",
    options: ["Liver", "Kidney", "Heart", "Lungs"],
    correctAnswer: "Heart",
  },
  {
    question: "Who wrote the 'Harry Potter' series?",
    options: ["J.K. Rowling", "J.R.R. Tolkien", "Stephen King", "Roald Dahl"],
    correctAnswer: "J.K. Rowling",
  },
  {
    question: "What is the largest continent on Earth?",
    options: ["Africa", "Europe", "Asia", "Antarctica"],
    correctAnswer: "Asia",
  },
  {
    question: "What is the capital of Japan?",
    options: ["Tokyo", "Kyoto", "Osaka", "Hiroshima"],
    correctAnswer: "Tokyo",
  },
  {
    question: "Which element has the chemical symbol 'Fe'?",
    options: ["Iron", "Gold", "Fluorine", "Francium"],
    correctAnswer: "Iron",
  },
  {
    question: "Who painted 'Starry Night'?",
    options: [
      "Vincent Van Gogh",
      "Pablo Picasso",
      "Claude Monet",
      "Salvador Dali",
    ],
    correctAnswer: "Vincent Van Gogh",
  },
  {
    question: "What ocean is the largest in the world?",
    options: [
      "Atlantic Ocean",
      "Indian Ocean",
      "Arctic Ocean",
      "Pacific Ocean",
    ],
    correctAnswer: "Pacific Ocean",
  },
  {
    question: "What is the most widely spoken language in the world?",
    options: ["English", "Spanish", "Mandarin", "Hindi"],
    correctAnswer: "Mandarin",
  },
  {
    question: "What is the smallest continent by land area?",
    options: ["Antarctica", "Australia", "Europe", "South America"],
    correctAnswer: "Australia",
  },
  {
    question: "Which animal is known to have the longest lifespan?",
    options: ["Elephant", "Blue Whale", "Galapagos Tortoise", "Arctic Fox"],
    correctAnswer: "Galapagos Tortoise",
  },
  {
    question: "What year did the Berlin Wall fall?",
    options: ["1989", "1987", "1991", "1985"],
    correctAnswer: "1989",
  },
  {
    question: "Who is known as the father of modern physics?",
    options: [
      "Isaac Newton",
      "Albert Einstein",
      "Galileo Galilei",
      "Niels Bohr",
    ],
    correctAnswer: "Albert Einstein",
  },
  {
    question: "What element is diamond made of?",
    options: ["Carbon", "Gold", "Silicon", "Oxygen"],
    correctAnswer: "Carbon",
  },
  {
    question: "Which country is the largest by land area?",
    options: ["China", "United States", "Canada", "Russia"],
    correctAnswer: "Russia",
  },
  {
    question: "What is the capital of Russia?",
    options: ["Moscow", "Saint Petersburg", "Novosibirsk", "Yekaterinburg"],
    correctAnswer: "Moscow",
  },
  {
    question: "What is the national flower of Japan?",
    options: ["Cherry Blossom", "Lotus", "Chrysanthemum", "Rose"],
    correctAnswer: "Cherry Blossom",
  },
  {
    question: "Who wrote 'To Kill a Mockingbird'?",
    options: ["Harper Lee", "Mark Twain", "John Steinbeck", "Ernest Hemingway"],
    correctAnswer: "Harper Lee",
  },
  {
    question: "What is the main ingredient in sushi?",
    options: ["Fish", "Rice", "Seaweed", "Soy Sauce"],
    correctAnswer: "Rice",
  },
  {
    question: "Which continent does Egypt belong to?",
    options: ["Asia", "Africa", "Europe", "Australia"],
    correctAnswer: "Africa",
  },
  {
    question: "What is the hottest planet in our solar system?",
    options: ["Mercury", "Venus", "Mars", "Jupiter"],
    correctAnswer: "Venus",
  },
  {
    question: "Who was the first person to walk on the moon?",
    options: ["Neil Armstrong", "Buzz Aldrin", "Yuri Gagarin", "John Glenn"],
    correctAnswer: "Neil Armstrong",
  },
  {
    question: "What is the longest bone in the human body?",
    options: ["Femur", "Tibia", "Fibula", "Humerus"],
    correctAnswer: "Femur",
  },
  {
    question: "Which country invented tea?",
    options: ["India", "China", "England", "Japan"],
    correctAnswer: "China",
  },
  {
    question: "What is the name of the largest ocean on Earth?",
    options: [
      "Atlantic Ocean",
      "Indian Ocean",
      "Pacific Ocean",
      "Arctic Ocean",
    ],
    correctAnswer: "Pacific Ocean",
  },
  {
    question: "What country is known as the land of white elephant?",
    options: ["India", "Thailand", "China", "Indonesia"],
    correctAnswer: "Thailand",
  },
  {
    question: "What is the name of the world's largest coral reef system?",
    options: [
      "Great Barrier Reef",
      "Red Sea Coral Reef",
      "New Caledonia Barrier Reef",
      "Mesoamerican Barrier Reef",
    ],
    correctAnswer: "Great Barrier Reef",
  },
  {
    question: "What is the name of the force holding us to the Earth?",
    options: ["Magnetism", "Gravity", "Inertia", "Friction"],
    correctAnswer: "Gravity",
  },
  {
    question: "What is the main ingredient in bread?",
    options: ["Butter", "Sugar", "Flour", "Eggs"],
    correctAnswer: "Flour",
  },
  {
    question: "What is the national sport of Japan?",
    options: ["Baseball", "Sumo Wrestling", "Soccer", "Karate"],
    correctAnswer: "Sumo Wrestling",
  },
  {
    question: "Which country is the largest producer of coffee in the world?",
    options: ["Brazil", "Vietnam", "Colombia", "Ethiopia"],
    correctAnswer: "Brazil",
  },
  {
    question: "What is the fastest land animal in the world?",
    options: ["Cheetah", "Lion", "Horse", "Ostrich"],
    correctAnswer: "Cheetah",
  },
  {
    question: "What is the capital of Germany?",
    options: ["Berlin", "Munich", "Frankfurt", "Hamburg"],
    correctAnswer: "Berlin",
  },
  {
    question: "What is the chemical formula for table salt?",
    options: ["NaCl", "KCl", "LiCl", "RbCl"],
    correctAnswer: "NaCl",
  },
  {
    question: "What is the tallest building in the world?",
    options: [
      "Shanghai Tower",
      "Burj Khalifa",
      "One World Trade Center",
      "Taipei 101",
    ],
    correctAnswer: "Burj Khalifa",
  },
  {
    question: "What is the deepest part of the world's oceans?",
    options: [
      "Mariana Trench",
      "Tonga Trench",
      "Philippine Trench",
      "Kermadec Trench",
    ],
    correctAnswer: "Mariana Trench",
  },
  {
    question: "Which country is known for constructing the Panama Canal?",
    options: ["USA", "Panama", "China", "France"],
    correctAnswer: "USA",
  },
  {
    question: "What is the national bird of the United States?",
    options: ["Bald Eagle", "Golden Eagle", "Woodpecker", "Hawk"],
    correctAnswer: "Bald Eagle",
  },
  {
    question: "Who is known as the father of computers?",
    options: [
      "Charles Babbage",
      "Alan Turing",
      "John von Neumann",
      "Bill Gates",
    ],
    correctAnswer: "Charles Babbage",
  },
  {
    question: "What is the main ingredient in traditional Italian pesto sauce?",
    options: ["Basil", "Spinach", "Kale", "Mint"],
    correctAnswer: "Basil",
  },
  {
    question: "Which animal is considered the king of the jungle?",
    options: ["Tiger", "Lion", "Elephant", "Gorilla"],
    correctAnswer: "Lion",
  },
  {
    question: "What is the chemical symbol for gold?",
    options: ["Au", "Ag", "Ga", "Ge"],
    correctAnswer: "Au",
  },
  {
    question: "Who discovered America?",
    options: [
      "Christopher Columbus",
      "Marco Polo",
      "Leif Erikson",
      "Amerigo Vespucci",
    ],
    correctAnswer: "Christopher Columbus",
  },
  {
    question: "What city is famous for its carnival celebrated annually?",
    options: ["New Orleans", "Rio de Janeiro", "Venice", "Barcelona"],
    correctAnswer: "Rio de Janeiro",
  },
  {
    question: "What is the most popular sport in the world?",
    options: ["Cricket", "Football (Soccer)", "Basketball", "Baseball"],
    correctAnswer: "Football (Soccer)",
  },
  {
    question: "What is the heaviest element?",
    options: ["Uranium", "Lead", "Plutonium", "Osmium"],
    correctAnswer: "Osmium",
  },
  {
    question: "Which animal has the longest gestation period?",
    options: ["Elephant", "Whale", "Rhinoceros", "Giraffe"],
    correctAnswer: "Elephant",
  },
  {
    question: "Who is known as the father of geometry?",
    options: ["Euclid", "Archimedes", "Pythagoras", "Aristotle"],
    correctAnswer: "Euclid",
  },
  {
    question: "What is the currency of India?",
    options: ["Rupee", "Rupiah", "Ringgit", "Renminbi"],
    correctAnswer: "Rupee",
  },
  {
    question: "Which mammal is known to have the most powerful bite?",
    options: ["Lion", "Tiger", "Hyena", "Crocodile"],
    correctAnswer: "Crocodile",
  },
  {
    question: "What color is cobalt?",
    options: ["Red", "Blue", "Green", "Yellow"],
    correctAnswer: "Blue",
  },
  {
    question: "Who wrote 'The Great Gatsby'?",
    options: [
      "F. Scott Fitzgerald",
      "Ernest Hemingway",
      "John Steinbeck",
      "William Faulkner",
    ],
    correctAnswer: "F. Scott Fitzgerald",
  },
  {
    question: "What is the symbol for pi?",
    options: ["π", "Σ", "Δ", "Ω"],
    correctAnswer: "π",
  },
  {
    question: "What is the highest military award in the United States?",
    options: ["Silver Star", "Medal of Honor", "Purple Heart", "Bronze Star"],
    correctAnswer: "Medal of Honor",
  },
  {
    question: "What is the most abundant metal in the Earth's crust?",
    options: ["Iron", "Aluminum", "Copper", "Silver"],
    correctAnswer: "Aluminum",
  },
  {
    question:
      "What is the name of the first artificial satellite launched by the Soviet Union?",
    options: ["Sputnik", "Vostok", "Luna", "Mir"],
    correctAnswer: "Sputnik",
  },
  {
    question: "Who was the first female Prime Minister of the United Kingdom?",
    options: [
      "Margaret Thatcher",
      "Theresa May",
      "Indira Gandhi",
      "Angela Merkel",
    ],
    correctAnswer: "Margaret Thatcher",
  },
  {
    question: "What is the largest bird of prey in the world?",
    options: ["Golden Eagle", "Bald Eagle", "Harpy Eagle", "Condor"],
    correctAnswer: "Harpy Eagle",
  },
  {
    question: "Who was the first person to propose the theory of evolution?",
    options: [
      "Charles Darwin",
      "Gregor Mendel",
      "Louis Pasteur",
      "Alfred Russel Wallace",
    ],
    correctAnswer: "Charles Darwin",
  },
  {
    question: "What is the main ingredient in ratatouille?",
    options: ["Tomato", "Eggplant", "Bell Pepper", "Zucchini"],
    correctAnswer: "Tomato",
  },
  {
    question: "What is the chemical symbol for silver?",
    options: ["Ag", "Au", "Si", "S"],
    correctAnswer: "Ag",
  },
  {
    question: "What is the capital of Sweden?",
    options: ["Stockholm", "Gothenburg", "Malmo", "Uppsala"],
    correctAnswer: "Stockholm",
  },
  {
    question: "Which gas is the most abundant in the Earth's atmosphere?",
    options: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Argon"],
    correctAnswer: "Nitrogen",
  },
  {
    question: "Who was the Roman god of war?",
    options: ["Mars", "Jupiter", "Neptune", "Vulcan"],
    correctAnswer: "Mars",
  },
  {
    question: "What is the main ingredient in a margarita cocktail?",
    options: ["Vodka", "Tequila", "Rum", "Whiskey"],
    correctAnswer: "Tequila",
  },
  {
    question: "Which planet is known as the 'Dwarf Planet'?",
    options: ["Mars", "Venus", "Pluto", "Mercury"],
    correctAnswer: "Pluto",
  },
  {
    question: "Who invented dynamite?",
    options: ["Alfred Nobel", "Thomas Edison", "Nikola Tesla", "Marie Curie"],
    correctAnswer: "Alfred Nobel",
  },
  {
    question: "What is the study of the weather called?",
    options: ["Geology", "Meteorology", "Ecology", "Astrology"],
    correctAnswer: "Meteorology",
  },
  {
    question: "What is the largest type of deer?",
    options: ["White-tailed deer", "Moose", "Reindeer", "Elk"],
    correctAnswer: "Moose",
  },
  {
    question: "What type of animal is a Komodo dragon?",
    options: ["Bird", "Mammal", "Fish", "Reptile"],
    correctAnswer: "Reptile",
  },
  {
    question: "What is the capital of Brazil?",
    options: ["Rio de Janeiro", "São Paulo", "Brasília", "Salvador"],
    correctAnswer: "Brasília",
  },
  {
    question: "What is the currency of Brazil?",
    options: ["Real", "Peso", "Dollar", "Euro"],
    correctAnswer: "Real",
  },
  {
    question: "What color is typically associated with envy?",
    options: ["Red", "Blue", "Green", "Yellow"],
    correctAnswer: "Green",
  },
  {
    question: "Who is the Greek god of the sea?",
    options: ["Zeus", "Poseidon", "Apollo", "Hades"],
    correctAnswer: "Poseidon",
  },
  {
    question: "What is the smallest country in the world?",
    options: ["Vatican City", "Monaco", "Nauru", "Liechtenstein"],
    correctAnswer: "Vatican City",
  },
  {
    question: "Who is the author of 'The Hobbit'?",
    options: [
      "J.R.R. Tolkien",
      "C.S. Lewis",
      "J.K. Rowling",
      "George R.R. Martin",
    ],
    correctAnswer: "J.R.R. Tolkien",
  },
  {
    question: "What is the pH level of pure water?",
    options: ["7", "5", "9", "11"],
    correctAnswer: "7",
  },
  {
    question: "What is the main ingredient in traditional Scottish haggis?",
    options: ["Beef", "Pork", "Lamb", "Chicken"],
    correctAnswer: "Lamb",
  },
  {
    question: "Which organ is affected by cirrhosis?",
    options: ["Heart", "Brain", "Liver", "Lungs"],
    correctAnswer: "Liver",
  },
  {
    question: "Who composed the music for 'The Magic Flute'?",
    options: [
      "Wolfgang Amadeus Mozart",
      "Ludwig van Beethoven",
      "Johann Sebastian Bach",
      "Richard Wagner",
    ],
    correctAnswer: "Wolfgang Amadeus Mozart",
  },
  {
    question: "What is the boiling point of water at sea level?",
    options: ["100°C", "90°C", "110°C", "120°C"],
    correctAnswer: "100°C",
  },
  {
    question: "What type of animal is a penguin?",
    options: ["Mammal", "Bird", "Fish", "Reptile"],
    correctAnswer: "Bird",
  },
  {
    question: "What color is the circle on the Japanese flag?",
    options: ["Red", "White", "Blue", "Green"],
    correctAnswer: "Red",
  },
  {
    question: "What is the name of the largest lake in the world?",
    options: ["Lake Superior", "Lake Victoria", "Caspian Sea", "Lake Baikal"],
    correctAnswer: "Caspian Sea",
  },
  {
    question: "Which country is the leading producer of wool?",
    options: ["Australia", "New Zealand", "China", "India"],
    correctAnswer: "Australia",
  },
  {
    question: "What is the largest bird capable of flight?",
    options: ["Albatross", "Condor", "Eagle", "Swan"],
    correctAnswer: "Albatross",
  },
  {
    question: "Who invented the phonograph?",
    options: [
      "Thomas Edison",
      "Alexander Graham Bell",
      "Nikola Tesla",
      "Benjamin Franklin",
    ],
    correctAnswer: "Thomas Edison",
  },
  {
    question: "What is the capital of India?",
    options: ["Mumbai", "New Delhi", "Bangalore", "Kolkata"],
    correctAnswer: "New Delhi",
  },
  {
    question: "Which chemical element has the highest electrical conductivity?",
    options: ["Silver", "Copper", "Gold", "Aluminum"],
    correctAnswer: "Silver",
  },
  {
    question: "What animal is known as the king of the jungle?",
    options: ["Lion", "Tiger", "Elephant", "Gorilla"],
    correctAnswer: "Lion",
  },
  {
    question:
      "What is the term for a word that is similar in meaning to another word?",
    options: ["Antonym", "Synonym", "Homonym", "Acronym"],
    correctAnswer: "Synonym",
  },
  {
    question: "What is the main ingredient in the Indian dish called 'dal'?",
    options: ["Rice", "Bread", "Lentils", "Chicken"],
    correctAnswer: "Lentils",
  },
  {
    question:
      "What gas do living creatures exhale that is used by plants during photosynthesis?",
    options: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Hydrogen"],
    correctAnswer: "Carbon Dioxide",
  },
  {
    question: "What planet is famous for its beautiful rings?",
    options: ["Mars", "Jupiter", "Saturn", "Neptune"],
    correctAnswer: "Saturn",
  },
  {
    question: "What is the hardest natural substance on Earth?",
    options: ["Gold", "Iron", "Diamond", "Quartz"],
    correctAnswer: "Diamond",
  },
  {
    question: "What is the main ingredient in hummus?",
    options: ["Lentils", "Chickpeas", "Beans", "Peas"],
    correctAnswer: "Chickpeas",
  },
  {
    question: "What metal is primarily used to make steel?",
    options: ["Iron", "Copper", "Aluminum", "Nickel"],
    correctAnswer: "Iron",
  },
  {
    question: "What is the tallest animal in the world?",
    options: ["Elephant", "Giraffe", "Bear", "Horse"],
    correctAnswer: "Giraffe",
  },
  {
    question: "Which planet is closest to Earth?",
    options: ["Mars", "Venus", "Mercury", "Jupiter"],
    correctAnswer: "Venus",
  },
  {
    question: "Who wrote 'Brave New World'?",
    options: [
      "Aldous Huxley",
      "George Orwell",
      "Philip K. Dick",
      "Isaac Asimov",
    ],
    correctAnswer: "Aldous Huxley",
  },
  {
    question: "What is the largest organ in the human body?",
    options: ["Heart", "Skin", "Liver", "Kidney"],
    correctAnswer: "Skin",
  },
  {
    question:
      "What natural resource is most commonly used to produce electricity?",
    options: ["Water", "Oil", "Coal", "Wind"],
    correctAnswer: "Coal",
  },
  {
    question: "What country has the most natural lakes?",
    options: ["USA", "Canada", "Russia", "India"],
    correctAnswer: "Canada",
  },
  {
    question: "Who is considered the father of medicine?",
    options: ["Hippocrates", "Aristotle", "Socrates", "Galileo"],
    correctAnswer: "Hippocrates",
  },
  {
    question: "What is the primary language spoken in Brazil?",
    options: ["Spanish", "Portuguese", "English", "French"],
    correctAnswer: "Portuguese",
  },
  {
    question: "Which country is the largest exporter of sugar?",
    options: ["India", "Brazil", "USA", "China"],
    correctAnswer: "Brazil",
  },
  {
    question: "What color is the blood of a lobster?",
    options: ["Red", "Blue", "Green", "Clear"],
    correctAnswer: "Blue",
  },
  {
    question: "What is the most abundant element in the Earth's crust?",
    options: ["Oxygen", "Silicon", "Aluminum", "Iron"],
    correctAnswer: "Oxygen",
  },
  {
    question: "What is the name of the fairy in Peter Pan?",
    options: ["Wendy", "Tinker Bell", "Peter Pan", "Captain Hook"],
    correctAnswer: "Tinker Bell",
  },
  {
    question: "Who was the first person to climb Mount Everest?",
    options: [
      "Edmund Hillary",
      "Tenzing Norgay",
      "Chris Bonington",
      "Reinhold Messner",
    ],
    correctAnswer: "Edmund Hillary",
  },
  {
    question: "Which country is known as the land of the midnight sun?",
    options: ["Norway", "Sweden", "Finland", "Iceland"],
    correctAnswer: "Norway",
  },
  {
    question: "What is the smallest bird in the world?",
    options: ["Hummingbird", "Sparrow", "Robin", "Pigeon"],
    correctAnswer: "Hummingbird",
  },
  {
    question: "Who was the first woman in space?",
    options: [
      "Valentina Tereshkova",
      "Sally Ride",
      "Mae Jemison",
      "Kalpana Chawla",
    ],
    correctAnswer: "Valentina Tereshkova",
  },
  {
    question: "What is the capital of New Zealand?",
    options: ["Auckland", "Christchurch", "Wellington", "Hamilton"],
    correctAnswer: "Wellington",
  },
  {
    question: "What is the currency of Russia?",
    options: ["Rubel", "Ruble", "Rupiah", "Euro"],
    correctAnswer: "Ruble",
  },
  {
    question: "Which country is the smallest by population?",
    options: ["Monaco", "Vatican City", "Tuvalu", "San Marino"],
    correctAnswer: "Vatican City",
  },
  // Add similar questions following this pattern...
];

export default questions;

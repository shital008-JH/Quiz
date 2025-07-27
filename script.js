const quizData = [
    { question: "What is the capital of France?", a: "Berlin", b: "Madrid", c: "Paris", d: "Rome", correct: "c" },
    { question: "Which planet is known as the Red Planet?", a: "Earth", b: "Mars", c: "Jupiter", d: "Venus", correct: "b" },
    { question: "What is the largest ocean on Earth?", a: "Atlantic Ocean", b: "Indian Ocean", c: "Arctic Ocean", d: "Pacific Ocean", correct: "d" },
    { question: "Who wrote 'Romeo and Juliet'?", a: "Charles Dickens", b: "William Shakespeare", c: "Mark Twain", d: "Jane Austen", correct: "b" },
    { question: "What is the square root of 64?", a: "6", b: "7", c: "8", d: "9", correct: "c" },
    { question: "What is the chemical symbol for water?", a: "O2", b: "H2O", c: "CO2", d: "NaCl", correct: "b" },
    { question: "Who is known as the Father of Computers?", a: "Alan Turing", b: "Bill Gates", c: "Charles Babbage", d: "Steve Jobs", correct: "c" },
    { question: "Which is the smallest continent by land area?", a: "Europe", b: "Australia", c: "Antarctica", d: "South America", correct: "b" },
    { question: "How many colors are there in a rainbow?", a: "5", b: "6", c: "7", d: "8", correct: "c" },
    { question: "Who painted the Mona Lisa?", a: "Vincent van Gogh", b: "Pablo Picasso", c: "Leonardo da Vinci", d: "Michelangelo", correct: "c" },
    { question: "What is the hardest natural substance on Earth?", a: "Gold", b: "Diamond", c: "Iron", d: "Platinum", correct: "b" },
    { question: "What is the tallest mountain in the world?", a: "K2", b: "Kangchenjunga", c: "Lhotse", d: "Mount Everest", correct: "d" },
    { question: "Which element has the chemical symbol 'O'?", a: "Oxygen", b: "Gold", c: "Silver", d: "Iron", correct: "a" },
    { question: "Who discovered penicillin?", a: "Marie Curie", b: "Alexander Fleming", c: "Louis Pasteur", d: "Isaac Newton", correct: "b" },
    { question: "Which country is known as the Land of the Rising Sun?", a: "China", b: "Japan", c: "Thailand", d: "South Korea", correct: "b" },
    { question: "What is the longest river in the world?", a: "Amazon River", b: "Nile River", c: "Yangtze River", d: "Mississippi River", correct: "b" },
    { question: "What is the largest planet in our solar system?", a: "Earth", b: "Mars", c: "Jupiter", d: "Saturn", correct: "c" },
    { question: "Who invented the telephone?", a: "Alexander Graham Bell", b: "Thomas Edison", c: "Nikola Tesla", d: "Guglielmo Marconi", correct: "a" },
    { question: "What is the main ingredient in guacamole?", a: "Tomato", b: "Onion", c: "Avocado", d: "Pepper", correct: "c" },
    { question: "Which planet is closest to the sun?", a: "Venus", b: "Earth", c: "Mercury", d: "Mars", correct: "c" },
    { question: "What is the capital of Canada?", a: "Toronto", b: "Vancouver", c: "Ottawa", d: "Montreal", correct: "c" },
    { question: "Who wrote 'To Kill a Mockingbird'?", a: "Harper Lee", b: "Mark Twain", c: "F. Scott Fitzgerald", d: "J.D. Salinger", correct: "a" },
    { question: "Which is the largest mammal in the world?", a: "Elephant", b: "Blue whale", c: "Giraffe", d: "Hippopotamus", correct: "b" },
    { question: "What is the currency of Japan?", a: "Yuan", b: "Won", c: "Yen", d: "Ringgit", correct: "c" },
    { question: "Who developed the theory of relativity?", a: "Isaac Newton", b: "Albert Einstein", c: "Galileo Galilei", d: "Stephen Hawking", correct: "b" },
    { question: "What is the capital of Italy?", a: "Milan", b: "Venice", c: "Florence", d: "Rome", correct: "d" },
    { question: "Which gas do plants absorb from the atmosphere?", a: "Oxygen", b: "Carbon dioxide", c: "Nitrogen", d: "Helium", correct: "b" },
    { question: "Which organ in the human body is responsible for pumping blood?", a: "Brain", b: "Lungs", c: "Heart", d: "Kidney", correct: "c" },
    { question: "What is the largest island in the world?", a: "Greenland", b: "New Guinea", c: "Borneo", d: "Madagascar", correct: "a" },
    { question: "Who is the author of 'Harry Potter' series?", a: "J.R.R. Tolkien", b: "J.K. Rowling", c: "Stephen King", d: "George R.R. Martin", correct: "b" },
    { question: "What is the smallest unit of life?", a: "Atom", b: "Molecule", c: "Cell", d: "Organ", correct: "c" },
    { question: "Which country gifted the Statue of Liberty to the United States?", a: "Germany", b: "France", c: "Spain", d: "Italy", correct: "b" },
    { question: "What is the fastest land animal?", a: "Lion", b: "Cheetah", c: "Leopard", d: "Tiger", correct: "b" },
    { question: "Which element is found in all organic compounds?", a: "Hydrogen", b: "Oxygen", c: "Carbon", d: "Nitrogen", correct: "c" },
    { question: "Who painted the ceiling of the Sistine Chapel?", a: "Leonardo da Vinci", b: "Vincent van Gogh", c: "Pablo Picasso", d: "Michelangelo", correct: "d" },
    { question: "What is the most spoken language in the world?", a: "English", b: "Spanish", c: "Mandarin Chinese", d: "Hindi", correct: "c" },
    { question: "Which bird is known for its colorful plumage and long tail?", a: "Peacock", b: "Eagle", c: "Parrot", d: "Penguin", correct: "a" },
    { question: "What is the capital of Australia?", a: "Sydney", b: "Melbourne", c: "Canberra", d: "Brisbane", correct: "c" },
    { question: "Which metal is liquid at room temperature?", a: "Iron", b: "Mercury", c: "Copper", d: "Aluminum", correct: "b" },
    { question: "Who wrote the 'Iliad' and the 'Odyssey'?", a: "Homer", b: "Virgil", c: "Sophocles", d: "Plato", correct: "a" },
    { question: "Which country is the largest by area?", a: "Canada", b: "China", c: "United States", d: "Russia", correct: "d" },
    { question: "What is the main ingredient in traditional Japanese sushi?", a: "Chicken", b: "Beef", c: "Fish", d: "Pork", correct: "c" },
    { question: "Which famous scientist introduced the concept of gravity?", a: "Albert Einstein", b: "Galileo Galilei", c: "Isaac Newton", d: "Nicolaus Copernicus", correct: "c" },
    { question: "What is the largest desert in the world?", a: "Sahara Desert", b: "Arabian Desert", c: "Gobi Desert", d: "Kalahari Desert", correct: "a" },
    { question: "What is the primary language spoken in Brazil?", a: "Spanish", b: "Portuguese", c: "French", d: "Italian", correct: "b" },
    { question: "Which planet has the most moons?", a: "Earth", b: "Mars", c: "Jupiter", d: "Saturn", correct: "c" },
    { question: "What is the hardest rock on Earth?", a: "Granite", b: "Marble", c: "Diamond", d: "Quartz", correct: "c" },
    { question: "Which U.S. state is known as the Sunshine State?", a: "California", b: "Florida", c: "Texas", d: "Hawaii", correct: "b" },
    { question: "Who wrote 'The Great Gatsby'?", a: "Ernest Hemingway", b: "F. Scott Fitzgerald", c: "Mark Twain", d: "John Steinbeck", correct: "b" },
    { question: "What is the most abundant gas in the Earth's atmosphere?", a: "Oxygen", b: "Carbon dioxide", c: "Nitrogen", d: "Hydrogen", correct: "c" }
];

const quizContainer = document.getElementById('quiz');
const questionEl = document.getElementById('question');
const choices = document.querySelectorAll('.choice');
const submitBtn = document.getElementById('submit');
const resultContainer = document.getElementById('result');
const scoreEl = document.getElementById('score');
const correctEl = document.getElementById('correct');
const wrongEl = document.getElementById('wrong');
const retryBtn = document.getElementById('retry');
const attendedEl = document.getElementById('attended');
const totalEl = document.getElementById('total');
const previousBtn = document.getElementById('previous');
const nextBtn = document.getElementById('next');
const skipBtn = document.getElementById('skip');
const skippedEl = document.getElementById('skipped');
const skippedFinalEl = document.getElementById('skipped-final');

let currentQuestion = 0;
let score = 0;
let selectedAnswer = null;
let attendedQuestions = 0;
let skippedQuestions = 0;
let answers = Array(quizData.length).fill(null);

totalEl.innerText = quizData.length;
loadQuiz();

choices.forEach(choice => {
    choice.addEventListener('click', () => {
        choices.forEach(choice => choice.classList.remove('selected'));
        choice.classList.add('selected');
        selectedAnswer = choice.id;
    });
});

submitBtn.addEventListener('click', () => {
    if (selectedAnswer) {
        if (answers[currentQuestion] === null) attendedQuestions++;
        answers[currentQuestion] = selectedAnswer;
        attendedEl.innerText = attendedQuestions;
        if (selectedAnswer === quizData[currentQuestion].correct) {
            score++;
        }
        currentQuestion++;
        if (currentQuestion < quizData.length) {
            loadQuiz();
        } else {
            showResult();
        }
    } else {
        alert('Please select an answer');
    }
});

previousBtn.addEventListener('click', () => {
    if (currentQuestion > 0) {
        currentQuestion--;
        loadQuiz();
    }
});

nextBtn.addEventListener('click', () => {
    if (currentQuestion < quizData.length - 1) {
        currentQuestion++;
        loadQuiz();
    }
});

skipBtn.addEventListener('click', () => {
    skippedQuestions++;
    skippedEl.innerText = skippedQuestions;
    currentQuestion++;
    if (currentQuestion < quizData.length) {
        loadQuiz();
    } else {
        showResult();
    }
});

retryBtn.addEventListener('click', () => {
    currentQuestion = 0;
    score = 0;
    selectedAnswer = null;
    attendedQuestions = 0;
    skippedQuestions = 0;
    answers = Array(quizData.length).fill(null);
    attendedEl.innerText = attendedQuestions;
    skippedEl.innerText = skippedQuestions;
    quizContainer.classList.remove('hide');
    resultContainer.classList.add('hide');
    loadQuiz();
});

function loadQuiz() {
    const currentQuizData = quizData[currentQuestion];
    questionEl.innerText = currentQuizData.question;
    choices.forEach(choice => {
        choice.classList.remove('selected');
        choice.innerText = currentQuizData[choice.id];
    });
    if (answers[currentQuestion]) {
        document.getElementById(answers[currentQuestion]).classList.add('selected');
    }
    selectedAnswer = answers[currentQuestion];
}

function showResult() {
    quizContainer.classList.add('hide');
    resultContainer.classList.remove('hide');
    scoreEl.innerText = `${score} / ${quizData.length}`;
    correctEl.innerText = score;
    wrongEl.innerText = attendedQuestions - score;
    skippedFinalEl.innerText = skippedQuestions;
}

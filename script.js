
const questions = [
    {
        question: "What is the value of x in the equation 3x + 7 = 22?",
        answers: [
            { text: "7", correct: false},
            { text: "5", correct: true},
            { text: "3", correct: false},
            { text: "9", correct: false},
        ]
    },
    {
        question: "Which of the following is a prime number?",
        answers: [
            { text: "31", correct: true},
            { text: "16", correct: false},
            { text: "27", correct: false},
            { text: "21", correct: false},
        ]
    },
    {
        question: "Simplify the expression 4x - 2(2x - 5) + 3x",
        answers: [
            { text: "-5x + 10", correct: false},
            { text: " 5x - 10", correct: false},
            { text: "-5x - 10", correct: false},
            { text: "5x + 10", correct: true},
        ]
    },
    {
        question: "Solve the equation 2x + 5 = 17",
        answers: [
            { text: "X = 9", correct: false},
            { text: "X = 6", correct: true},
            { text: "X = 5", correct: false},
            { text: "x = 11", correct: false},
        ]
    }, 
    {
        question: "What is the sum of the interior angles of a triangle?",
        answers: [
            { text: "270 degrees", correct: false},
            { text: "180 degrees", correct: true},
            { text: "360 degrees", correct: false},
            { text: "90 degrees", correct: false},
        ]
    },
    {
        question: "Given the following set of data: 4, 6, 8, 10, 12. What is the median?",
        answers: [
            { text: "8", correct: true},
            { text: "10", correct: false},
            { text: "12", correct: false},
            { text: "6", correct: false},
        ]
    },
    {
        question: "Simplify the expression: 2(3x + 4) - 3(2x - 1)",
        answers: [
            { text: "6x - 10", correct: false},
            { text: "6x - 2", correct: false},
            { text: "6x + 10", correct: false},
            { text: "6x + 2", correct: true},
        ]
    },
    {
        question: "Which of the following numbers is an irrational number?",
        answers: [
            { text: "√2", correct: false},
            { text: "1.25", correct: true},
            { text: "o.50", correct: false},
            { text: "2.5", correct: false},
        ]
    },  
    {
        question: "Which of the following is the reciprocal of 3/4?",
        answers: [
            { text: "7/4", correct: false},
            { text: "4/7", correct: false},
            { text: "4/3", correct: true},
            { text: "3/4", correct: false},
        ]
    },
    {
        question: "Solve the equation: 2x^2 - 5x - 2 = 0",
        answers: [
            { text: "x = -1/2, x = 2", correct: true},
            { text: "x = 1/2, x = 2", correct: false},
            { text: "x = -1/2, x = -2", correct: false},
            { text: "x = 1/2, x = -2", correct: false},
        ]
    },
    {
        question: "Simplify the expression: 3(x^2 - 2x) + 2(3x - 4)",
        answers: [
            { text: "9x^2 - 2x + 10", correct: false},
            { text: "3x^2 + 9x + 10", correct: false},
            { text: "9x^2 + 9x - 10", correct: false},
            { text: "3x^2 + 9x - 10", correct: true},
        ]
    },
    {
        question: "Factorize the expression: 25x^2 - 16",
        answers: [
            { text: "(5x + 4)(5x + 4)", correct: false},
            { text: "(5x + 4)(5x - 4)", correct: true},
            { text: " (5x + 16)(5x - 16)", correct: false},
            { text: "(5x - 16)(5x - 16)", correct: false},
        ]
    },
    {
        question: "Which of the following is the standard form of a quadratic equation?",
        answers: [
            { text: "y = mx + b", correct: false},
            { text: "y = ax^2 + bx + c", correct: true},
            { text: "y = kx", correct: false},
            { text: "y = a/x + b", correct: false},
        ]
    },
    {
        question: "Solve for x: 5x + 2 = 2(x - 3) + 4",
        answers: [
            { text: "x = 2", correct: false},
            { text: "x = -2", correct: false},
            { text: "x = -1", correct: false},
            { text: "x = 3", correct: true},
        ]
    },
    {
        question: "Which of the following is the slope of the line passing through the points (2, 4) and (5, 9)?",
        answers: [
            { text: "4", correct: false},
            { text: "1", correct: false},
            { text: "5", correct: false},
            { text: "3", correct: true},
        ]
    },
    {
        question: "Solve the equation: 4(2x - 3) = 3(x + 2) + 5",
        answers: [
            { text: "X = 1", correct: false},
            { text: "X = 0", correct: true},
            { text: "X = 3", correct: false},
            { text: "X = 4", correct: false},
        ]
    },
    {
        question: "Simplify the expression: 3(x^2 + 2x) - 4(x - 1)",
        answers: [
            { text: "3x^2 - 2x - 4", correct: false},
            { text: "3x^2 - 2x + 4", correct: false},
            { text: "3x^2 - 10x - 4", correct: false},
            { text: "3x^2 - 10x + 4", correct: true},
        ]
    },
    {
        question: "Factorize the expression: 16x^2 - 9",
        answers: [
            { text: "(4x + 3)(4x - 3)", correct: true},
            { text: "(4x + 9)(4x - 9)", correct: false},
            { text: "(4x + 3)(4x + 3)", correct: false},
            { text: "(4x - 9)(4x - 9)", correct: false},
        ]
    },
    {
        question: "Which of the following is the point of intersection for the equations y = 2x + 3 and y = -x + 1?",
        answers: [
            { text: "(1, 2)", correct: false},
            { text: "(-1, 4)", correct: false},
            { text: "(-1, 2)", correct: true},
            { text: "(1, 4)", correct: false},
        ]
    },
    {
        question: "Solve for x: 3(x + 2) = 2(x - 1) + 5",
        answers: [
            { text: "X = 3", correct: false},
            { text: "X = 4", correct: true},
            { text: "X = 6", correct: false},
            { text: "X = 7", correct: false},
        ]
    }, 
    {
        question: "Simplify the expression: 5x^2 + 2x^2 - 3x^2",
        answers: [
            { text: "2x^2", correct: false},
            { text: "4x^2", correct: true},
            { text: "x^2", correct: false},
            { text: "-x^2", correct: false},
        ]
    },
    {
        question: "Expand the expression: (2x - 1)(x + 3)",
        answers: [
            { text: "2x^2 + 5x - 3", correct: true},
            { text: "2x^2 + 5x + 3", correct: false},
            { text: "2x^2 - 5x + 3", correct: false},
            { text: "2x^2 - 5x - 3", correct: false},
        ]
    },
    {
        question: "Which of the following is the additive inverse of -6?",
        answers: [
            { text: "-6", correct: false},
            { text: "-1/6", correct: false},
            { text: "1/6", correct: false},
            { text: "6", correct: true},
        ]
    },
    {
        question: "Solve the equation: 2x^2 - 9x + 5 = 0",
        answers: [
            { text: "x = 2, x = -5/2", correct: false},
            { text: "x = 1, x = 5/2", correct: true},
            { text: "x = 2, x = 5/2", correct: false},
            { text: "x = 1, x = 5", correct: false},
        ]
    },  
    {
        question: "Simplify the expression: 2(x^3 + 4x^2) - 3x(x - 1)",
        answers: [
            { text: "2x^3 + 5x^2 + 3x", correct: false},
            { text: "2x^3 + 8x^2 - 3x^2 + 3x", correct: true},
            { text: "2x^3 - 8x^2 - 3x^2 - 3x", correct: false},
            { text: "2x^3 - 3x^2 + 3x", correct: false},
        ]
    },
    {
        question: "Find the value of x: 3(x + 2) - 2(x - 3) = 5",
        answers: [
            { text: "-2", correct: true},
            { text: "-3", correct: false},
            { text: "3", correct: false},
            { text: "2", correct: false},
        ]
    },
    {
        question: "Which of the following is the intercept form of a linear equation?",
        answers: [
            { text: "y = a/x + b", correct: false},
            { text: "y = mx + b", correct: false},
            { text: "y = ax^2 + bx + c", correct: false},
            { text: "x/a + y/b = 1", correct: true},
        ]
    },
    {
        question: "2(x^2 - 3x) + 3(x - 2)",
        answers: [
            { text: "2x^2 - 3x + 6", correct: false},
            { text: "2x^2 + 3x - 6", correct: true},
            { text: "2x^2 - 3x - 6", correct: false},
            { text: "2x^2 + 3x + 6", correct: false},
        ]
    },
    {
        question: "Solve for x: 4x + 7 = 3(x - 2) + 5",
        answers: [
            { text: "x = 3", correct: false},
            { text: " x = 4", correct: true},
            { text: "x = -2", correct: false},
            { text: "x = -3", correct: false},
        ]
    },
    {
        question: "Factorize the expression: 9x^2 - 16",
        answers: [
            { text: "(3x + 4)(3x - 4)", correct: true},
            { text: "(3x + 16)(3x - 16)", correct: false},
            { text: "(3x + 4)(3x + 4)", correct: false},
            { text: "(3x - 16)(3x - 16)", correct: false},
        ]
    },
    {
        question: "Which of the following is the point-slope form of a linear equation?",
        answers: [
            { text: "y = mx + b", correct: false},
            { text: "y = ax^2 + bx + c", correct: false},
            { text: "y = a/x + b", correct: false},
            { text: "y - y1 = m(x - x1)", correct: true},
        ]
    },
    {
        question: "Solve the equation: 2(x - 4) = 3(2x + 1)",
        answers: [
            { text: " x = 5", correct: false},
            { text: " x = -6", correct: false},
            { text: "x = -7", correct: true},
            { text: " x = 7", correct: false},
        ]
    },
    {
        question: "Simplify the expression: 5(2x + 3) - 3(4x - 1)",
        answers: [
            { text: "8x - 2", correct: true},
            { text: "2x + 18", correct: false},
            { text: "2x - 18", correct: false},
            { text: "8x + 2", correct: false},
        ]
    },
    {
        question: "Expand the expression: (x - 3)(x + 4)",
        answers: [
            { text: "x^2 + 7x - 12", correct: false},
            { text: "x^2 - x - 12", correct: false},
            { text: "x^2 + x + 12", correct: false},
            { text: "x^2 + x - 12", correct: true},
        ]
    },
    {
        question: "Solve for x: |3x - 2| = 7",
        answers: [
            { text: "x = -2/3", correct: false},
            { text: "x = 2/3", correct: true},
            { text: "x=3", correct: false},
            { text: "x = 1/3", correct: false},
        ]
    }, 
    {
        question: "Simplify the expression: (2x - 3)^2",
        answers: [
            { text: "4x^2 + 6x - 9", correct: false},
            { text: "4x^2 - 6x + 9", correct: true},
            { text: "4x^2 - 9", correct: false},
            { text: "4x^2 + 9", correct: false},
        ]
    },
    {
        question: "Simplify the expression: 4x^3 + 2x^3 - 3x^3",
        answers: [
            { text: "2x^3", correct: false},
            { text: "x^3", correct: false},
            { text: "3x^3", correct: true},
            { text: "-x^3", correct: false},
        ]
    },
    {
        question: "Expand the expression: (3x + 2)(2x - 5)",
        answers: [
            { text: "6x^2 - x - 10", correct: false},
            { text: "6x^2 - 17x + 10", correct: false},
            { text: "6x^2 + 17x + 10", correct: false},
            { text: "6x^2 - 17x - 10", correct: true},
        ]
    },
    {
        question: "Which of the following is the reciprocal of 2/5?",
        answers: [
            { text: "2/5", correct: false},
            { text: "3/4", correct: false},
            { text: "5/2", correct: true},
            { text: "4/3", correct: false},
        ]
    },  
    {
        question: "Solve the equation: 2x^2 - 5x - 3 = 0",
        answers: [
            { text: "x = 1, x = 3/2", correct: false},
            { text: "x = -1, x = 3", correct: false},
            { text: "x = -1, x = 3/2", correct: true},
            { text: "x = 1, x = -3/2", correct: false},
        ]
    },
    {
        question: "Simplify the expression: 3(x + 2) + 2(3x - 4)",
        answers: [
            { text: "9x - 10", correct: false},
            { text: "9x + 2", correct: false},
            { text: "11x - 2", correct: true},
            { text: "11x - 10", correct: false},
        ]
    },
    {
        question: "Factorize the expression: 4x^2 - 9",
        answers: [
            { text: "(2x + 3)(2x - 3)", correct: true},
            { text: "(2x + 9)(2x - 9)", correct: false},
            { text: "(2x + 3)(2x + 3)", correct: false},
            { text: "(2x - 9)(2x - 9)", correct: false},
        ]
    },
    {
        question: "Which of the following is the standard form of a linear equation?",
        answers: [
            { text: "y = ax^2 + bx + c", correct: false},
            { text: "Ax + By = C", correct: true},
            { text: "y = a/x + b", correct: false},
            { text: "y = mx + b", correct: false},
        ]
    },
    {
        question: "Solve for x: 3(2x + 4) - 5(x - 2) = 7",
        answers: [
            { text: "x = 1", correct: false},
            { text: "x = 4 ", correct: true},
            { text: "x = 2", correct: false},
            { text: "x = 5", correct: false},
        ]
    },
    {
        question: "Simplify the expression: 2(x^2 + 3x) - 4x(x - 1)",
        answers: [
            { text: "-2x^2 + 10x", correct: false},
            { text: "2x^2 + 10x", correct: false},
            { text: "-2x^2 + 6x", correct: true},
            { text: "2x^2 - 2x", correct: false},
        ]
    },
    {
        question: "What is the value of 8 + 4 × 3?",
        answers: [
            { text: "20", correct: false},
            { text: "21", correct: false},
            { text: "19", correct: false},
            { text: "24", correct: true},
        ]
    },
    {
        question: "Evaluate 15 ÷ 3 x 2",
        answers: [
            { text: "5", correct: false},
            { text: "10", correct: true},
            { text: "6", correct: false},
            { text: "4", correct: false},
        ]
    },
    {
        question: "What is the result of 7 - (2 x 3) + 4?",
        answers: [
            { text: "6", correct: true},
            { text: "5", correct: false},
            { text: "7", correct: false},
            { text: "9", correct: false},
        ]
    },
    {
        question: "Calculate 18 ÷ 6 + 2 x 3.",
        answers: [
            { text: "14", correct: false},
            { text: "12", correct: false},
            { text: "9", correct: false},
            { text: "11", correct: true},
        ]
    },
    {
        question: "What is the value of 4² + 3 x 2?",
        answers: [
            { text: "20", correct: false},
            { text: "18", correct: true},
            { text: "14", correct: false},
            { text: "16", correct: false},
        ]
    }, 
    {
        question: "Which of the following fractions is in its simplest form?",
        answers: [
            { text: "3/9", correct: false},
            { text: "4/6", correct: true},
            { text: "5/10", correct: false},
            { text: "2/4", correct: false},
        ]
    },
    {
        question: "What is 3/5 as a decimal?",
        answers: [
            { text: "0.6", correct: true},
            { text: "0.3", correct: false},
            { text: "0.5", correct: false},
            { text: "1.4", correct: false},
        ]
    },
    {
        question: "If you add 1/4 and 3/8, what fraction do you get?",
        answers: [
            { text: "7/8", correct: false},
            { text: "6/12", correct: false},
            { text: "7/12", correct: true},
            { text: "4/8", correct: false},
        ]
    },
    {
        question: "What is 2/3 as a percentage?",
        answers: [
            { text: "75%", correct: false},
            { text: "33%", correct: false},
            { text: "66%", correct: true},
            { text: "50%", correct: false},
        ]
    },  
    {
        question: "If you subtract 2/7 from 1, what is the result?",
        answers: [
            { text: "4/7", correct: false},
            { text: "2/7", correct: false},
            { text: "5/7", correct: true},
            { text: "1/7", correct: false},
        ]
    },
    {
        question: "Express 0.625 as a fraction.",
        answers: [
            { text: "3/8", correct: false},
            { text: "5/6", correct: false},
            { text: "5/8", correct: true},
            { text: "3/5", correct: false},
        ]
    },
    {
        question: "Calculate 0.15 x 0.2",
        answers: [
            { text: "3", correct: false},
            { text: "0.3", correct: false},
            { text: "0.03", correct: false},
            { text: "0.030", correct: true},
        ]
    },
    {
        question: "What is 0.3 as a fraction in its simplest form?",
        answers: [
            { text: "2/5", correct: false},
            { text: "1/2", correct: false},
            { text: "3/10", correct: true},
            { text: "1/3", correct: false},
        ]
    },
    {
        question: "If an item originally cost £50 and is now on sale for £42, what is the percentage reduction?",
        answers: [
            { text: "8%", correct: false},
            { text: "20%", correct: false},
            { text: "16%", correct: true},
            { text: "15%", correct: false},
        ]
    },
    {
        question: "What is 75% of 120?",
        answers: [
            { text: "90", correct: true},
            { text: "100", correct: false},
            { text: "80", correct: false},
            { text: "75", correct: false},
        ]
    },
    {
        question: "How many centimeters are in 2 meters?",
        answers: [
            { text: "2000", correct: false},
            { text: "20", correct: false},
            { text: "100", correct: false},
            { text: "200", correct: true},
        ]
    },
    {
        question: "Convert 0.5 meters to centimeters",
        answers: [
            { text: "5 cm", correct: false},
            { text: "50 cm", correct: true},
            { text: "500 cm", correct: false},
            { text: "0.05 cm", correct: false},
        ]
    },
    {
        question: "If a rectangle has a length of 8 cm and a width of 5 cm, what is its area?",
        answers: [
            { text: "40 cm²", correct: true},
            { text: "13 cm²", correct: false},
            { text: "45 cm²", correct: false},
            { text: "20 cm²", correct: false},
        ]
    },
    {
        question: "If the radius of a circle is 6 cm, what is its circumference? (Use π ≈ 3.14)",
        answers: [
            { text: "12.56 cm", correct: false},
            { text: "37.68 cm", correct: false},
            { text: "37.68π cm", correct: false},
            { text: "18.84 cm", correct: true},
        ]
    },
    {
        question: "If a rectangle has a length of 12 cm and a width of 7 cm, what is its perimeter?",
        answers: [
            { text: "64 cm", correct: false},
            { text: "48 cm", correct: false},
            { text: "38 cm", correct: true},
            { text: "84 cm", correct: false},
        ]
    },
    {
        question: "Calculate 9^2 - 5^2",
        answers: [
            { text: "16", correct: false},
            { text: "36", correct: false},
            { text: "14", correct: true},
            { text: "64", correct: false},
        ]
    },
    {
        question: "If a box contains 25 chocolates and 10 of them are dark chocolate, what percentage are dark chocolates?",
        answers: [
            { text: "50%", correct: false},
            { text: "60%", correct: false},
            { text: "40%", correct: true},
            { text: "70%", correct: false},
        ]
    },
    {
        question: "Evaluate 2^3 ÷ 4 + 5 x 2.",
        answers: [
            { text: "13", correct: false},
            { text: "12", correct: false},
            { text: "19", correct: false},
            { text: "15", correct: true},
        ]
    },
    {
        question: "What is the value of (4 + 5) x 3 - 6?",
        answers: [
            { text: "20", correct: false},
            { text: "18", correct: false},
            { text: "15", correct: false},
            { text: "17", correct: true},
        ]
    },
    {
        question: "Calculate 7^2 + 3^3.",
        answers: [
            { text: "68", correct: false},
            { text: "58", correct: true},
            { text: "52", correct: false},
            { text: "64", correct: false},
        ]
    },
    {
        question: "What is 3/10 as a percentage?",
        answers: [
            { text: "30%", correct: true},
            { text: "3%", correct: false},
            { text: "10%", correct: false},
            { text: "0.3%", correct: false},
        ]
    },
    {
        question: "Simplify the fraction 6/18 to its simplest form",
        answers: [
            { text: "1/2", correct: false},
            { text: "2/3", correct: false},
            { text: "3/6", correct: false},
            { text: "1/3", correct: true},
        ]
    },
    {
        question: "If 2/5 of a pizza is left, what fraction has been eaten?",
        answers: [
            { text: "2/5", correct: false},
            { text: "3/5", correct: true},
            { text: "1/4", correct: false},
            { text: "4/5", correct: false},
        ]
    },
    {
        question: "What is 1/4 of 80?",
        answers: [
            { text: "20", correct: true},
            { text: "30", correct: false},
            { text: "40", correct: false},
            { text: "60", correct: false},
        ]
    },
    {
        question: "Which of the following fractions is equivalent to 2/9?",
        answers: [
            { text: "1/9", correct: false},
            { text: "2/9", correct: false},
            { text: "5/18", correct: true},
            { text: "4/18", correct: false},
        ]
    },
    {
        question: "Express 0.125 as a fraction in its simplest form.",
        answers: [
            { text: "1/4", correct: false},
            { text: "1/12", correct: false},
            { text: "1/8", correct: true},
            { text: "1/6", correct: true},
        ]
    },
    {
        question: "Convert 3/5 to a decimal.",
        answers: [
            { text: "0.2", correct: false},
            { text: "0.8", correct: true},
            { text: "0.6", correct: false},
            { text: "0.5", correct: true},
        ]
    },
    {
        question: "What is 0.7 as a fraction in its simplest form?",
        answers: [
            { text: "7/10", correct: true},
            { text: "7/100", correct: false},
            { text: "7/20", correct: false},
            { text: "7/25", correct: false},
        ]
    },
    {
        question: "Calculate 0.4 x 0.25.",
        answers: [
            { text: "o.15", correct: false},
            { text: "0.25", correct: false},
            { text: "0.1", correct: true},
            { text: "0.10", correct: false},
        ]
    },
    {
        question: "If a shirt originally cost £30 and is now on sale for £24, what is the percentage reduction?",
        answers: [
            { text: "15%", correct: false},
            { text: "10%", correct: false},
            { text: "25%", correct: true},
            { text: "20%", correct: false},
        ]
    },
    {
        question: "How many millimeters are in 0.5 meters?",
        answers: [
            { text: "50mm", correct: false},
            { text: "5mm", correct: false},
            { text: "500mm", correct: false},
            { text: "5000mm", correct: true},
        ]
    },
    {
        question: "If a rectangle has a length of 15 cm and a width of 10 cm, what is its area?",
        answers: [
            { text: "250 cm²", correct: false},
            { text: "25 cm²", correct: false},
            { text: "150 cm²", correct: true},
            { text: "100 cm²", correct: false},
        ]
    },
    {
        question: "Convert 250 cm² to m²",
        answers: [
            { text: "25 m²", correct: false},
            { text: "2.5 m²", correct: false},
            { text: "0.025 m²", correct: true},
            { text: "0.0025 m²", correct: false},
        ]
    },
    {
        question: "If the radius of a circle is 10 cm, what is its area? (Use π ≈ 3.14)",
        answers: [
            { text: "200 cm²", correct: false},
            { text: "100 cm²", correct: false},
            { text: "628 cm²", correct: false},
            { text: "314 cm²", correct: true},
        ]
    },
    {
        question: "If a triangle has a base of 12 cm and a height of 8 cm, what is its area?",
        answers: [
            { text: "24 cm²", correct: false},
            { text: "36 cm²", correct: false},
            { text: "48 cm²", correct: true},
            { text: "96 cm²", correct: false},
        ]
    },
    {
        question: "Calculate 13 + 7 x 2",
        answers: [
            { text: "27", correct: true},
            { text: "40", correct: false},
            { text: "20", correct: false},
            { text: "14", correct: false},
        ]
    },
    {
        question: "Evaluate 16 ÷ 4 x 2",
        answers: [
            { text: "4", correct: false},
            { text: "10", correct: false},
            { text: "12", correct: false},
            { text: "8", correct: true},
        ]
    },
    {
        question: "What is the result of 10 - (3 x 4) + 5?",
        answers: [
            { text: "5", correct: false},
            { text: "3", correct: false},
            { text: "15", correct: true},
            { text: "7", correct: false},
        ]
    },
    {
        question: "Calculate 27 ÷ 9 + 3 x 2",
        answers: [
            { text: "11", correct: true},
            { text: "10", correct: false},
            { text: "8", correct: false},
            { text: "14", correct: false},
        ]
    },
    {
        question: "What is the value of 5² + 4 x 3?",
        answers: [
            { text: "29", correct: false},
            { text: "49", correct: false},
            { text: "25", correct: false},
            { text: "41", correct: true},
        ]
    },
    {
        question: "Which of the following fractions is in its simplest form?",
        answers: [
            { text: "5/20", correct: false},
            { text: "6/9", correct: false},
            { text: "4/12", correct: true},
            { text: "8/10", correct: false},
        ]
    },
    {
        question: "What is 2/7 as a decimal?",
        answers: [
            { text: "0.285", correct: true},
            { text: "0.28", correct: false},
            { text: "0.2", correct: false},
            { text: "0.3", correct: false},
        ]
    },
    {
        question: "If you add 1/3 and 2/6, what fraction do you get?",
        answers: [
            { text: "1/2", correct: false},
            { text: "1/3", correct: false},
            { text: "1/6", correct: false},
            { text: "2/3", correct: true},
        ]
    },
    {
        question: "What is 5/8 as a percentage?",
        answers: [
            { text: "50%", correct: false},
            { text: "40%", correct: false},
            { text: "62.5%", correct: true},
            { text: "25%", correct: false},
        ]
    },
    {
        question: "If you subtract 1/5 from 1, what is the result?",
        answers: [
            { text: "4/5", correct: true},
            { text: "1/5", correct: false},
            { text: "3/5", correct: false},
            { text: "2/5", correct: false},
        ]
    },
    {
        question: "Express 0.375 as a fraction",
        answers: [
            { text: "3/7", correct: false},
            { text: "3/5", correct: false},
            { text: "3/10", correct: false},
            { text: "3/8", correct: true},
        ]
    },
    {
        question: "What is 0.4 as a fraction in its simplest form?",
        answers: [
            { text: "1/2", correct: false},
            { text: "4/5", correct: false},
            { text: "2/5", correct: true},
            { text: "3/5", correct: false},
        ]
    },
    {
        question: "Convert 250 cm² to m²",
        answers: [
            { text: "0.025 m²", correct: true},
            { text: " 0.0025 m²", correct: false},
            { text: " 2.5 m²", correct: false},
            { text: "25 m²", correct: false},
        ]
    },
    {
     question: "If the radius of a circle is 10 cm, what is its area? (Use π ≈ 3.14)",
        answers: [
            { text: "200 cm²", correct: false},
            { text: "100 cm²", correct: false},
            { text: "628 cm²", correct: false},
            { text: "314 cm²", correct: true},
        ]
    },
    {
        question: "If a triangle has a base of 12 cm and a height of 8 cm, what is its area?",
        answers: [
            { text: "36 cm²", correct: false},
            { text: "96 cm²", correct: false},
            { text: "48 cm²", correct: true},
            { text: "24 cm²", correct: false},
        ]
    },
    {
        question: "If a rectangle has a length of 15 cm and a width of 10 cm, what is its area?",
        answers: [
            { text: "250 cm²", correct: false},
            { text: "25 cm²", correct: false},
            { text: "150 cm²", correct: true},
            { text: "100 cm²", correct: false},
        ]
    },
    {
        question: "Calculate 13 + 7 x 2",
        answers: [
            { text: "20", correct: true},
            { text: "14", correct: false},
            { text: "27", correct: false},
            { text: "40", correct: false},
        ]
    },
    {
        question: "Evaluate 16 ÷ 4 x 2",
        answers: [
            { text: "7", correct: false},
            { text: "12", correct: false},
            { text: "8", correct: true},
            { text: "10", correct: false},
        ]
    },
    {
        question: "What is the result of 10 - (3 x 4) + 5?",
        answers: [
            { text: "5", correct: false},
            { text: "3", correct: false},
            { text: "15", correct: true},
            { text: "8", correct: false},
        ]
    },
    {
        question: "Calculate 27 ÷ 9 + 3 x 2",
        answers: [
            { text: "11", correct: true},
            { text: "14", correct: false},
            { text: "10", correct: false},
            { text: "8", correct: false},
        ]
    },
    {
        question: "What is the value of 5² + 4 x 3?",
        answers: [
            { text: "29", correct: false},
            { text: "27", correct: false},
            { text: "49", correct: false},
            { text: "41", correct: true},
        ]
    },
    {
        question: "Which of the following fractions is in its simplest form?",
        answers: [
            { text: "5/20", correct: false},
            { text: "8/10", correct: false},
            { text: "4/12", correct: true},
            { text: "6/9", correct: false},
        ]
    },
    {
        question: "What is 2/7 as a decimal?",
        answers: [
            { text: "0.285", correct: true},
            { text: "0.28", correct: false},
            { text: "0.2", correct: false},
            { text: "0.3", correct: false},
        ]
    },
    {
        question: "If you add 1/3 and 2/6, what fraction do you get?",
        answers: [
            { text: "2/6", correct: false},
            { text: "2/3", correct: true},
            { text: "1/3", correct: false},
            { text: "1/2", correct: false},
        ]
    },
    {
        question: "What is 5/8 as a percentage?",
        answers: [
            { text: "25%", correct: false},
            { text: "40%", correct: false},
            { text: "50%", correct: false},
            { text: "62.5%", correct: true},
        ]
    },
    {
        question: "If a rectangle has a length of 15 cm and a width of 10 cm, what is its area?",
        answers: [
            { text: "250 cm²", correct: false},
            { text: "25 cm²", correct: false},
            { text: "150 cm²", correct: true},
            { text: "100 cm²", correct: false},
        ]
    },
    {
        question: "If you subtract 1/5 from 1, what is the result?",
        answers: [
            { text: "3/5", correct: false},
            { text: "4/5", correct: true},
            { text: "1/5", correct: false},
            { text: "2/5", correct: false},
        ]
    },
    {
        question: "Express 0.375 as a fraction.",
        answers: [
            { text: "3/10", correct: false},
            { text: "3/7", correct: false},
            { text: "3/5", correct: false},
            { text: "3/8", correct: true},
        ]
    },
    {
        question: "What is 0.4 as a fraction in its simplest form?",
        answers: [
            { text: "1/2", correct: false},
            { text: "4/5", correct: false},
            { text: "2/5", correct: true},
            { text: "3/5", correct: false},
        ]
    },
    {
        question: "Calculate 0.12 x 0.3",
        answers: [
            { text: "0.03", correct: false},
            { text: " 0.036", correct: true},
            { text: "0.3", correct: false},
            { text: "0.36", correct: false},
        ]
    },
    {
        question: "If an item originally cost £40 and is now on sale for £32, what is the percentage reduction?",
        answers: [
            { text: "25%", correct: false},
            { text: "15%", correct: false},
            { text: "20%", correct: true},
            { text: "30%", correct: false},
        ]
    },
    {
        question: "What is 20% of 150?",
        answers: [
            { text: "25", correct: false},
            { text: "40", correct: false},
            { text: "30", correct: true},
            { text: "50", correct: false},
        ]
    },
    {
        question: "How many centimeters are in 1.5 meters?",
        answers: [
            { text: "15cm", correct: false},
            { text: "1500 cm", correct: false},
            { text: "150 cm", correct: true},
            { text: "15,000 cm", correct: false},
        ]
    },
    {
        question: "Convert 0.7 meters to centimeters",
        answers: [
            { text: "0.07 cm", correct: false},
            { text: "7 cm", correct: false},
            { text: "700 cm", correct: false},
            { text: "70 cm", correct: true},
        ]
    },
    
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");
let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    const shuffledQuestions = questions.slice(0, 10);
    // shuffledQuestions = questions.sort (() => Math.random() 0, 10);
    showQuestion();
}

function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    // shuffledQuestions = questions.sort (() => Math.random() 0, 10);
    
    let questionNo = currentQuestionIndex + 0;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}

function shuffleArray(array){
    array.sort(() => Math.random() - 0.5);
    return array;
}


function resetState(){
    nextButton.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}

function showScore(){
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
}


function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }else{
        showScore();
    }
}
 

nextButton.addEventListener("click", ()=>{
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }else{
        startQuiz();
    }
});

startQuiz();


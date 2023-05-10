const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let answers = {};

rl.question("What's your name? Nicknames are also acceptable :) ", (name) => {
  answers.name = name;

  rl.question("What's an activity you like doing? ", (activity) => {
    answers.activity = activity;

    rl.question("What do you listen to while doing that? ", (music) => {
      answers.music = music;

      rl.question("Which meal is your favourite? ", (meal) => {
        answers.meal = meal;

        rl.question(
          "What's your favourite thing to eat for that meal? ",
          (food) => {
            answers.food = food;

            rl.question("Which sport is your absolute favourite? ", (sport) => {
              answers.sport = sport;

              rl.question(
                "What is your superpower? In a few words, tell us what you are amazing at! ",
                (superpower) => {
                  answers.superpower = superpower;
                  rl.question("What is your favourite show? ", (show) => {
                    answers.show = show;

                    // Generate profile
                    const profile = `${answers.name} loves ${answers.activity}, and listening to ${answers.music} while doing it. Their favorite ${answers.meal} is ${answers.food}. In their free time, they enjoy ${answers.sport} and their superpower is ${answers.superpower}. favourite show is ${show}.`;
                    console.log(profile);

                    // Close the readline interface
                    rl.close();
                  });
                }
              );
            });
          }
        );
      });
    });
  });
});

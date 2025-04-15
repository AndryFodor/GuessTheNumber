This is an application where you think of a number from 1 to 99, and your device tries to guess it. The guessing process is based on an algorithm that narrows down the range of the number you’ve thought of. The computer generates a random number x between 1 and 99. You then indicate whether this number is lower (-) or higher (+) than the one you’ve chosen. Based on your response, the range for generating the next random number is adjusted — either from x to 99, or from 0 to x. Then, a new number is generated within the updated range. In this way, the computer "guesses" your number.

There is a limited number of attempts. Currently, it's set to 8. In most cases, the number gets guessed correctly within this limit. If the number of attempts is reduced to 5, the success rate decreases. This application can be used for exploring probability theory and statistics — or simply for a bit of fun.

Thanks to React Native, the app runs on both Android and iOS platforms. For educational purposes, Expo CLI was used instead of the standard React Native CLI. In the demo folder, you can see the result of this code working on both platforms. Real devices and the Expo Go app were used for testing. The program was developed on the Windows platform.

To run the app, use the command npm start. But before running the command, make sure to install all the required dependencies
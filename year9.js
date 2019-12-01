let input = [4, 0, 6, 0, 9, 0, 10, 10];
let memory = ['', '', ''];

//hands is what we have in hands in the game
//console.log is the output
let hands;
for (let i = 0; i < input.length; i++) {
    hands = input[i];
    if (hands == 0) {
        console.log(hands);
    }
}
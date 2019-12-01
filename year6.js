let input = [4,5,6,7,9,0,10,10];
let memory = ['', '', ''];

//hands is what we have in hands in the game
//console.log is the output
let hands;
for (let i = 0; i < input.length; i++) {
    hands = input[i];
    memory[0] = hands;
    i++;
    hands = input[i];
    hands = hands + memory[0];
    console.log(hands);
}
let input = [4, 0, 6, 0, 9, 0, 10, 10];
let memory = ['', '', ''];

//hands is what we have in hands in the game
//console.log is the output
let hands;
for (let i = 0; i < input.length; i++) {
    //input
    hands = input[i];
    //copyto
    memory[0] = hands;
    //input
    i++;
    hands = input[i];
    //copyto
    memory[1] = hands;
    //sub
    hands = hands - memory[0];
    console.log(hands);
    //copyto
    hands = memory[0];
    //sub
    hands = hands - memory[1];
    console.log(hands);
}
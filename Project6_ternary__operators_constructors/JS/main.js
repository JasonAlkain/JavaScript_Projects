function ternaryChallenge() {
    var Age = prompt("How old are you?");
    var tern = (Age > 18) ? "You can vote!" : "You are not old enough to vote.";
    confirm(tern);
}
function greet(name) {
  return 'Hello' + name;

}
function congrats(name){
  return 'Congratulations' + name;
}

function bye(name){
  return 'Goodbye' + name;
}

module.exports = {
  greet:greet,
  congrats:congrats,
  bye:bye,

};
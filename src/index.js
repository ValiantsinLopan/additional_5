module.exports = function check(str, bracketsConfig) {
  let stack = [];
  let config = bracketsConfig.join("").replace(/,/g, '');

  for (let i = 0; i < str.length; i++) {
    let bracket = str[i];
    let indexOfBracket = config.indexOf(bracket);
    let top = stack[stack.length - 1];

    if (stack.length > 0 && indexOfBracket % 2 == 0 && bracket == config[indexOfBracket + 1] && top == indexOfBracket) {
      stack.pop();
      continue;
    }

    if (indexOfBracket % 2 == 0) {
      stack.push(indexOfBracket);
    } else {
      if (stack.length == 0) {
        return false;
      }
      if (stack[stack.length - 1] + 1 == indexOfBracket) {
        stack.pop();
      }
    }
  }
  return stack.length == 0;
}

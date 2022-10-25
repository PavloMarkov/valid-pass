'use strict';

const text = `a 1-5: abcdj \n
z 2-4: asfalseiruqwo \n
b 3-6: bhhkkbbjjjb\n`;

function totalCorrectPass(one) {
  const linesOfRules = one.split('\n').filter(rule => rule.length > 0);
  const passwordsWithRules = linesOfRules.map(line => {
    return line.trim().split(' ');
  });

  const validPasses = passwordsWithRules.filter(pass => {
    const symbol = pass[0];
    const phrase = pass[2];
    const charStart = pass[1].indexOf('-');
    const totalFrom = pass[1].slice(0, charStart);
    const totalTo = pass[1].slice(charStart + 1, -1);

    let count = 0;

    for (let i = 0; i < phrase.length; i++) {
      if (phrase[i] === symbol) {
        count++;
      }
    }

    const result = (count >= totalFrom) && (count <= totalTo);

    return result;
  });

  return validPasses.length;
}

console.log(totalCorrectPass(text));

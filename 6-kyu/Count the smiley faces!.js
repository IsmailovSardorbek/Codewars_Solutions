/* 
    Valid smiley face examples: :) :D ;-D :~)
    Invalid smiley faces: ;( :> :} :]

    EXAMPLE:
    
    countSmileys([':)', ';(', ';}', ':-D']);       // should return 2;
    countSmileys([';D', ':-(', ':-)', ';~)']);     // should return 3;
    countSmileys([';]', ':[', ';*', ':$', ';-D']); // should return 1;
*/

const countSmileys = (arr) => {
  let possibleSmileys = [];

  let eyes = [`:`, ";"],
    nose = [`-`, `~`],
    mouth = [`)`, `D`];

  eyes.forEach((eye) => {
    mouth.map((m) => {
      possibleSmileys.push(eye.concat(m));
    });
  });

  eyes.forEach((eye) => {
    nose.forEach((nose) => {
      mouth.map((m) => {
        possibleSmileys.push(eye.concat(nose).concat(m));
      });
    });
  });

  return arr.filter((s) => possibleSmileys.includes(s)).length;
};

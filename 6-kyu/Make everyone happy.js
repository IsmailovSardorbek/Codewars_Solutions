/* 
In this kata, your task will be to replace sad emoticons with funny ones.

The emoticons, will be represented from:

Eyes: marked as :, ; or =
Nose (optional): marked as - or ~
Mouth: marked as ( or [
Examples:
smile("Howdy :(")  // should return "Howdy :)"
smile("Never be sad =[")  // should return "Never be sad =]"
smile("Change this `=(` and this `:[`")  // should return "Change 

*/

const smile = (text) => {
  let eyes = [`:`, `;`, `=`],
    noses = [`-`, `~`],
    mouthsForSad = [`(`, `[`],
    mouthForHappy = [`)`, `]`];

  let smileyFaces = [],
    sadFaces = [];

  eyes.forEach((eye) => {
    mouthsForSad.forEach((mouth) => {
      sadFaces.push(eye.concat(mouth));
    });
  });

  eyes.forEach((eye) => {
    noses.forEach((nose) => {
      mouthsForSad.forEach((mouth) =>
        sadFaces.push(eye.concat(nose.concat(mouth)))
      );
    });
  });

  eyes.forEach((eye) => {
    mouthForHappy.forEach((mouth) => {
      smileyFaces.push(eye.concat(mouth));
    });
  });

  eyes.forEach((eye) => {
    noses.forEach((nose) => {
      mouthForHappy.forEach((mouth) =>
        smileyFaces.push(eye.concat(nose.concat(mouth)))
      );
    });
  });

  sadFaces.forEach((face, index) => {
    while (text.includes(face)) {
      text = text.replace(face, smileyFaces[index]);
    }
  });

  return text;
};

import determiners from "./NickNameData/determiners.js";
import animals from "./NickNameData/animals.js";

export default function randomNameGenerator(){
  return (
    determiners[Math.floor(Math.random() * determiners.length)] +
    " " +
    animals[Math.floor(Math.random() * animals.length)]
  );
};

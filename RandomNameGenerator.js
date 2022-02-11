import NickNameData from "./NickNameData.json";

export const randomNameGenerator = (NickNameData) => {
  return (
    NickNameData.determiners[
      Math.floor(Math.random() * NickNameData.determiners.length)
    ] +
    " " +
    NickNameData.animals[
      Math.floor(Math.random() * NickNameData.animals.length)
    ]
  );
};

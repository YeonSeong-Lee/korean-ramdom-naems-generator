import NickNameData from "./NickNameData.json";

const randomName = (NickNameData) => {
  return (
    NickNameData.determiners[
      Math.floor(Math.random() * NickNameData.determiners.length)
    ] +
    "_" +
    NickNameData.animals[
      Math.floor(Math.random() * NickNameData.animals.length)
    ]
  );
};

import NickNameData from "./nicknameData.json";

export function getRandomNickName() {
  return (
    NickNameData.determiners[
      Math.floor(Math.random() * NickNameData.determiners.length)
    ] +
    " " +
    NickNameData.animals[
      Math.floor(Math.random() * NickNameData.animals.length)
    ]
  );
}
export const nicknameUtils = {
  getRandomNickName,
};
export default nicknameUtils;

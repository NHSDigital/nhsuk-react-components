export const getRandomString = (length: number = 5) => {
  const randomNumber = Math.random() + 1;
  return randomNumber.toString(36).substring(2, length + 2);
};

export const generateRandomName = (prefix?: string) => {
  const randomString = getRandomString();
  return prefix ? `${prefix}_${randomString}` : randomString;
};

export const generateRandomID = generateRandomName;

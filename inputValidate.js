import regex from './regex';

export const validateEmail = (emailStr) => {
  const emailRule = /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z]+$/;
  if (emailStr.search(emailRule) === -1) {
    return false;
  }
  return true;
};

export const validateCapital = (str) => {
  const capital = str.match(regex.lowercase);
  if (capital) return false;
  return true;
};

export const validateMaxLength = (str) => {
  const maxlength = 200;
  if (str.length > maxlength) {
    return false;
  }
  return true;
};

export const validateChinese = (str) => {
  const ch = str.match(regex.chinese);
  if (ch) return false;
  return true;
};

export const validateNum = (str) => {
  const num = str.match(regex.number);
  if (num === null) return false;
  return true;
};

export const validateEmpty = (input) => input;

export const emailRule = () =>
  /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z]+$/;

export const passwordRule = () => /^[a-zA-Z0-9]+$/;

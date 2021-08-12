// Must use same shift for caesar encrypt and decrypt.
let shift = 10;

/**
 * Gets the value associated with the supplied key.
 * 
 * @param {*} key The name of the key to get value from.
 * @returns false if the localStorage doesn't have the key supplied. If key exists, it returns the value as JSON data.
 */
export const getStorage = (key) => {
  const data = localStorage.getItem(key);

  if (data) {
    return JSON.parse(decryptCaesar(data, shift));
  } else {
    console.log(key);
    return false;
  }
};

/**
 * Adds the supplied key and value to the localStorage of the browser. With caesar encryption.
 * 
 * @param {*} key The name of the key.
 * @param {*} value The value associated with the key.
 */
export const setStorage = (key, value) => {
  const jsonData = JSON.stringify(value);
  localStorage.setItem(key, encryptCaesar(jsonData, shift));
};

/**
 * Encrypts the text using caesar encryption.
 *
 * @param {*} text the text to encrypt.
 * @param {*} shift how much we should shift each letter by.
 * @returns Encrypted text.
 */
function encryptCaesar(text, shift) {
  let result = "";
  // Loop through each character in the text.
  for (var i = 0; i < text.length; i++) {
    // Get the character code of each letter.
    let c = text.charCodeAt(i);

    // Handle uppercase letters.
    if (c >= 65 && c <= 90) {
      result += String.fromCharCode(((c - 65 + shift) % 26) + 65);

      // Handle lowercase letters.
    } else if (c >= 97 && c <= 122) {
      result += String.fromCharCode(((c - 97 + shift) % 26) + 97);

      // It's not a letter, let it through.
    } else {
      result += text.charAt(i);
    }
  }
  return result;
}

/**
 * Decrypts the encrypted ceasar text.
 * 
 * @param {*} text text to decrypt.
 * @param {*} shift how much we should shift each letter by.
 * @returns Decrypted text.
 */
function decryptCaesar(text, shift) {
  let result = "";
  shift = (26 - shift) % 26;
  result = encryptCaesar(text, shift);
  return result;
}

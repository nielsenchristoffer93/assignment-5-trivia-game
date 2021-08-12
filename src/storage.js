let shift = 10;

export const getStorage = key => {
    const data = localStorage.getItem(key);

    if (data) {
        return JSON.parse(decrypt(data, shift));
    } else {
        console.log(key)
        return false;
    }
}

export const setStorage = (key, value) => {
    const jsonData = JSON.stringify(value);
    localStorage.setItem(key, encrypt(jsonData, shift));
}

// Ceasar encrypt
function encrypt(text, shift) {
    var result = "";
    //loop through each character in the text
    for (var i = 0; i < text.length; i++) {
      //get the character code of each letter
      var c = text.charCodeAt(i);
  
      // handle uppercase letters
      if (c >= 65 && c <= 90) {
        result += String.fromCharCode(((c - 65 + shift) % 26) + 65);
  
        // handle lowercase letters
      } else if (c >= 97 && c <= 122) {
        result += String.fromCharCode(((c - 97 + shift) % 26) + 97);
  
        // its not a letter, let it through
      } else {
        result += text.charAt(i);
      }
    }
    return result;
  }
  
  // Caesar decrypt.
  function decrypt(text, shift) {
    var result = "";
    shift = (26 - shift) % 26;
    result = encrypt(text, shift);
    return result;
  }
  
function palindromeIndex(s) {
  // Initialize start and end positions of the string
  let startIndex = 0;
  let endIndex = s.length - 1;

  //helper function to check if string is palindrome
  function isPalindrome(s, start, end) {
    while (start < end) {
      if (s[start] !== s[end]) {
        return false;
      } else {
        start += 1;
        end -= 1;
      }
    }
    return true;
  }

  while (startIndex < endIndex) {
    //   Track the string chars from start
    //   to end. Increment and decrement
    //   start and end indexes accordingly
    if (s[startIndex] === s[endIndex]) {
      startIndex += 1;
      endIndex -= 1;
      //   chars are not matching
    } else {
      // if removing s[start] makes the string palindrome
      if (isPalindrome(s, startIndex + 1, endIndex)) {
        return startIndex;
      }
      // if removing s[end] makes the string palindrome
      if (isPalindrome(s, startIndex, endIndex - 1)) {
        return endIndex;
      }
      //   Not possible to create palindrome
      return -1;
    }
  }
  //   string already a palindrome
  return -1;
}
// driver code
console.log(palindromeIndex("quyjjdcgsvvsgcdjjyq"));

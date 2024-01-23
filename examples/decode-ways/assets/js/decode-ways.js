/** 
Author : Build Rise Shine 

Created : 2023 

Script : Decode Ways

Description : Write an algorithm to determine decode ways

    A message containing letters from A-Z can be encoded into numbers using the following mapping:
    'A' -> "1"
    'B' -> "2"
    ...
    'Z' -> "26"

    To decode an encoded message, all the digits must be grouped then mapped back into letters using 
    the reverse of the mapping above (there may be multiple ways). For example, "11106" can be mapped into:

    "AAJF" with the grouping (1 1 10 6)
    "KJF" with the grouping (11 10 6)

    Note that the grouping (1 11 06) is invalid because "06" cannot be mapped into 'F' since "6" 
    is different from "06".

    Given a string s containing only digits, return the number of ways to decode it.

(c) Copyright by BRS Studio. 
**/

/*
Constraints for Algorithm
    -->  1 <= s.length <= 100
    -->  s contains only digits and may contain leading zero(s).
*/

// Algorithm
function numDecodings(s) {
  if (s == null || s.length === 0) return 0;
  if (s[0] === '0') return 0;

  const dp = new Array(s.length + 1).fill(0); // 3 + 1 = 4 
  // console.log(dp); // [0, 0, 0, 0]

  dp[0] = 1;
  dp[1] = 1;

  for (let i = 2; i <= s.length; i++) {
    // 1 digit decoding
    const a = Number(s.slice(i - 1, i));  
    if (a >= 1 && a <= 9) {
      dp[i] += dp[i - 1];
    }

    // 2 digit decoding
    const b = Number(s.slice(i - 2, i));  
    if (b >= 10 && b <= 26) {
      dp[i] += dp[i - 2];
    }
  }

  console.log(dp[s.length]);
  return dp[s.length];
}


// Implementation
const str = '226' // 20 26, 20 2 6
const decodeWays = numDecodings(str)
console.log(`For the given string ${str} can be decoded in '${decodeWays}' ways`);

// BIG O Notation
// Time complexity - O(n) - where 'n' is length of the string 
// Space complexity - O(n)

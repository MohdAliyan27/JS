// function count(string) {
//     let string1 = string.split("").sort().join("");
//     let counter = 1;
//     for (let i = 0; i < string.length; i++) {
//       if (string1[i] == string1[i + 1]) {
//         counter++;
//       } else {
//         console.log(string1[i] + " " + counter);
//         counter = 1;
//       }
//     }
//   }
//   count("aababbccdddaa");

function count(string) {
    return string.split("").reduce((a, letter) => {
      a[letter] = (a[letter] || 0) + 1;
      return a;
    }, {});
  }
  console.log(count("aababbccdddaa"));

  //Return the letter which is repeated more then half times else return -1
  //https://q4interview.com/programming-questions/list-of-programs-asked-in-nagarro/1
  //1) Given a sorted array of N integers and an integer K. 
  //   You have to find the top 5 elements from an array which are closest to integer K.
  //2) Given an array of N integers (-ve and +ve).
  //   You have to find all subarrays having Sum of all elements equal to Zero.
  //3) Given 2 strings of length N and M. You have to find the length 
  //   of the longest common substring.
  //4) Given a Stack of N elements. You have to reverse the stack.
  //5) https://www.geeksforgeeks.org/java-program-for-longest-increasing-subsequence/
  //6) LIS:  Longest Increasing Subsequence [Dynamic programming]. (https://www.geeksforgeeks.org/java-program-for-longest-increasing-subsequence/)
  //Love letter: Given a sentence, and a number k which describes how many times each word was rotated from left to right, tell a number of words that remain the same before and after rotation.
  //Minimum height: Given the Level order, In order sequence, and the number of nodes in a tree. We have to return the minimum depth of the tree.
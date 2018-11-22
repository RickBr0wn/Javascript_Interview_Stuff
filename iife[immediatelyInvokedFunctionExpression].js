// Immediately invoked function expression
(function iife(num) {
  /**
  |--------------------------------------------------
  | toBeAssignedTheSame is in its own scope
  |--------------------------------------------------
  */
  const toBeAssignedTheSame = 5
  return num
})(10) //?

/**
|--------------------------------------------------
| this assignment is not affected by the previous assignment 
|--------------------------------------------------
*/
const toBeAssignedTheSame = 10
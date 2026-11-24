# Palindrome Number Checker (`isPalindrome`)

A JavaScript function that determines whether a given integer is a **palindrome** — i.e., it reads the same forwards and backwards.

## 📋 Problem Statement

Given an integer `x`, return `true` if `x` is a palindrome, and `false` otherwise.

### Constraints
- `-2^31 <= x <= 2^31 - 1` (standard 32-bit signed integer range)

### Examples

| Input   | Output  | Explanation                          |
|---------|---------|--------------------------------------|
| `121`   | `true`  | Reads the same both ways             |
| `-121`  | `false` | Reads `-121` vs `121-` → not equal   |
| `10`    | `false` | Reads `10` vs `01` → not equal       |
| `0`     | `true`  | Single digit is always a palindrome  |
| `12321` | `true`  | Symmetric around the center          |

## 🧠 Approach

The solution uses the **two-pointer technique**:

1. **Reject negatives** — a minus sign (`-`) can never form a palindrome.
2. **Handle single-digit numbers** — any number from `0` to `9` is a palindrome.
3. **Convert to a string array** — split the digits so each can be compared individually.
4. **Use two pointers** — one starting at the beginning (`left = 0`) and one at the end (`right = length - 1`).
5. **Compare and move inward** — if any mismatch is found, return `false`. Otherwise, keep moving both pointers toward the center.
6. **Return `true`** — if the loop completes without a mismatch, the number is a palindrome.

## 💻 Solution

```javascript
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    // Negative numbers can never be palindromes
    if (x < 0) {
        return false;
    }

    // Single-digit numbers (0–9) are always palindromes
    if (x === 0 || x < 10) {
        return true;
    }

    // Convert the number into an array of digits
    let number = String(x).split('').map(Number);
    let left = 0;
    let right = number.length - 1;
    let i = 0;

    // Two-pointer comparison
    while (left < right) {
        if (number[i] !== number[number.length - 1 - i]) {
            return false;
        }
        left++;
        right--;
        i++;
    }

    return true;
};
# Two Sum

## Description
Finds two indices in an array whose values add up to a given target.

## Function Signature
```js
twoSum(nums: number[], target: number): number[]
```

## Parameters
- `nums` — Array of integers.
- `target` — Target sum.

## Returns
- An array `[i, j]` of the two indices where `nums[i] + nums[j] === target`.

## Approach
Brute force: nested loops check every pair of elements.

## Complexity
- **Time:** O(n²)
- **Space:** O(1)

## Example
```js
twoSum([2, 7, 11, 15], 9); // [0, 1]
```
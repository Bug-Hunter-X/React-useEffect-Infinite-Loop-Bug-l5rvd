# React useEffect Infinite Loop Bug

This repository demonstrates a common React bug involving an infinite loop in the `useEffect` hook. The bug arises from incorrectly including the state variable directly in the dependency array of `useEffect`, leading to an infinite re-render cycle.

## Bug Description
The `useEffect` hook is used to perform side effects after a component renders.  When a value in the dependency array changes, the effect function runs again. In this example, the `count` state variable is directly included in the dependency array, causing the effect to run every time the `count` changes (which happens when the button is clicked).  The `console.log` inside the effect then triggers a re-render, which further changes `count` and results in another execution of the effect, creating an infinite loop.

## How to Reproduce
1. Clone the repository
2. Run `npm install`
3. Run `npm start`
4. Observe the infinite loop in your browser's console and the continuously updating counter.

## Solution
The solution is to correctly manage the dependency array. In this specific example, there's no need to log the change of count in the effect, and the solution avoids logging inside `useEffect` altogether.
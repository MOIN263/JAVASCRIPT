// In JavaScript, the break and continue statements are known as control flow statements. They are used to alter the flow of control within loops or conditional statements.

// break statement: The break statement is used to exit or terminate a loop or switch statement prematurely. When the break statement is encountered, the execution of the loop or switch statement is immediately stopped, and the program continues to execute the next statement after the loop or switch.

for (let i = 0; i < 10; i++) {
  if (i === 5) {
    break; // Exit the loop when i equals 5
  }
  console.log(i);
}

// continue statement: The continue statement is used to skip the current iteration of a loop and move to the next iteration. When the continue statement is encountered, the remaining code inside the loop body for the current iteration is skipped, and the loop proceeds to the next iteration.

for (let i = 0; i < 10; i++) {
  if (i === 5) {
    continue; // Skip the iteration when i equals 5
  }
  console.log(i);
}

// The break and continue statements are useful for controlling the flow of execution within loops. The break statement allows you to terminate the loop prematurely, while the continue statement allows you to skip certain iterations and continue with the next iteration.
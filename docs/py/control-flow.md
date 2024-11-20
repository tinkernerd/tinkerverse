---
title: Control Flow
category: Python
dateCreated: 2024-11-19
type: Notes
tags: [control flow, python]
outline: deep
---

# Control Flow in Python

## Overview
Control flow determines the order in which statements are executed in a program. Python provides three main types of control flow mechanisms:
1. Conditional Statements
2. Loops
3. Control Statements (e.g., `break`, `continue`, `pass`)

---

## Conditional Statements
Conditional statements execute specific blocks of code based on conditions.

### `if` Statement
1. Executes a block of code if the condition is `True`.
2. Syntax:
   ```python
   if condition:
       # code block
   ```

Example:
```python
x = 10
if x > 5:
    print("x is greater than 5")
```

---

### `if-else` Statement
1. Executes one block if the condition is `True`, another block if it is `False`.
2. Syntax:
   ```python
   if condition:
       # code block
   else:
       # alternate block
   ```

Example:
```python
x = 3
if x > 5:
    print("x is greater than 5")
else:
    print("x is less than or equal to 5")
```

---

### `if-elif-else` Statement
1. Allows multiple conditions to be tested sequentially.
2. Syntax:
   ```python
   if condition1:
       # code block
   elif condition2:
       # another code block
   else:
       # fallback code block
   ```

Example:
```python
x = 10
if x > 10:
    print("x is greater than 10")
elif x == 10:
    print("x is equal to 10")
else:
    print("x is less than 10")
```

---

### Nested `if` Statements
1. Place an `if` statement inside another `if` to create nested conditions.

Example:
```python
x = 15
if x > 10:
    if x % 2 == 0:
        print("x is greater than 10 and even")
    else:
        print("x is greater than 10 and odd")
```

---

## Loops
Loops are used to execute a block of code multiple times.

### `while` Loop
1. Executes a block of code while a condition is `True`.
2. Syntax:
   ```python
   while condition:
       # code block
   ```

Example:
```python
x = 0
while x < 5:
    print(x)
    x += 1
```

#### `else` Clause with `while`
1. The `else` block executes after the loop ends, provided it wasn’t interrupted by `break`.

Example:
```python
x = 0
while x < 3:
    print(x)
    x += 1
else:
    print("Loop completed")
```

---

### `for` Loop
1. Iterates over a sequence (e.g., list, string, range).
2. Syntax:
   ```python
   for variable in iterable:
       # code block
   ```

Example:
```python
fruits = ["apple", "banana", "cherry"]
for fruit in fruits:
    print(fruit)
```

#### `else` Clause with `for`
1. The `else` block executes after the loop ends, provided it wasn’t interrupted by `break`.

Example:
```python
for num in range(3):
    print(num)
else:
    print("Loop completed")
```

---

## Control Statements
Control statements modify the flow of execution in loops.

### `break`
1. Exits the loop immediately.
2. Commonly used with conditional statements.

Example:
```python
for num in range(10):
    if num == 5:
        break
    print(num)
```

---

### `continue`
1. Skips the current iteration and proceeds to the next.
2. Commonly used with conditional statements.

Example:
```python
for num in range(5):
    if num == 3:
        continue
    print(num)
```

---

### `pass`
1. Does nothing; acts as a placeholder.
2. Useful in situations where code will be implemented later.

Example:
```python
for num in range(5):
    if num == 3:
        pass  # Placeholder for future code
    else:
        print(num)
```

---

## `while` vs `if`
1. `if` executes a block of code once if a condition is `True`.
2. `while` executes a block of code repeatedly as long as a condition is `True`.

### Example Comparison:
#### `if` Statement:
```python
x = 3
if x < 5:
    print("x is less than 5")
```

#### `while` Loop:
```python
x = 0
while x < 5:
    print("x is less than 5")
    x += 1
```

---

## Program Flow
1. Python follows a **top-down execution** model, meaning statements are executed line by line in the order they appear.
2. Conditional and loop statements modify this flow.

---

## Summary
1. Control flow structures like `if`, `for`, and `while` help dictate the order of execution in a Python program.
2. Use control statements (`break`, `continue`, `pass`) to refine loop behavior.
3. Nested and sequential logic allows for complex decision-making within code.

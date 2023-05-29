            
# DATA STRUCTURE THEORY 

### DATA STRUCTURE AND ALGORITHM

* Data structure is a particular way of storing and organizing data to use the data efficiently and effectively. The main idea behind this concept is reduce the time Complexity.
* Algorithms are step by step instructions to resolve a specific tak.

<br>

### MEMORY ALLOCATION AND MEMORY LEAK

 * While running a programme that needs corresponding memory space to store values. So allocation of memory for a programme is known as memory allocation. 
 * Memory leak is when a programme holds memory that is no longer needed. It can cause the programme will crash.

<br>

### COMPLEXITY ANALYSIS

```Complexity Analysis is a method to analyse the efficiency of an algorithm. The main goal is to determine how much time and space is required to solve a  task.```

<br>

### ASYMPTOTIC ANALYSIS

``` Asymptotic notations are mathematical tools used to describe the behavior of a function as its input size approaches infinity. (Asymptotic notations are mathematical tools to represent time and space Complexity in a programme.)``` 
<br>
There are 3 main types of notations.

1. Big O notation (O):
 This notation represents the upper bound of the growth rate of a function. It is used to 
 describe the worst-case scenario of an algorithm's time complexity. For example, if an algorithm
 has a time complexity of O(n), it means that the algorithm's running time will never exceed a 
 linear function of the input size n.

2. Omega notation (Ω): This notation represents the lower bound of the growth rate of a function. 
 It is used to describe the best-case scenario of an algorithm's time complexity. For example, 
 if an algorithm has a time complexity of Ω(n), it means that the algorithm's running time will 
 always be at least a linear function of the input size n.

3. Theta notation (Θ):
 This notation represents the tight bound of the growth rate of a function. It is used to describe
 the average-case scenario of an algorithm's time complexity. For example, if an algorithm has a 
 time complexity of Θ(n), it means that the algorithm's running time will always be a linear function
 of the input size n.


<br>

### CONCEPTS OF ARRAY

```Array is a collection of elements that is stored in a contiguous memory location. So each and every data accessing is easy through indexing. Array using 4 bytes for one element.```

<br>

### CONCEPTS OF LINKED LIST

```Linked list is a linear data structure that includes a series of connected nodes.Each node consists of a value and a pointer. That pointer points to the next node. It’s not a continuous allocation. So traversal is necessary to access value.```

#### **There are 3 types of linked list.**

1. **Singly linked list:**
  Each node contains a value and  a pointer. That pointer holds the address of the next node.
And the last node contains a value and a null value.

2. **Doubly linked list:**
  Each node contains a value and two pointers. A pointer points to the next node and the other one 
points to the previous node.

3. **Circular linked list:**
  Circular linked list are the variation of a linked list. In which the last node points to the first
node.

<br>

### CONCEPTS OF STRING

```A string is a sequence of characters that are used to represent text. The characters in a string can include letters, numbers, symbols, and whitespace. Strings are represented as an array of characters, where each character is assigned a unique numerical code. The most commonly used character encoding is ASCII (American Standard Code for Information Interchange), which assigns a unique code to each of the 128 characters in the ASCII character set.```

Strings can be created in several ways, including using string literals, which are enclosed in quotation marks, 
or by concatenating multiple strings together using the + operator. String manipulation operations can include 
searching for a specific character or substring within a string, extracting a substring from a larger string, or
replacing one or more characters within a string.Because strings are a fundamental data type in programming.


<br>

### LINEAR AND BINARY SEARCH

 * Linear search and binary search are used in the case of arrays to access elements. 

 * Sometimes binary search is an efficient way to get the access of an index .In the case
of binary search first we need to sort the array .Otherwise it is not possible to do binary  
search.

<br>

### RECURSION

```Recursion  is a problem solving technique to simplify the solution. Function call by itself is Recursion .<br> Every recursive solution needs to have a base case. That means a condition to terminate the<br> recursion.```

<br>
Advantages

 * Simplifies Complex Data Structures
 * Recursive data structures, like linked lists and trees, can be naturally represented and manipulated using recursive algorithms. Recursive functions can traverse, search, or perform operations on these structures more elegantly compared to iterative approaches.
 * Recursive solutions can often be more concise and expressive than their iterative counterparts. 
<br>

Disadvantages
* Recursion uses more processor time.
* very difficult to trace.
* Each recursive call consumes memory on the call stack, and if the recursion goes too deep without a base case or proper termination condition, it can exhaust the available stack space, resulting in a stack overflow error.
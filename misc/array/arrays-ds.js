// An array is a type of data structure that stores elements of the same type in a contiguous block of memory. In an array, A, of size N, each memory location has some unique index,  (where 0 <), that can be referenced as  (you may also see it written as ).
//
// Given an array, , of  integers, print each element in reverse order as a single line of space-separated integers.
//
// Note: If you've already solved our C++ domain's Arrays Introduction challenge, you may want to skip this.
//
// Input Format
// 4
// 1 4 3 2
//
// The first line contains an integer,  (the number of integers in ).
// The second line contains  space-separated integers describing .
//
// Constraints
//
// Output Format
// 2 3 4 1
//
// Print all  integers in  in reverse order as a single line of space-separated integers.
// https://www.hackerrank.com/challenges/arrays-ds

(function() {
	var array_reverse = function(data) {
     return data.reverse();
	};
  console.log(array_reverse([1, 4, 3, 2]));
})();

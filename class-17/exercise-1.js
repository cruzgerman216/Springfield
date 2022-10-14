function isAnagram(first, second) {
  console.log(first.split("").sort().join() === second.split("").sort().join());
}

isAnagram("cinema", "iceman"); // true
isAnagram("organge", "yellow"); //false

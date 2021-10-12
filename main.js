let str = 'ass';

str = str.split(''); // (3) ["a", "s", "s"]
str.shift(); // (2) ["s", "s"]
str = str.join(''); // "ss"
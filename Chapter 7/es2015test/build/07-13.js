'use strict';

var teams = new Map();
teams.set('LG', '트윈스');
teams.set('NC', '다이노스');
teams.set('삼성', '라이온즈');
teams.set('기아', '타이거즈');
teams.set('한화', '이글즈');
teams.set('롯데', '자이언츠');

console.log(teams.has('SK'));
console.log(teams.get('LG'));
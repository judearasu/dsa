// Given
const endorsements = [
    { skill: 'css', user: 'Bill' },
    { skill: 'javascript', user: 'Chad' },
    { skill: 'javascript', user: 'Bill' },
    { skill: 'css', user: 'Sue' },
    { skill: 'javascript', user: 'Sue' },
    { skill: 'html', user: 'Sue' },
];
const skills = group(endorsements);

console.log(skills);

// Output is an array of users grouped by skill and their count in descending order.
// console.log(endorsements);
// [
//   { skill: 'javascript', users: ['Chad', 'Bill', 'Sue'], count: 3 },
//   { skill: 'css', users: ['Bill', 'Sue'], count: 2 },
//   { skill: 'html', users: ['Sue'], count: 1 },
// ]

//

let x = endorsements.reduce((acc, { skill, user }) => {
    if (skill in acc) {
        acc[skill] = {
            user: [...acc[skill]['user'], user],
            count: acc[skill]['count'] + 1,
            skill: skill,
        };
    } else {
        acc[skill] = {
            user: [user],
            count: 1,
            skill: skill,
        };
    }

    return acc;
}, {});

// console.log(Object.values(x));

function group(endorsements) {
    let outPut = [];
    let skillMap = {};
    for (let char of endorsements) {
        if (char['skill'] in skillMap) {
            skillMap[char['skill']] = [...skillMap[char['skill']], char['user']];
        } else {
            skillMap[char['skill']] = [].concat(char['user']);
        }
    }

    console.log(skillMap)
    for (let key in skillMap) {
        let skillObj = {};
        skillObj['skill'] = key;
        skillObj['user'] = skillMap[key];
        skillObj['count'] = skillMap[key].length;
        outPut.push(skillObj);
    }
    return outPut.sort((a, b) => b.count - a.count);
}
// let data = [
//     {
//         name: `dCanada`,
//         capital: `Ottawa`,
//         population: 120,
//         region: `North America`
//     },
//     {
//         name: `aKyrgyzstan`,
//         capital: `Bishkek`,
//         population: 7,
//         region: `Asia`
//     },
//     {
//         name: `cSpain`,
//         capital: `Madrid`,
//         population: 80,
//         region: `Europa`
//     },
//     {
//         name: `bJapan`,
//         capital: `Tokyo`,
//         population: 90,
//         region: `Asia`
//     },
// ];

// const sortedCountries = data.sort((current, next) => {
//     return current.name > next.name ? 1 : -1;
// });

// console.log(sortedCountries);

// data.forEach((country, i) => {
//     console.log(country.capital + ` number ` + (i + 1));
// });

// let countries = data.map((country) => {
//     return country.name;
// });

// console.log(countries);

// let filteredData = data.filter((country) => {
//     return country.population > 20;
// }).map((country) => {
//     return {
//         capiutal: country.capital,
//         population: country.population,
//     }
// })

// console.log(filteredData);

// let sum = data.reduce((acc, country) => {
//     return acc + country.population;
// }, 0);

// console.log(sum);

// const fruits = [`orange`, `banana`, `apple`, `pineapple`];

// if (fruits.includes(`apple`)) {
//     console.log(`Яблокo`);
// }

// let sorted = fruits.sort();

// console.log(sorted);

// const countries = {
//     asia: [ 
//         {
//             name: `bJapan`,
//             capital: `Tokyo`,
//             population: 90,
//             region: `Asia`
//         },
//         {
//             name: `aKyrgyzstan`,
//             capital: `Bishkek`,
//             population: 7,
//             region: `Asia`
//         }
//     ],
//     europa: [
//         {
//             name: `cSpain`,
//             capital: `Madrid`,
//             population: 80,
//             region: `Europa`
//         },
//     ],
// };

// let capital = Object.values(countries).flat().map((country) => {
//     return country.capital
// });
// console.log(capital);

const tasks =   [
    {
        id: 234,
        title: `Create user registration API`,
        timeSpent: 4,
        category: `Backend`,
        type: `task`,
    },
    {
        id: 235,
        title: `Create user registration UI`,
        timeSpent: 8,
        category: `Frontend`,
        type: `task`,
    },
    {
        id: 237,
        title: `User sign-in via Google UI`,
        timeSpent: 3.5,
        category: `Frontend`,
        type: `task`,
    },
    {
        id: 238,
        title: `User sign-in via Google API`,
        timeSpent: 5,
        category: `Backend`,
        type: `task`,
    },
    {
        id: 241,
        title: `Fix account linking`,
        timeSpent: 5,
        category: `Backend`,
        type: `bug`,
    },
    {
        id: 250,
        title: `Fix wrong time created on new record`,
        timeSpent: 1,
        category: `Backend`,
        type: `bug`,
    },
    {
        id: 262,
        title: `Fix sign-in failed messages`,
        timeSpent: 2,
        category: `Frontend`,
        type: `bug`,
    },
];

// let filterTasks = tasks.filter((task) => {
//     return task.category === `Frontend`;
// }).reduce((acc, time) => {
//     return acc + time.timeSpent
// }, 0);

// console.log(filterTasks);

// let filterTasks = tasks.filter((task) => {
//     return task.type === `bug`;
// }).reduce((acc, time) => {
//     return acc + time.timeSpent
// }, 0);

// console.log(filterTasks);

// let filterTasks = tasks.filter((task) => {
//     return task.title.includes(`UI`);
// });

// console.log(filterTasks);


// let filterTasks = tasks.filter((task) => {
//     return task.category === `Backend` && task.timeSpent === 4;
// }).reduce((acc, task) => {
//         return acc + task;
// }, 0);

// console.log(filterTasks);

// let filterObject = tasks.filter((task) => {
//     return task.
// })

// let filterObject = tasks.filter((task) => {
//     return task.title && task.category;
// }).map((task) => {
//     return {
//         title: task.title,
//         category: task.category,
//     }
// });

// console.log(filterObject);
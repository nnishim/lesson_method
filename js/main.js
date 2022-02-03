let data = [
    {
        name: `Canada`,
        capital: `Ottawa`,
        population: 120,
        region: `North America`
    },
    {
        name: `Kyrgyzstan`,
        capital: `Bishkek`,
        population: 7,
        region: `Asia`
    },
    {
        name: `Spain`,
        capital: `Madrid`,
        population: 80,
        region: `Europa`
    },
    {
        name: `Japan`,
        capital: `Tokyo`,
        population: 90,
        region: `Asia`
    },
];

// data.forEach((country, i) => {
//     console.log(country.capital + ` number ` + (i + 1));
// });

let countries = data.map((country) => {
    return country.name;
});
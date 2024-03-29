const readCSV = require('../../src/csvReader');

test('Read CSV File', async () => {
    const data = await readCSV('./sample.csv');
    expect(data.length).toBeGreaterThan(0);
    expect(data.length).toBe(3);
    expect(data[0].name).toBe('John');
    expect(data[0].age).toBe('30'); //ignore the string type here, we will fix this later
    //added some more test cases
    expect(data[1].name).toBe('Jane');
    expect(data[1].age).toBe('25');
    expect(data[2].name).toBe('Bob');
    expect(data[2].age).toBe('22');

    
    
    // extended the csv file added some more data
    // expect(data[2].name).toBe('Bob');
    // expect(data[3].name).toBe('rohan');
    // expect(data[4].name).toBe('shalu');
    // expect(data[5].age).toBe('21');
});
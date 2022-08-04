const orig = {
    test: 'test',
    userDetails: {
        address: {
            province: 'Province',
            country: 'country'
        },
        name: 'myObject'
    }
}

const copy = orig;

copy.test = 'newTest';

console.log('orig:', orig);

console.log('copy:', copy);
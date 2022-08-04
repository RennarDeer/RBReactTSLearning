const orig = {
    test: 'test',
    userDetails: {
        address: {
            province: 'Province',
            country: 'country'
        },
        name: 'myObject'
    },
    myFn: () => {},
    undef: undefined,
}

const copy = JSON.parse(JSON.stringify(orig));

copy.userDetails.name = 'newName'

console.log('orig:', orig);

console.log('copy:', copy);


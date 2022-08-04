const userDetails = {
    name: 'Rennar',
    address: 'Anywhere Chicago',
    sample: {
        test: 'test' 
    }
}

const newUserDetails = { ...userDetails, mobileNumber: 8675309 }

console.log('userDetails', userDetails)
console.log ('newUserDetails:', newUserDetails);
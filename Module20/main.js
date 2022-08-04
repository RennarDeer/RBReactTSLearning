const userDetails = {
    name: 'Rennar',
    address: 'Anywhere Chicago',
    sample: {
        test: 'test' 
    }
}

const newUserDetails = { ...userDetails, mobileNumber: 8675309 }

newUserDetails.sample.test = 'newTest'

console.log('userDetails', userDetails)
console.log ('newUserDetails:', newUserDetails);
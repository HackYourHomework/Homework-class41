'use strict';

const getAnonName = (firstName) => {
    return new Promise(function(resolve, reject) {
        setTimeout(() => {
            if (firstName) {
                const fullName = `${firstName} Doe`;
                resolve(fullName);
            } else {
                reject(new Error("You didn't pass in a first name!"));
            }
        }, 1000);
    });
};

function main() {
    getAnonName('John');
}

// ! Do not change or remove the code below
if (process.env.NODE_ENV !== 'test') {
    main();
}
module.exports = getAnonName;
/**
 * creates a promise that resolves/rejects after "wait" milliseconds 
 * @param {number} wait wait time for the async function to resolve/reject
 */
function getPromise(wait, message = 'Success') {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            resolve(message);
        }, wait);
    });
}

export default getPromise;
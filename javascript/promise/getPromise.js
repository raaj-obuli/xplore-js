/**
 * creates a promise that resolves/rejects after "wait" milliseconds 
 * @param {number} wait wait time for the async function to resolve/reject
 */
function getPromise(wait) {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            resolve('Success');
        }, wait);
    });
}

export default getPromise;
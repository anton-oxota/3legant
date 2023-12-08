'use strict';

function getData(url) {
    return new Promise((resolve, reject) => {
        fetch(url)
            .then(response => {
                if (!response.ok) {
                    reject(response)
                }

                return response.json()
            })
            .then(resolve)
            .catch(reject)
    })
}

export default getData;
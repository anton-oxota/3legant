function postData(url, body) {
    return new Promise((resolve, reject) => {
        fetch(url, {
            method: 'POST',
            body: JSON.stringify(body),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
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

export default postData
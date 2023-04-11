const UNAUTHORIZED = 401;
const SERVER_INTERNAL_ERROR = 500;

const callService = (name, args, contextId) => {
    const url = `/services?name=${name}`;
    const jsonData = JSON.stringify({ args, contextId });

    const resultPromise = fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: jsonData
    })
        .then((res) => {
            if (res.status === UNAUTHORIZED) {
                window.location.reload();
                return res.json();
            }
            if (res.status < SERVER_INTERNAL_ERROR) {
                return res.json();
            }
            return res.json();
        })
        .catch((error) => ({
            success: false,
            error: {
                code: 500,
                message: error.message
            }
        }));

    return resultPromise;
};

export default callService;

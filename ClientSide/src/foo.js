const p = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve('Ohai, promised');
    }, 100);
});

async function message() {
    const m = await p;
    return m;
};

export default message;

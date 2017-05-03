import get from 'qajax'
import Qajax from 'qajax'

const url_base = 'https://api.npmjs.org/downloads/point/1900-01-01';

let getNpmStats = (packageName) => {
    let today = new Date();
    let endDate = `${today.getFullYear()}-${today.getMonth()+1}-${today.getDate()}`;
    let packageUrl = `${url_base}:${endDate}/${packageName}`;

    return get(packageUrl)
        .then(Qajax.toJSON)
        .then(function(data) {
            return new Promise((resolve, reject) => {
                if (data && data.downloads) {
                    resolve(data.downloads);
                } else {
                    throw 'Failed to get npm package stats for - ' + packageName;
                }
            })
        })
        .catch(err => {
            console.log(err);
            return Promise.reject('Failed to get npm package stats for - ' + packageName);
        });
};

export { getNpmStats };
/**
 * @returns {Promise}
 */
export function fetchCategories() {
    //  faking an ajax call
    return new Promise((resolve, reject) => {
        resolve({
            data: {
                'hydra:member': window.categories,
            },
        });
    });
}

export const getSortArr = (arr, field, flag) => arr.sort((a, b) => flag ?
    b[field] - a[field] : 
    a[field] - b[field]
);

export const declOfNum = (n, titles) => {
    return titles[(n % 10 === 1 && n % 100 !== 11) ? 0 : n % 10 >= 2 && n % 10 <= 4 && (n % 100 < 10 || n % 100 >= 20) ? 1 : 2]
}
const last = 'bos';
const middle = 'slam dunk';

export function returnHi(name) {
    return `Hi ${name} ${last}`;
}

const first = 'wes';
// named exports - we have as many as we want
export { last, middle };
export default first;


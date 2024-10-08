console.log('test...');

export const val1 = 'hello';
export const val2 = 'hello';
export const val3 = 'hello';


export default function test() {
    console.log('test function');
}

// async function testFetch() {

// }

// testFetch();

// top level await
{
    const response = await fetch('test.json');
    const data = await response.json();
    console.log(data);
}

export default function HelloProps({ name, age, someFunc, someArr, someObj, someJSX }) {

    return (
        <div>
            <p>my name is {name} and age is {age}</p>
            <strong>you are {someFunc()}</strong>
            <p>this is someArr {someArr}</p>
            <p>this is someObj {someObj.one}</p>
            {someJSX}
        </div>
    )
}
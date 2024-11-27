import { collection, addDoc } from "firebase/firestore";
import { useReducer } from "react"
import { appFireStore, timeStamp } from "../firebase/config";


const initState = {
    document: null,
    isPending: false,
    error: null,
    success: false
}


const storeReducer = (state, action) => {
    switch (action.type) {
        case 'addDoc':
            return { isPending: false, document: action.payload, success: true, error: null }
        case 'isPending':
            return { isPending: true, document: null, error: null, success: false }
        case 'error':
            return { isPending: false, document: null, error: action.payload, success: false }
        default:
            return state;
    }
}


export const useFirestore = (transaction) => {


    const [response, dispatch] = useReducer(storeReducer, initState);

    const colRef = collection(appFireStore, transaction);


    // 컬랙션에 도큐먼트를 추가합니다.
    const addDocument = async (doc) => {
        dispatch({ type: 'isPending' });
        try {
            const createdTime = timeStamp.fromDate(new Date());
            const docRef = await addDoc(colRef, { ...doc, createdTime });
            dispatch({ type: 'addDoc', payload: docRef });
        } catch (error) {
            dispatch({ type: 'error', payload: error });
        }
    }

    const deleteDocument = () => {

    }


    return { addDocument, deleteDocument, response }

}
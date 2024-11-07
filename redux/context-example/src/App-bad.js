import { createContext, useState, useContext } from 'react';


const UserContext = createContext();

const UserProvider = ({ children }) => {

  const [userData, setUserData] = useState({
    name: '재현',
    email: 'test@test.com',
    alam: {
      theme: 'dark',
      fontSize: '16'
    },
    cart: {
      items: [],
      totalPrice: 0
    }
  });

  const updateCartTotal = (value) => {
    setUserData((prev) => {
      return ({
        ...prev,

        cart: {
          items: [],
          totalPrice: value
        }
      })
    });
  }

  return (
    <UserContext.Provider value={{ userData, updateCartTotal }}>
      {children}
    </UserContext.Provider>
  )
}

const CartTotal = () => {
  const { userData } = useContext(UserContext);

  return (
    <strong style={{ display: 'block' }}>총 금액: {userData.cart.totalPrice}</strong>
  )
}

const Email = () => {
  const { userData } = useContext(UserContext);

  return (
    <strong style={{ display: 'block' }}>이메일: {userData.email}</strong>
  )
}


const Alam = () => {
  const { userData } = useContext(UserContext);

  return (
    <strong style={{ display: 'block' }}>테마: {userData.alam.theme}</strong>
  )
}

const UpdateCartTotal = () => {

  const { updateCartTotal } = useContext(UserContext);

  return (
    <button onClick={() => updateCartTotal(10)}>버튼!!</button>
  )
}


function App() {
  return (
    <div>
      <UserProvider>
        <CartTotal />
        <Alam />
        <Email />
        <UpdateCartTotal />
      </UserProvider>
    </div>
  );
}
export default App;

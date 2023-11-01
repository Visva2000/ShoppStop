import {  RouterProvider } from "react-router-dom";
import { Provider } from "react-redux"
import store from "./redux/store";
import ROUTES from "./routes";

function App() {
  return (
    <Provider store={store}>
      <RouterProvider router={ROUTES}/>
    </Provider>
  )
}

export default App

  

{/* <BrowserRouter>
<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/signin" element={<SignIn />} />
  <Route path="/signup" element={<SignUp />} />
  <Route path="/movies" element={<Movies />} />
  <Route path="/cart" element={<Cart />} />
  <Route path="/product/:id" element={<Product />} />
  <Route path="*" element={<NotFound />} />

  {
    ROUTES.map((Route)=>(
      <Route path={Route.path} element={Route.element} key={Route.path}/>
    ))
  }
</Routes>
</BrowserRouter> */}
import HomePage from "./Pages/Home/HomePage"
import UserPage from "./Pages/Users/UserPage"
import NewUserPage from "./Pages/NewUser/NewUserPage"
import Products from "./Pages/Products/ProductPage"

let routes=[
 {path:'/',element:<HomePage/>},
 {path:'/users',element:<UserPage/>},
 {path:'/newuser',element:<NewUserPage/>},
 {path:'/products',element:<Products/>},
]
export default routes
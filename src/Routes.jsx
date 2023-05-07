import HomePage from "./Pages/Home/HomePage"
import UserPage from "./Pages/Users/UserPage"
import NewUserPage from "./Pages/NewUser/NewUserPage"
import Products from "./Pages/Products/ProductPage"
import Dashboard from "./Components/Dashboard/Dashboard"

let routes=[
 {path:'/',element:<HomePage/>},
 {path:'/users',element:<UserPage/>},
 {path:'/newuser',element:<NewUserPage/>},
 {path:'/products',element:<Products/>},
 {path:'/dashboard',element:<Dashboard/>},
]
export default routes
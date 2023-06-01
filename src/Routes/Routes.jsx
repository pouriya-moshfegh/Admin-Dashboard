import HomePage from "../Pages/Home/HomePage"
import UserPage from "../Pages/Users/UserPage"
import Productspage from "../Pages/Products/ProductPage"
import Dashboard from "../Components/Dashboard/Dashboard"
import CommentPage from "../Pages/Comments/CommentPage"
import OrderPage from "../Pages/Orders/OrderPage"
let routes=[
 {path:'/',element:<HomePage/>},
 {path:'/users',element:<UserPage/>},
 {path:'/products',element:<Productspage/>},
 {path:'/comments',element:<CommentPage/>},
 {path:'/orders',element:<OrderPage/>},
 {path:'/dashboard',element:<Dashboard/>},
]
export default routes
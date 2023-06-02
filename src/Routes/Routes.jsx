import HomePage from "../Pages/Home/HomePage"
import UserPage from "../Pages/Users/UserPage"
import AnalyticsPage from "../Pages/Analytics/AnalyticsPage"
import SalesPage from "../Pages/Sales/SalesPage"
import Productspage from "../Pages/Products/ProductPage"
import Dashboard from "../Components/Dashboard/Dashboard"
import CommentPage from "../Pages/Comments/CommentPage"
import OrderPage from "../Pages/Orders/OrderPage"
let routes=[
 {path:'/',element:<HomePage/>},
 {path:'/users',element:<UserPage/>},
 {path:'/sales',element:<SalesPage/>},
 {path:'/analytics',element:<AnalyticsPage/>},
 {path:'/products',element:<Productspage/>},
 {path:'/comments',element:<CommentPage/>},
 {path:'/orders',element:<OrderPage/>},
 {path:'/dashboard',element:<Dashboard/>},
]
export default routes
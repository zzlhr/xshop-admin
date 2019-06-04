import UserList from "@/pages/user/UserList";
import Index from "@/pages/Index";
import Home from "@/pages/Home"
import Login from "@/pages/Login";

const routes = [
    {
        path: '/',
        name: "home",
        component: Home,
        children: [{
            path: '/home',
            name: "Index",
            component: Index
        }, {path: '/user-list', name: "userList", component: UserList},]
    },
    {path: '/login', name: "login", component: Login},
];

export default routes;
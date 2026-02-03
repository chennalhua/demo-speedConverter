import { BrowserRouter as Router, Route } from 'react-router-dom';
import Login from '../view/Login';
import SignUp from '../view/SingUp'
import TodoList from '../view/TodoList'
import Test from '../view/Test'
const AppRouter = () => { //使用 react-router-dom v5 版本
    return (
        <>
            <Router>
                <Route exact path='/'><Login /></Route>
                <Route exact path='/signUp'><SignUp /></Route>
                <Route exact path='/todo'><TodoList /></Route>
                <Route exact path='/test'><Test /></Route>
            </Router>
        </>
    )
}
export default AppRouter
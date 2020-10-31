import { Route, Switch } from "react-router-dom"
import App from "./App"

export default () => {
    return (
        <Switch>
            <Route exact path="/" component={App} />
        </Switch>
    )
}
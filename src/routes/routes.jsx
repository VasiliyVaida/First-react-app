import { Switch, Route } from 'react-router-dom';
import { CounterPage } from '../pages/CounterPage';
import { HomePage } from '../pages/HomePage';
import { ListsPageContainer } from '../pages/ListsPage/container';
import { UserPageContainer } from '../pages/UsersPage/container';
import { ROUTES } from './routesNames';

export const Routes = () => {
  return (
    <Switch>
      <Route exact path={ROUTES.HOME_PAGE} component={HomePage} />
      <Route exact path={ROUTES.COUNTER_PAGE} component={CounterPage} />
      <Route exact path={ROUTES.HOOK_COUNTER} component={() => <div>Hook page</div>} />
      <Route exact path={ROUTES.LISTS_PAGE} component={ListsPageContainer} />
      <Route exact path={ROUTES.USERS_PAGE} component={UserPageContainer} />
    </Switch>
  )
}
import { Button,Search, PullRefresh, Tag, Popover, Overlay, NavBar, Icon, Empty, BackTop  } from 'vant'

const install = (app) => {
  app.use(Button)
    .use(Search)
    .use(PullRefresh)
    .use(Tag)
    .use(Popover)
    .use(Overlay)
    .use(NavBar)
    .use(Icon)
    .use(Empty)
    .use(BackTop)
};

export default {
  install
}
import Devpanel from './devpanel/devpanelScene'
import App from './app/appScene'
import Stars from './stars/starsScene'
export const Scenes = {
  Home: 'Home',
  Stars: 'Stars',
  DevPanel: 'DevPanel'
}
export default {
  [Scenes.Home]: { screen: App },
  [Scenes.Stars]: { screen: Stars },
  [Scenes.DevPanel]: { screen: Devpanel }
}

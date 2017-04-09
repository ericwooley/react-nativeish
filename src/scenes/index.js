import App from './app/appScene'
import Stars from './stars/starsScene'
export const Scenes = {
  Home: 'Home',
  Stars: 'Stars'
}
export default {
  [Scenes.Home]: { screen: App },
  [Scenes.Stars]: { screen: Stars }
}

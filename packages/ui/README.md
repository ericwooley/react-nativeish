React Native...ish V2
==================================
Maximizing code reuse for Create React App and Create React Native App
-------------------------------------------------------------------

### Quick Feature Compare
* Architecture that supports code sharing between [CRA](https://github.com/facebookincubator/create-react-app) and [CRNA](https://github.com/react-community/create-react-native-app)
* [React Navigation for mobile](https://reactnavigation.org/) & [React Router 4 for web](https://reacttraining.com/react-router/)
* Storybook for web and for mobile
* jest
* blueprints via [redux-cli](https://github.com/SpencerCDixon/redux-cli)
  1. generates code based on the files in `blueprints/`
* Intended for use with redux-sagas, but they are not installed by default (*blueprints for sagas are installed.)
* jest with enzyme

### Quick Links
1. [Dependencies](#dependencies) √ 
2. [OnBoarding](#onboarding) √
  * [Libraries](#libraries) √
3. [Development](#developing) √
4. [Deployment](#deployment) ¬
5. [Blueprints](#blueprints) √
6. [References](#references) ¬
7. [Notes](#notes)

Dependencies
------------
1. OSX with xcode (if you want to develop for ios, though you could also use the expo app on an ios device)
2. Node >= 6 (I would use nvm or n)
3. Yarn >= 0.21.3
4. Create React App
5. Create React Native App

OnBoarding
----------
Make sure you understand react/redux/redux-sagas. (Links in the libraries section)

Take a quick look at the directory structure. (explanations follow)
### Directory Structure
```bash
├── App.js                                    # Entry point for exp
├── App.test-m.js                             # unit test for Expo. All mobile tests end with .test-m.js to differentiate them from the mobile versions
├── README.md
├── __mocks__                                 # Mocks for testing
├── app.json                                  # React native and expo file used for app settings, look at the expo docs for more about this
├── blueprints                                # Blueprints folder, contains components, sagas, etc...
├── combined                                  # something expo creates?
├── package.json                      
├── public                                    # CRA webpack public serve file
├── src
│   ├── App.css                               # css file for CRA
│   ├── App.js                                # basic App for CRA, import by index.js
│   ├── App.test.js                           # Test for app for web, all web tests end in .test.js (not .test-m.js)
│   ├── components                            # components, all components should strive to be reusable
│   │   └── Button        
│   │       ├── index.js                      # default button for web (or native, if there is nothing native specific in it)
│   │       ├── index.native.js               # will be imported in mobile, instead of index.js. Use this pattern when you need components to be different for each. You should make them have the same api though.
│   │       ├── index.story.js                # storybook for native
│   │       └── index.story.native.js         # storybook for mobile
│   ├── constants                             # app config, different for mobile and native
│   ├── index.css
│   ├── index.js                              # Entry point for CRA, different than expo, expo expects it to be at the root.
│   ├── logo.svg
│   ├── navigation                            # Routes and navigation setup, different for mobile and native
│   ├── reducers                              # Basic redux reducer setups
│   ├── registerServiceWorker.js              # used by CRA to cache files
│   ├── scenes                                # Screens (routes) which are always different for native and mobile
│   ├── setupTests.js                         # test setup file
│   └── store                                 # stores that are different for mobile and native, so that react-router can be effectively synced.
│       ├── configure-store.js
│       └── configure-store.native.js
└── storybook                                 # storybook folder
    ├── addons.js
    ├── index.js
```
* Components
  Components are like the View in MVC. It should only accept props, and output JSX, with generalized callback props (onClick, onHover, onSomethingCustom, etc...). Think of components like your own personal html framework, these shouldn't know anything about the state of the app.

  1. Stories
  Stories are react storybook stories, and are effectively documentation for the components. 
    
    * run `yarn storybook:web` and open [http://localhost:9001/](http://localhost:9001/) to open the storybook ui
    
    * run `yarn storybook:ios` and open [http://localhost:7007/](http://localhost:7007/) and open the app to get the stories in the simulator

  2. StoyShots
  Storyshots convert storybook stories to jest snapshots. So that when you run unit tests, it checks the underlying dom elements havn't changed.
  
* Containers (Smart Components)
  
  Containers are components that use redux-connect to map a components props to redux state and actions.
    
* Scenes
  
  Scenes are components that are loaded via react native navigation. It should be composed entirely of smart components.
  
* Services
  
  Services are configurable (often singleton) objects which can be imported into other parts of the app. There is no boilerplates for this because each
  case for a service is probably too different.

* Unit Tests
  
  Make sure you understand jest, unit tests, and TDD in general. This project has githooks which check your test on commit.

* Mocks
  This project uses the [axios](https://github.com/mzabriskie/axios) library for xhr requests, and it's compatable with react native. 
  Mocks are done using [axios-mock-adapter](https://github.com/ctimmerm/axios-mock-adapter)

  * see src/services/network


### Libraries
Become very familiar with each of these libraries.

1. [React](https://facebook.github.io/react/)
  * [shouldComponentUpdate](https://facebook.github.io/react/docs/optimizing-performance.html#shouldcomponentupdate-in-action)
  * [Higher Order Components](https://facebook.github.io/react/docs/higher-order-components.html)
  * [React PropTypes](https://facebook.github.io/react/docs/typechecking-with-proptypes.html) should be stricly enforced.

2. [redux](http://redux.js.org/) - Yes, read all of it.
  * [Excellent supplimentary course by the creator of redux](https://egghead.io/courses/getting-started-with-redux)

3. [redux sagas](https://redux-saga.github.io/redux-saga/) are used instead of redux-thunk.
  * requires a basic understanding of [es6 generators](https://davidwalsh.name/es6-generators)

4. [React native](https://facebook.github.io/react-native/)
  * This project also builds on this using [react-native-web](https://github.com/necolas/react-native-web)
    which is a reimplementation of react-native to make it run in a browser.

5. [react-native-elements](https://github.com/react-native-training/react-native-elements) Basic semi-presytled components to make things more usuable.
  * [react-native-vector-icons](https://github.com/oblador/react-native-vector-icons#installation) is installed, default setup only includes the font for font-awesome.
  * [Find your icons here](http://fontawesome.io/icons/)

6. [Recompose](https://github.com/acdlite/recompose) High Order components so that you can just use function based components

7. [Jest](https://facebook.github.io/jest/) Unit test framework, integrates with storyshots instead of jest snapshots

8. [StoryBook](https://github.com/storybooks/react-storybook)/[Storyshots](https://github.com/storybooks/storyshots)
used for individual component development, and to take snapshots of the UI, like jest snapshots.

9. [React Navigation](https://reactnavigation.org/docs/intro/) - Native code excellerated navigation framework

Development
-----------
1. Recommended Editor: [vscode](https://code.visualstudio.com/)
  * There are recommended extensions in the .vscode folder. 
  * Make sure your editor respects the [.editorconfig file](http://editorconfig.org/)
  * Make sure your editor uses the eslint linter.
  
2. Development commands
  * `yarn start`: Runs all processes in terminus-maximus. Open your browser window to localhost:3000 for web, open localhost:9001 for web storybook, localhost:7007 for storybook mobile controller, and open your expo app for developing natively. (note that storybook won't be able to connect from non localhost simulators).

  Also note that the QR code in the terminal is not printed correctly. Try using the expo app, or running `exp start` outside of npm run start to get the qr code to load it onto your phone or simulator

3. Development Workflow 
  * Start by identifying which components you need and start react-storybook `yarn start` and open [http://localhost:9001/](http://localhost:9001/)
    1. Develop the component, and create comprehensive tests.

  * Create containers to wrap them to state, as needed (which can still be done via creating stories in storybook)
    1. This is also a good time to develop any sagas or reducers you need.
    
  * open [http://localhost:3000/](http://localhost:3000/)
    1. Create or open the view you want to develop, navigate there in your app, and happy developing!

  * Once you are happy with the way it looks in web, open it in ios and android, to make sure you didn't miss/break something.
  
  * At this point your unit tests are probably broken from storyshots. `npm run test` and take a look through the broken stories to make sure everything is acceptable. If not, fix whats broken, if so run `npm run test:update` to accept the new DOM changes, and make sure the rest of your tests pass.

  * TIP: when running tests run `npm run test -- --watch` to have jest watch your test files and only run the ones that change.
  
Blueprints
----------
This project takes advantage of the [redux-cli](https://github.com/SpencerCDixon/redux-cli) project. Which allows you to commit your own template files for 
generating. 

** Start your component name with a lowercase, or things may not line up properly ** 

* component -  generates all tests/story/code boilerplate needed for a component. All files are placed in src/components.

  - EG: `redux g component test`

* container -  generates all tests/story/code boilerplate needed for a container. All files are placed in src/container.

  - EG: `redux g container test`

* saga -  generates all test/code boilerplate needed for a saga. All files are placed in src/saga.

  - EG: `redux g saga test`

* scene - generates all test/story/code boilerplate needed for a scene. All files are placed in src/scene.

  - EG: `redux g scene test`

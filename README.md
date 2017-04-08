React Native Web Redux Starter Kit
==================================

## Quick Links
1. [Dependencies](#Dependencies) √ 
3. [Onboarding](#Onboarding) √* 
3. [Development](#Developing) √*
4. [Deployment](#Deployment) ¬
5. [Blueprints](#Blueprints) ¬
6. [References](#References) ¬

Dependencies
------------
1. OSX with xcode
2. Node >= 6 (I would use nvm or n)
3. Yarn >= 0.21.3

Onboarding
----------
Make sure you understand react/redux/redux-sagas. (Links in the libraries section)

Take a quick look at the directory structure. (explanations follow)
### Directory Structure
```bash
├── android                                           # Android build project
├── app.json
├── blueprints                                        # TODO
│   └── component
├── index.android.js                                  # entry point for android
├── index.ios.js                                      # entry point for ios
├── index.web.js                                      # entry point for web
├── ios                                               # IOS build project
├── jsconfig.json                                     # VSCODE JSConfig Project
├── package.json                                      # NPM package file for build scripts.
├── src                                               # app src file
│   ├── __tests__                                     # root tests folder
│   │   ├── __snapshots__                             # storyshots snapshots folder
│   │   └── storybook.test.js                         # Initialization for storyshots
│   ├── assets                                        # Images etc..
│   ├── components                                    # React Components
│   │   ├── index.js                                  # exports all components
│   │   └── <component name>                          # root folder for component
│   │       ├── __tests__                             # component test folder
│   │       │   └── <component name>Component.test.js          # component test file
│   │       ├── <component name>Component.js                   # component file
│   │       └── <component name>Component.story.js             # component story file
│   ├── redux                                         # Redux files
│   │   ├── reducers                                  # redux reducers
│   │   │   ├── __tests__                             # tests for reducers
│   │   │   │   └── <reducer name>Reducer.test.js     # test file for reducer
│   │   │   └── <reducer name>Reducer.js              # redux reducer
│   │   ├── sagas                                     # redux saga files
│   │   │   ├── index.js                              # exports all saga files.
│   │   │   └── <saga name>                           # Saga container
│   │   │       ├── __tests__
│   │   │       │   └── <saga name>Saga.test.js           # Saga test file
│   │   │       └── <saga name>Saga.js                # Saga
│   │   └── store.js                                  # creates and configures the redux store
│   ├── scenes                                        # Scenes (maps to routes, similar to views)
│   │   ├── App                                       # Root scene, contains navigation
│   │   │   ├── App.js
│   │   └── index.js                                  # Exports all scenes
│   └── stories.js                                    # Imports and exports all other stories. 
├── storybook                                         # Native storybook config
├── test_config                                       # Setup files for jest
├── web                                               # Web config files for react-native-web
└── yarn.lock                                         # Locks all libraries in place. 
```
* Components
  Components are like the View in MVC. It should only accept props, and output JSX, with generalized callback props (onClick, onHover, onSomethingCustom, etc...)
  
  * Example: 
    ```js
    // TODO
    ```

  1. Stories
  Stories are react storybook stories, and are effectively documentation for the components. 
    
    * run `yarn storybook:web` and open [http://localhost:9001/](http://localhost:9001/) to open the storybook ui
    
    * run `yarn storybook:web` and open [http://localhost:7007/](http://localhost:7007/) and open the app to get the stories in the simulator

    * Example: 
    ```js
    // TODO
    ```
  2. StoyShots
  Storyshots convert storybook stories to jest snapshots. So that when you run unit tests, it checks the underylying dom elements havn't changed.
  
* Containers (Smart Components)
  Containers are components that use redux-connect to map a components props to redux state and actions. 
  * Example: 
    ```js
    // TODO
    ```
    
* Scenes
  Scenes are components that are loaded via react native navigation. It should be composed entirely of smart components.
  * Example: 
    ```js
    // TODO
    ```

* Redux
  1. Reducers
  TODO
  
  2. Sagas
  TODO
  
* Unit Tests
  TODO


### Libraries
Become familiar with each of these libraries.

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
  * `yarn dev:ios`: run the react-native app in IOS
  * `yarn dev:android`: run the react-native app in ANDROID
  * `yarn dev:web`: run the react-native app in WEB

3. Development Workflow 
  * TODO

Blueprints
----------
TODO

Deployment
----------
TODO

References
----------
TODO

![runs everywhere](./docs/assets/runs-everywhere.png)

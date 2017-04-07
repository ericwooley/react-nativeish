React Native Web Redux Starter Kit
==================================

## Quick Links
1. [Dependencies](#Dependencies) √ 
3. [Onboarding](#Onboarding) √* 
2. [Libraries](#Libraries) √
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
│   │       │   └── <component name>.test.js          # component test file
│   │       ├── <component name>.js                   # component file
│   │       └── <component name>.story.js             # component story file
│   ├── redux                                         # Redux files
│   │   ├── reducers                                  # redux reducers
│   │   │   ├── __tests__                             # tests for reducers
│   │   │   │   └── <reducer name>Reducer.test.js     # test file for reducer
│   │   │   └── <reducer name>Reducer.js              # redux reducer
│   │   ├── sagas                                     # redux saga files
│   │   │   ├── index.js                              # exports all saga files.
│   │   │   └── <saga name>                           # Saga container
│   │   │       ├── __tests__
│   │   │       │   └── <saga name>.test.js           # Saga test file
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
  TODO
  1. Stories
  TODO
  2. StoyShots
  TODO
* Containers (Smart Components)
  TODO
* Scenes
  TODO
  
* Redux
  
  1. Reducers
  TODO
  
  2. Sagas
  TODO
  
* Unit Tests
  TODO


Libraries
---------
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

5. [Native base](https://nativebase.io/) Basic semi-presytled components to make things more usuable.

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

Deployment
----------
TODO

Blueprints
----------
TODO

References
----------
TODO


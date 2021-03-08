# Netflix Clone

Netflix Clone App, you can SignUp with email and password or with a Google Account,
Can see the top ten movies, see the details, see movies related, add or remove from favorites.
Change the pic profile, search for a movie by name. All data is store in Firestore and is unique for each user.

![alt](demo.gif)

## Tech uses

1. React
1. React-Router-dom
1. Styled components
1. Redux and Redux Thunk
1. Firebase Auth and Firestore
1. axios

## install

1. Clone Project
1. npm i
1. add api key from TMDB and firebase api key

### Steps

1. install React router
   npm install react-router-dom
1. install styled component
   npm install --save styled-components
1. install eslint/prettier wesbos config
   npx install-peerdeps --dev eslint-config-wesbos
   fix bug .env SKIP_PREFLIGHT_CHECK=true
1. Create css globlal with styled component
1. Creates Pages Folder and files
1. create pages folder, put app files
1. import the router config in the app file
1. create a nav componetn with 3 route popular aserach upcmong and favorites
1. install redux, react-redux redux-thunk
1. create folder redux/types, redux/reducers redux/actions redux/store.js
1. create types/index.js with login types
1. create a reducer, authReducer
1. create a index reducer to combine reducers
   1.- create store
1. import store into app.js
1. install axios
1. config a axios client
1. create genrelist with the params for the axios query
1. create hero
1. crate component rows action, top, horror, etc
1. create multiple router
1. create login
1. install firebase
1. config firebase Login with Google.
1. create firebase folder, add the config for firebase

import React from "react";
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from "react-router-dom";

const routes= [
    {
        path: "/Home",
        component: Home,
    },
    {
        path: "/LoginForm",
        component: LoginForm
    },
    {
        path: "/SignUpForm",
        component: SignUpForm
    },
    {
        path: "/ProfilePage",
        component: ProfilePage
    },
    {
        path: "/SearchSkater",
        component: SearchSkater,
    },
];

// import middleware
const { authMiddleware } = require('../../utils/auth');

// put authMiddleware anywhere we need to send a token for verification of user
router.route('/').post(createUser).put(authMiddleware, saveSkater);

router.route('/login').post(login);

router.route('/me').get(authMiddleware, getSingleUser);

router.route('/skaters/:skaterId').delete(authMiddleware, deleteSkater);

module.exports = router;

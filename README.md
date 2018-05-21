# HacktivOverflow
Portofolio project HacktivOverflow

[LINK DEPLOY](https://hacktivoverflow.iamsuperpowers.com)

<img src="http://sarahsplace.com.au/wp-content/uploads/2018/02/MADE-WITH-LOVE-800x675.jpg" width="200">

## Stack-tech :dart:

### back-end :wrench:
- [x] RESTful API Using Expressjs, MongoDB (M-Lab), Mongoose
- [x] GCP for service api
- [x] Firebase client hosting
- [ ] Cron scheduler to send report in Telegram Group (using telegram-bot-api)

### front-end :art:
- [x] Bootstrap
- [x] Vue.js, Vuex, Vue-router

---

## RESTful API
[RESTful API hacktivoverflow](http://api.hacktivoverflow.iamsuperpowers.com/)
`http://api.hacktivoverflow.iamsuperpowers.com/`

## Open Endpoints

Open endpoints require no Authentication.

* Login : `POST /api/login/`
* Create user : `POST /api/users/register`

## Endpoints that require Authentication

Closed endpoints require a valid Token to be included in the header of the
request. A Token can be acquired from the Login view above.

### Current User related

Each endpoint manipulates or displays information related to the User whose
Token is provided with the request:

* Delete user token : `DELETE /api/users/logout`

### Question related

Endpoints for viewing and manipulating the Question that the Authenticated User
has permissions to access.

* Show Accessible Question : `GET /api/question/`
* Create Question : `POST /api/question/`
* Show An Question : `GET /api/question/:id/`
* Update An Question : `PATCH /api/question/:id/`
* Delete An Question : `DELETE /api/question/:id/`
* Upvote and Downvote Question

### Answer related

Endpoints for viewing and manipulating the Answer that the Authenticated User
has permissions to access.

* Show Accessible Answer : `GET /api/answer/`
* Create Answer : `POST /api/answer/`
* Upvote and Downvote Answer
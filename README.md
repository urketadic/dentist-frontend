<h1 align="center">
  <br>Dental Clinic web app in React.js
</h1>

<h4 align="center">Appointment web app with React.</h4>

<br>
<p align="center">
  <a href="#about">About</a> •
  <a href="#usage">Demo</a> •
  <a href="#screenshots">Screenshots</a> •
  <a href="#dependencies">Dependencies</a>
</p>

---

## About

<table>
<tr>
<td>
<br>

**React Dent** is a web app for a fictitious dental clinic where a user can register, log in and make appointments with their dentist of choice. The user can view their appointments and cancel them. An admin user can view and cancel appointments for all registered users. The [app's back-end](https://github.com/fbgoode/reactdent-b) manages the available time slots of 5 dentists, allowing users to make appointments only when the selected dentist is available.

We have used ReactJS with Redux and Sass to develop the app.
</br>
</br>

This project was created for educational purposes at <a href="https://geekshubsacademy.com/">GeeksHubs Academy</a>'s Full Stack Developer Bootcamp by Tarek Zemmari and Federico Báez in Valencia, Spain on 2021-3-08 to 2021-3-18.



</td>
</tr>
</table>
<br>

## Demo

### No installation required:
The app is deployed in Heroku at <b>[reactdent.herokuapp.com](https://reactdent.herokuapp.com/)</b>.

<b>IMPORTANT:</b> Please be patient after clicking the link above. The demo goes "asleep" when not viewed in the last 5 minutes. You may need to wait a minute for it to wake up, and you'll probably need to refresh the page.

You can register a new user or log in with one of these:

Type | Email | Password
--- | --- | ---
user | roberto@robertez.com | password123
admin | federico@federiquez.com | password123

<br/>

Check out the [backend repository](https://github.com/fbgoode/reactdent-b).

<br/>

##  Screenshots:

Home (desktop):

![image](https://user-images.githubusercontent.com/77585960/111913668-768eb900-8a6f-11eb-9c28-2ec9fcfe9ea7.png)

Home (mobile) - web is responsive:

![image](https://user-images.githubusercontent.com/77585960/111913815-dab17d00-8a6f-11eb-8a70-d378eb956716.png)

Error verification in registration and log in:

![image](https://user-images.githubusercontent.com/77585960/111913849-f9b00f00-8a6f-11eb-820b-a6b55ae45797.png)

Admin back-office with access to all appointments:

![image](https://user-images.githubusercontent.com/77585960/111913884-1fd5af00-8a70-11eb-96a3-be1b2f7c28a2.png)

User profile page with access to own appointments:

![image](https://user-images.githubusercontent.com/77585960/116004899-1c9c8880-a605-11eb-943b-0dc006dc8b29.png)
![image](https://user-images.githubusercontent.com/77585960/111913976-78a54780-8a70-11eb-919a-102dc2bd99b6.png)

Responsive backoffice - mobile:

![image](https://user-images.githubusercontent.com/77585960/111914060-d6d22a80-8a70-11eb-9ebe-60208a7e5b16.png)

Floating backoffice menu on mobile:

![image](https://user-images.githubusercontent.com/77585960/111914079-e8b3cd80-8a70-11eb-86a6-bd2a26508841.png)

Appointment generation in three steps:

* Select dentist:

![image](https://user-images.githubusercontent.com/77585960/111914200-54963600-8a71-11eb-9e45-c747063ee8c4.png)

* Select date and time:

![image](https://user-images.githubusercontent.com/77585960/111914233-74c5f500-8a71-11eb-8d1b-582c7e36ca22.png)

* Write comments and confirm:

![image](https://user-images.githubusercontent.com/77585960/111914246-8b6c4c00-8a71-11eb-8b4f-a4e41d6b8e6a.png)

Custom success / error message system:

![image](https://user-images.githubusercontent.com/77585960/111914299-b0f95580-8a71-11eb-9286-d968f0cf50e8.png)
![image](https://user-images.githubusercontent.com/77585960/111914426-29f8ad00-8a72-11eb-9b1e-ddff9a0a0fe6.png)

UI / UX design with Figma:

![image](https://user-images.githubusercontent.com/77585960/111914390-fcabff00-8a71-11eb-801e-b743f3b6369a.png)

Work division, planning and organization with Trello:

![image](https://user-images.githubusercontent.com/77585960/111914571-cde25880-8a72-11eb-9741-5fd22c29c140.png)

We have used Trello for the distribution and control of tasks using Kanban and to plan the structure of the frontend, the views and the logic of our Website.


<br/>

## Dependencies

* react-router-dom (view routing)
* redux and react-redux (cross-component states)
* reduct-localstorage-simple (persistence of states)
* axios (to fetch backend data)
* antd (for design improvements of some components)
* sass (web design)

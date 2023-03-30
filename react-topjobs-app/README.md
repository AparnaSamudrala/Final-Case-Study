TopJobs is a JobApp like naukri where you can view the list of jobs and a job can be applied through this App.

ALL COMPONENTS
==============================
We need to develop an App with the below components:

1) Home Comp 
-> A simple carousel with 3 min slides and some relevant caption and text 
-> Three buttons at the end of the carousel (Jobs, ContactUs, Coming Soon) coming soon does nothing (no action defined)

2) Contact Us : -> Banner, Contact Info, GetINTouchForm

3) Jobs -> List of Jobs as cards, clicking on card navigation to apply job

How to start with creating a TopJobs App
=======================================
npx create-react-app any-app-name

Think of the UI library and Icon library you are familiar with 
Here, I have choosen Bootstrap with fontawesome
1) Bootstrap 5 and reatct-bootstrap

2) FontAwesome 4.7

Install these dependencies: axios, bootstrap, react-bootstrap, font-awesome, json-server, react-hook-form, react-loading-skeleton, react-router-dom

server config in package.json put the below command in  scripts:
"server": "json-server --watch db.json --port 5000"
defines the json file and port 
now to run server just type npm run server
=========================

First create a router to define all these routes.

Home, Jobs,Contact Us, No Match (unmatched routes with a 404 kind of layout.)

1) Home comp has Carousel component (took from BS5 carousel layout and edited), Three skew buttons

2) Contact Us Comp has a banner, contact Info, GetInTouch Form

Banner should occupy full width of the screen.

Contact Info is taken from db.json under contactData obj.

GetInTouch Form is developed using BS5 form layout and validated using useForm hook.

useForm hook saves the component from rerendering multiple times from being rendered whenever user enters in any input field and consolidates all input field with their respective values into a data obj where u can save this data directly into DB where we generally take a state for each input and setState.

Thanks to useFormhook which helps us in doing it in a very simple way. Just register every form input and define your validations with register method. onsubmit it stores all the inputs with values in data obj.

Also Error Validations are simple with messages then and there and easy to understand.
=============================

Assets like Images or fonts to be placed in public. 

Never try to import them in your comp. directly calling it like for images dont import in the comp simply in img src = '' define the path. otherwise u will end up with symlink expected error.

./ current directory, ../ one level up directory.

this img is in component folder ContactBanner comp <img src='./../images/banner.jpg'/> -> assuming u placed images in public/images

To check if u have path properly in the src just hit http://localhost:3000/images/banner.jpg 

3000 is port u r currently running ur app.

============================

UI folder is pages that u are viewing in browser like Home,Jobs,Contact Us.

Another comp. Apply Jobs(It is when user click on Apply in Jobs)

Wrap all the UI components individually in ErrorBoundary to display some Error messages in case of any unforeseen errors that may occur in any of the components.
=================================
custom hook (useAxios) defined here to get the data from axios.get and loding flag to display load comp.

Split as many comp. as u can, reutilize the comp. wherever applicable.

Splitted components in components folder and main components in UI folder 
css for each comp. in css folder with their compname.css.

The folder structure should be made in such a way that any new developer should easily understand the flow of the application.

Here -> All components visbile on web page are in UI folder (Home/Jobs/Contact).
Have splitted UI components into multiple sub components and made use of it.
Comp -> Alerts for display success and error messages.
Comp -> Contact has subcomp of Main Contact page
Comp -> Footer/Header/Home/Jobs have their own subcomp like ther main respective pages.
Comp -> Loader has two either u can use Loader or LoadComp. (one with simple sipnner and loading text other is with react loading skeletion to get a loading effect)..
Comp -> No Match is for showing a 404 page for routes that are not matched in the URL.


============================

Handle all catch errors in axios get or post

when there is a delay in response -> loading message or some kind of it. (just to test  go to network tab and under NO throttling dopdown select slow 3G mode to view the delayed response being handled by a loading icon and text.. same u can check no data or no response by changing the same dropdown to offline mode ;)

When the data in the response show some content instead of null. Like, No data to display.

When u r trying to apply for same job u end up in duplicate Id axios error. so handle ith with a falg if isDuplicate the show some error message to user.

successMessage as SuccessAlert and errormessage as ErrorAlert I have created to display message with props as text.

=====================

-> When Job has been successfully submitted with no errors show a valid message and navigate user to back to jobs page. save the application form data in applications obj in db.json
 
 -> Get In Touch Form after successful submission show relevant info and save it in db.json under messages obj.

 Handle basic required and pattern validations for form fields.

---------------------
create jobLists obj in db.json and contactData obj in db.json and retrieve in UI to display them using map and get data from axios.get

------------------
 UI guidelines:

Make sure all pages are responsive (no horizontal scrollbar when u resize)
Make same kind of buttons look and feel across the App.
Make same kind of form background for all the forms.
Make sure info text is readble on carousel so added a background gradient to it.
Make sure content i readable on smaller screens.

--------------------
When no match is found in the router I had made a NoMatch comp. A BS5 layout with a warning background and Go To Home page to navigate back to home.
===============
User Exp should be smooth no too many flashy and blinking animations. 
==============

Have given a proper fix to make footer always stay at the bottom irrespective of content in the body.
wrap ur parent container of all comp. in flex-wrapper here I kept it in App.js 
styles in App.css
--------------------

used all components as rafce (react arrow function component export) .


-------------------------

When validating forms with react-hook-form make sure there are  no html validators in the inputs like 

input type = email and adding a required attaribute they have a defaul html5 validation that takes precende over onsubmit validation of useForm hook. .( I have experimented it already ;) )

---------------------
Dont forget to add a key to the parent when using map
avoid using class= instead of className=
html for = to be replaced with htmlFor =
style attribute is an object in jsx
with camelcase style properties each rule separated by a comma property value to be wrapped in quotes.

style={{color: 'blue',backgroundColor: 'white'}}

============================

Used hooks:
===================
useState,useEffect,useForm,useNavigate,useParams,useAxios(custom hook),useRef

Folder structure and naming should be meaningful.

Used uuid library for unique id generation.(can be seen in GetInTouch.js)
=====================

Handle all ESLint compiled warnings you could see in the termainal if any like img expects an alt prop either empty or a value.
clear all unused variables/modules h
===================

Testing a component is equally important once developed..
Testing playground extension of google chrome helps our job a way easy in writing few queries easy just open chrome and install testing playground extension and once installed reload the page and just right click on the page and select inspect now in the developer rools select testing playground and inspect any DOM element you would like to query and u can directly embed that in test.js makes our testing 90% easy all way long :)
 I have created a few sample test suites in _Tests folder to do some basic unit testing.
 =======================

 Had handled nested routing in App.js with a pagelayout component that uses outlet.

 For no match found page we can avoid showing header and footer

 This helps us avoid unnecessary flags to show and hide footer and header :)
 ==========================

 You no longer need to import React from "react". Starting from the release 17 of React, JSX is automatically transformed without using React.createElement.
However, other exports like hooks must be imported.
========================
To register an event handler for the capture phase, append Capture to the event name; for example, instead of using onClick, you would use onClickCapture to handle the click event in the capture phase. (used in jobcards.js)
Here if u click on card or apply btn both does the same (navigate to apply page)

Hosting react app
====================
One can host their react app online for free using any of the below ways:

Netlify.
Vercel.
AWS Amplify.
Firebase.
GitHub Pages.
GitLab Pages.
Render.
Surge.

There are several hosting build tools but I found vercel to be the simplest even for json server all at one place..

Hosting react app using vercel:
================================
To deploy our react proj to vercel all you need is to upload our react proj to github and import the react proj to vercel via dashboard
u can edit the app name and check the root directory path and thats it hit deploy button once deployment is successful u could preview our deployed app and the link of the deployed app there itself :)
post deploying our github url in vercel on successful deployment the final deployed app link is below:

https://topjobs-kappa.vercel.app/

for deploying local db.json to vercel refer :
=============================================
https://github.com/kitloong/json-server-vercel

update db.json in above link and deploy the github repo cloned from above url and here are the deployed urls post successful deployment

This is like hosting our local json server file to cloud post development.

https://jsonapi-nine.vercel.app/joblists

https://jsonapi-nine.vercel.app/contactData

https://jsonapi-nine.vercel.app/messages

https://jsonapi-nine.vercel.app/applications




























 














   
    


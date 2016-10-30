# Mobile-Angular-UI - Custom Navbar example (with show/hide navbar buttons)

This project is a simple example demonstrating the customization of Navbar in [mobile-angular-ui](http://mobileangularui.com/) apps.

Although [mobile-angular-ui](http://mobileangularui.com/) is a very light-weight and a handy ui framework for mobile phones, it has a very minimal documentation and a barely existent user community on the web. So for beginners like me, it becomes very difficult and time-consuming to develop/design something that is outside of the demo features guide provided in the [mobile-angular-ui](http://mobileangularui.com/) website.

## Demo

[View Demo](https://plnkr.co/edit/y6hW8CRsO9sQRzSVbzt1?p=preview)

Note: Resize the browser window to a smaller size (to simulate a mobile screen) for best view.

## About this app

This app tries to demonstrate the following points:

* ### Implement different navbar styles for different pages.
  For instance, the Login page has a full-fledged image as a navbar (which can be replaced by the header image of the particular organisation).
  But as soon as the user logs into the application, the header image is transformed to a minimal navbar with just a tiny logo of the organisation along with the Page title.

* ### Show/Hide buttons (Home, Back, Logout) from Navbar based on certain condition.
  The navbar of a mobile application may contain some handy shortcut buttons for quick navigation, but there maybe same urls, where displaying these buttons won't be necessary as:

    1. it makes them redundant, eg: showing navbar Home button on the home page itself

    2. or it maybe completely wrong, eg: displaying logout button on the login page itself


## Note

I am not an AngularJS or Mobile-Angular-Ui expert, infact I am just a newbie and am sharing this app as a quick reference guide for my fellow newbies. Hence the approaches used in this app may not be an optimal one and may or may not follow the industry best practises.

I would love to hear suggestions from you regarding any bad practices/not-so-optimal-approaches used in this app and hos this can be improved further.
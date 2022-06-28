# LAB 11

## Project: caps-11

### Author: Elizabeth Hammes

### Problem Domain - Auth Module Lab 09 Project

* Begin the build of an application for a product called CAPS - The Code Academy Parcel Service. In this sprint, we’ll build out a system that emulates a real world supply chain. CAPS will simulate a delivery service where vendors (such a flower shops) will ship products using our delivery service and when our drivers deliver them, each vendor will be notified that their customers received what they purchased.
* This will be an event driven application that “distributes” the responsibility for logging to separate modules, using only events to trigger logging based on activity.

### Links and Resources

- [ci/cd](https://github.com/ehammes/caps-11/actions) (GitHub Actions)
- [back-end server Heroku]() (Heroku) - TBD

### Setup

#### `.env` requirements (where applicable)

N/A

#### How to initialize/run your application (where applicable)

* `node src/body.js`

#### UML Diagram

![lab 11 uml](./src/img/lab_11.jpeg)
#### Features / User Stories

* The following user/developer stories detail the major functionality for this phase of the project.
  * As a vendor, I want to alert the system when I have a package to be picked up.
  * As a driver, I want to be notified when there is a package to be delivered.
  * As a driver, I want to alert the system when I have picked up a package and it is in transit.
  * As a driver, I want to alert the system when a package has been delivered.
  * As a vendor, I want to be notified when my package has been delivered.

* And as developers, here are some of the development stories that are relevant to the above.
  * As a developer, I want to use industry standards for managing the state of each package.
  * As a developer, I want to create an event driven system so that I can write code that happens in response to events, in real time.

#### Tests

* Run tests using `npm test`

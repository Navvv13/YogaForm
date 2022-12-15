
# Yoga Admission Form 
The main function of this form is to allow customers to sign up for yoga sessions and choose a time slot from four options according to their preferences.
React.js is what we're using for the front end, and API calls are what we're using for the back end. And the connection between them is that the data that is coming from the front end is then validated at the backend.




## Features

- Name : name of the user registering for the yoga class.
- Email : basically will act as a way to reach out to the person who is signing up for the class.
- Mobile Number : same way this also acts as a way to reach out to the person.

- Date of Birth: will help us to calculate the age of the person which has to be then validated.

- Gender: Male or Female or Others ( from the given slots or options)
- Slots Available : Users have to choose from four time slots i.e are 6 am - 7 am, 7 am - 8 am, 8 am - 9 am and 5pm - 6 pm. 
 
## ERdiagram


[![diagram.jpg](https://i.postimg.cc/x1Vn9LT6/diagram.jpg)](https://postimg.cc/YhRJ3GFF)
## Validation

Validation:

- Name- should not be empty.

- Age- should be between 16 and 65(excluding both).

- Email id- should have a valid format { prefix @ domainName}

- Phone number- should have 10 digits in it.

- Gender- should be non-empty.

- Slot- one of the slots should be selected i.e. it should not be NULL.  

- The validation of details is done to check the accuracy of data before processing it through the system. The age has been validated by applying a constraint of age>16 and age< 65. Similarly, other validation rules are applied, which when broken,display the corresponding error message. 

## Tech Stack

**Frontend:** React (NodeJs Framework), Html, Css.

**Backend:** React, RESTFUL APIs.

**Database:** MongoDB. 

## Screenshots

[![yogaformpng.png](https://i.postimg.cc/jdPY3CQP/yogaformpng.png)](https://postimg.cc/KRGWRGW8)


## Demo

Link of the website : https://yogaform-9b219.web.app/


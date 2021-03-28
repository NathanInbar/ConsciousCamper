# ConsciousCamper
 TuffyHacks 2021 Submission
 By: Nathan Inbar && Justin Stitt && Alyssa Muldong
-=-=-=-=-=-=
### Inspiration
Being trapped inside for so long due to quarantine has not been fun. When our team saw the theme was “camping” we got excited to take everyone on a virtual outdoor journey.

### What it does
Allows eager campers to view potential camping sites and scope out weather data.

### How we built it
Utilizing Google’s Street View and Autocomplete API, we were able to fully embed a dynamic panoramic view of any location in Google's extensive map database.

Tensorflow was used to produce a random forest regression model trained from campsite data. Enables prediction of potential campsite viability with a “Camp Score”.

### Challenges we ran into
Just about everything you can think of (CSS classes misspelled, js console logs fixing stuff, couldn’t center a div for three hours, etc). No one on our team has ever done something with this much scope in such little time. Nonetheless, we powered through and were able to deliver something we were all happy with.

### Accomplishments that we're proud of
Machine Learning model with relatively decent implementation.

### What we learned
We learned a lot about react functional components and how much they suck. 😝
We also gathered knowledge regarding many cool CSS3 features as well as learning how to use multiple API’s concurrently.

### What's next for Conscious Camper
We plan to further improve the machine learning model by surveying user data.

### Installation
* clone repository
* npm install
* npm start
* cd ./api
#### Launching API
* pip install flask, tensorflow, opencv-python
* set FLASK_APP=app.py
* cd ./api
* flask run

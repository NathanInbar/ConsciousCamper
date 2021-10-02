# ConsciousCamper
<p align="center">
 TuffyHacks 2021 [24 Hour Hackathon] Submission
 By: Nathan Inbar && Justin Stitt && Alyssa Muldong
 </p>
 
<h3 align="center">Video Presentation</h3>

[<p align="center"><img src="https://img.youtube.com/vi/5gUVDYUiFUY/0.jpg"></p>](https://youtu.be/5gUVDYUiFUY)

### Inspiration
Being trapped inside for so long due to quarantine has not been fun. When our team saw the theme was “camping” we got excited to take everyone on a virtual outdoor journey-- and what better way to do that than to promote environmental friendliness at the same time!

### What it does
Conscious Camper is a platform that is mutually beneficial for both campers and nature alike. You can search any location in the world and it will approximate how good it is for camping based on environmental statistics (Air quality, Humidity, Temperature, etc). It also has facts and tips for being more environmentally friendly in your day-to-day life. 

### How we built it
Utilizing Google’s Street View and Autocomplete API, we were able to fully embed a dynamic panoramic view of any location in Google's extensive map database. We take the location's geometry and pass it through another API to get statistics about the environment in that area.

Tensorflow was used to produce a random forest regression model trained from campsite data. Enables prediction of potential campsite viability with a “Camp Score”.

### Challenges we ran into
Just about everything you can think of (CSS classes misspelled, js console logs fixing stuff, couldn’t center a div for three hours, etc). No one on our team has ever done something with this much scope in such little time. Nonetheless, we powered through and were able to deliver something we were all happy with.

### Accomplishments that we're proud of
Machine Learning model with relatively decent implementation.

### What we learned
We learned a lot about react functional components, managing multiple API calls between the front-end and back-end, and that machine learning models need a ton of data to learn from!

### What's next for Conscious Camper
We plan to further improve the machine learning model by surveying user data and adding that to our training set.

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

from flask import Flask, request, render_template, jsonify
import os
from joblib import dump, load
import tensorflow as tf 
import pandas as pd
import cv2

app = Flask(__name__)

campsites_model = load('./campsites_model.joblib')

@app.route('/score', methods=['POST'])
def score():
    loc_details = request.get_json()
    elevation = 1000 # hard-coded... to do, grab elevation with api call (new api)

    windV     = (loc_details["windvelocity"])
    tempL     = (loc_details["low_temperature"])
    tempH     = (loc_details["high_temperature"])
    precip    = (loc_details["precipitation"])
    pollen    = 2 # hard-coded.... to do, grab pollen data with api call (new api)
    aqi       = (loc_details["AQI"]) 
    uv        = (loc_details["UV"])
    humidity  = (loc_details["humidity"])
    # TO-DO: parse 07:14:26 to 714 (example)
    sunrise   = 714  # float(loc_details["sunrise"])
    sunset    = 1904 # float(loc_details["sunset"])

    loc_data = {'Location': 0, 'Elevation': elevation, 'WindV': [windV], 'TempL': [tempL], 'TempH': [tempH], 'Precip': [precip], 
                    'AQI': [aqi], 'UV': [uv], 'Humidity': [humidity], 'Sunrise': [sunrise], 'Sunset': [sunset]}
    loc_dataframe = pd.DataFrame(data=loc_data)
    result = {"camp-score": campsites_model.predict(loc_dataframe)[0]}

    return jsonify(result)
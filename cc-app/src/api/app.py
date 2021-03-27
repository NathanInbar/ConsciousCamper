from flask import Flask, request, render_template, jsonify
import os
from joblib import dump, load
import tensorflow as tf 
import pandas as pd
import cv2

app = Flask(__name__)

# campsites_model = load('../campsites_model.joblib')

@app.route('/score', methods=['POST'])
def score():
    loc_details = request.get_json();
    print("location details: ", loc_details);
    return "all good", 200;
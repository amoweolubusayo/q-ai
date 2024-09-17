# Property Inspection and Quote Prediction API

## Overview 
This project demonstrates a machine learning-powered API that predicts the service cost for property maintenance tasks based on property inspection data. The project is composed of a data generation script, a machine learning model for predicting service costs, and a Flask API that serves predictions to users via HTTP requests.

## Project Structure
. demo_data.py: Generates synthetic data for properties, inspections, quotes, companies, and markets, and saves them as CSV files.
. model.py: Trains a RandomForestRegressor on the generated data, evaluates the model, and saves the trained model to a file.
. app.py: Defines a Flask API that loads the trained model and makes predictions based on input data sent to the /predict endpoint.

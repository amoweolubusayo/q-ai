import pandas as pd
import numpy as np
from flask import Flask, request, jsonify
import joblib

# Load the trained model 
model = joblib.load('quote_model.pkl')

# Define a function to preprocess input data (customize based on my data format)
def preprocess_data(data):
    # Convert the incoming JSON data into a pandas DataFrame
    if isinstance(data, dict):
        data = pd.DataFrame([data])  # Wrap the dictionary in a list to create a DataFrame with a single row
    else:
        data = pd.DataFrame(data)  # Assuming the incoming data is a list of dictionaries

    # Example preprocessing steps (adjust based on your data)
    # Handle missing values (e.g., impute missing values)
    # Encode categorical features (if not already encoded)
    # Scale numerical features (if necessary)

    # Return the preprocessed data
    return data

# Define the Flask API
app = Flask(__name__)

@app.route('/')
def index():
    return "Welcome to the Prediction API! Use the /predict endpoint to get predictions."

@app.route('/predict', methods=['POST'])
def predict():
    try:
        # Get data from the request body
        data = request.get_json()

        # Preprocess the data
        preprocessed_data = preprocess_data(data)

        # Make prediction using the model
        prediction = model.predict(preprocessed_data)

        # Return the predicted service cost
        return jsonify({'predicted_service_cost': prediction[0]})

    except Exception as e:
        # Handle errors (e.g., invalid data format)
        return jsonify({'error': str(e)}), 400  # Bad Request status code

if __name__ == '__main__':
    # Run the Flask app (adjust debug mode as needed)
    app.run(host='0.0.0.0', port=5000, debug=True)



# import pandas as pd
# import numpy as np
# from flask import Flask, request, jsonify
# import joblib
# import logging

# # Set up logging
# logging.basicConfig(level=logging.INFO)

# # Load the trained model (replace with your model file path)
# model = joblib.load('quote_model.pkl')

# # Define a function to preprocess input data (customize based on your data format)
# def preprocess_data(data):
#     # Convert the incoming JSON data into a pandas DataFrame
#     if isinstance(data, dict):
#         data = pd.DataFrame([data])  # Wrap the dictionary in a list to create a DataFrame with a single row
#     else:
#         data = pd.DataFrame(data)  # Assuming the incoming data is a list of dictionaries

#     # Example preprocessing steps (adjust based on your data)
#     # Handle missing values (e.g., impute missing values)
#     # Encode categorical features (if not already encoded)
#     # Scale numerical features (if necessary)

#     # Return the preprocessed data
#     return data

# # Define the Flask API
# app = Flask(__name__)

# @app.route('/')
# def index():
#     return "Welcome to the Prediction API! Use the /predict endpoint to get predictions."

# @app.route('/predict', methods=['GET', 'POST'])
# def predict():
#     try:
#         # Log the incoming request data
#         logging.info("Received request: %s", request.json)

#         # Get data from the request body
#         data = request.get_json()

#         # Preprocess the data
#         preprocessed_data = preprocess_data(data)

#         # Make prediction using the model
#         prediction = model.predict(preprocessed_data)

#         # Return the predicted service cost
#         return jsonify({'predicted_service_cost': prediction[0]})

#     except Exception as e:
#         # Log the error
#         logging.error("Error occurred: %s", str(e))
#         # Handle errors (e.g., invalid data format)
#         return jsonify({'error': str(e)}), 400  # Bad Request status code

# if __name__ == '__main__':
#     # Run the Flask app (adjust debug mode as needed)
#     app.run(debug=True)
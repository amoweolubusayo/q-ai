# 🏠 Property Inspection and Quote Prediction API

## 📋 Overview
This project demonstrates a machine learning-powered API that predicts the service cost for property maintenance tasks based on property inspection data. The project is composed of:
- 🛠️ A **data generation script**
- 🧠 A **machine learning model** for predicting service costs
- 🌐 A **Flask API** that serves predictions to users via HTTP requests.

## 🗂️ Project Structure
- **`demo_data.py`**: Generates **synthetic data** for properties, inspections, quotes, companies, and markets, and saves them as **CSV files**.
- **`model.py`**: Trains a **`RandomForestRegressor`** on the generated data, evaluates the model, and saves the trained model to a file.
- **`app.py`**: Defines a **Flask API** that loads the trained model and makes predictions based on input data sent to the **`/predict`** endpoint.

## ⚙️ Prerequisites
To run this project, ensure that you have the following installed:
- **Python 3.x**
- **Flask**
- **pandas**
- **numpy**
- **scikit-learn**
- **faker**
- **joblib**
- **gunicorn** (for deployment)

### 💻 Install dependencies via pip:
```bash
pip install pandas numpy scikit-learn faker flask gunicorn joblib
```

## How to Run the Project
### Step 1: Data Generation
First, generate the synthetic datasets (property, inspection, quote, etc.) by running the demo_data.py script:

bash
Copy code
python demo_data.py
This will generate multiple CSV files in your designated folder, e.g., /data.

### Step 2: Train the Machine Learning Model
Once the data is generated, use the model.py script to train a Random Forest model that predicts the service cost. The script will also save the trained model as a .pkl file for later use in the API:

```bash
python model.py
```
After training, the model will be saved as quote_model.pkl.

### Step 3: Start the Flask API
To serve predictions via a web API, run the Flask application defined in app.py. This script loads the trained model and provides an endpoint for predictions:

```bash
python app.py
```
The API will run on http://localhost:5000 by default.

### Step 4: Use the Prediction API
You can make POST requests to the /predict endpoint with JSON data to get predictions. Example using curl:

```bash
curl -X POST http://localhost:5000/predict \
-H "Content-Type: application/json" \
-d '{
    "Property ID": 1234,
    "Size (sq ft)": 1500,
    "Age (years)": 20,
    "Floors": 3,
    "Condition": "Good",
    "Fire Safety Systems": "Alarms, Sprinklers",
    "Accessibility Features": "Elevator, Ramps"
}'
```

Alternatively, you can use Postman to test the API.

## Deployment Instructions
### Step 1: Set Up an EC2 Instance
Launch an AWS EC2 instance and SSH into it. You can follow the steps outlined in your specific deployment guide, ensuring the required dependencies are installed.

### Step 2: Copy Files to the EC2 Instance
Once you SSH into your instance, copy the application files (demo_data.py, model.py, app.py, and your quote_model.pkl file) to the instance.

### Step 3: Install Dependencies
SSH into your EC2 instance and install the required Python packages via pip:

```bash
pip install pandas numpy scikit-learn faker flask gunicorn joblib
```
## Step 4: Configure NGINX
Edit your NGINX configuration to serve your Flask app behind Gunicorn. Ensure you configure security groups to allow HTTP/HTTPS traffic.

Example for setting up Gunicorn to run your Flask app:

```bash
gunicorn -w 4 -b 0.0.0.0:5000 app:app
```
Example Use Case
Once deployed, users can send a POST request to your public IP or domain's /predict endpoint to receive predictions about service costs based on property inspection data.

Acknowledgments
This project uses:

Flask for API development
scikit-learn for machine learning
pandas for data manipulation
faker for generating synthetic data

# License
This project is open source and available under the MIT License.


import pandas as pd
import numpy as np
from sklearn.model_selection import train_test_split
from sklearn.ensemble import RandomForestRegressor
from sklearn.preprocessing import LabelEncoder
from sklearn.metrics import mean_squared_error, mean_absolute_error, r2_score
import matplotlib.pyplot as plt
import seaborn as sns
import pickle

# Load the cleaned data
final_csv_path = '/Users/apostle/Desktop/QAI_DATA_ML/Property_Inspection_Quote_Combined_2024.csv'
df = pd.read_csv(final_csv_path)

# Drop non-numeric columns that are not needed for prediction
df = df.drop(['Address', 'Date of Last Inspection', 'Date of Quote', 'Quote Expiry Date', 'Identified Issues'], axis=1)

# Function to handle Fire Safety Systems with multiple features
def fire_safety_encoding(data):
    has_sprinklers = np.where(data.str.contains("Sprinklers"), 1, 0)
    has_extinguishers = np.where(data.str.contains("Extinguishers"), 1, 0)
    return pd.DataFrame({'Has_Sprinklers': has_sprinklers, 'Has_Extinguishers': has_extinguishers})

# Function to handle Accessibility Features with multiple features
def accessibility_encoding(data):
    has_elevator = np.where(data.str.contains("Elevator"), 1, 0)
    has_wide_doorways = np.where(data.str.contains("Wide Doorways"), 1, 0)
    return pd.DataFrame({'Has_Elevator': has_elevator, 'Has_Wide_Doorways': has_wide_doorways})

# Encode remaining categorical variables and handle Fire Safety Systems and Accessibility Features
label_cols = [
    'Recent Renovations', 'Environmental Hazards', 'Inspection Results', 
    'Service Required', 'Time Taken to Generate Quote', 'Type', 'Condition', 
    'Construction Material', 'Current Use', 'Occupancy Status', 
    'Compliance Status', 'Region', 'Quote Closure Status'
]

# Apply custom encoding functions and drop original columns
df = pd.concat([
    df.drop(['Fire Safety Systems', 'Accessibility Features'], axis=1),
    fire_safety_encoding(df['Fire Safety Systems']), 
    accessibility_encoding(df['Accessibility Features'])
], axis=1)

# Apply Label Encoding to all categorical columns remaining after Fire Safety Systems and Accessibility Features handling
for col in label_cols:
    le = LabelEncoder()
    df[col] = le.fit_transform(df[col].astype(str))

# Ensure all columns are numeric
print(df.dtypes)  # This will help you confirm all columns are numeric

# Splitting the data into training and testing sets
X = df.drop('Service Cost', axis=1)
y = df['Service Cost']

X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

# Train a model
model = RandomForestRegressor(random_state=42)
model.fit(X_train, y_train)

# Make predictions
y_pred = model.predict(X_test)

# Model evaluation
mse = mean_squared_error(y_test, y_pred)
mae = mean_absolute_error(y_test, y_pred)
r2 = r2_score(y_test, y_pred)

# Save the model
with open('quote_model.pkl', 'wb') as f:
    pickle.dump(model, f)

# Print evaluation metrics
print(f'MSE: {mse}, MAE: {mae}, R2: {r2}')

import pandas as pd
import random
from faker import Faker

fake = Faker()

# Generate Property Data
property_data = []
for i in range(50000):
    property_data.append({
        'Property ID': i + 1,
        'Address': fake.address(),
        'Size (sq ft)': random.randint(500, 10000),
        'Age (years)': random.randint(1, 100),
        'Type': random.choice(['Residential', 'Commercial', 'Industrial']),
        'Floors': random.randint(1, 10),
        'Condition': random.choice(['Excellent', 'Good', 'Fair', 'Poor']),
        'Construction Material': random.choice(['Brick', 'Wood', 'Concrete', 'Steel']),
        'Fire Safety Systems': ', '.join(random.sample(['Alarms', 'Sprinklers', 'Extinguishers'], k=random.randint(1, 3))),
        'Accessibility Features': ', '.join(random.sample(['Elevator', 'Ramps', 'Wide Doorways', 'None'], k=random.randint(1, 4))),
        'Recent Renovations': fake.sentence(nb_words=3) if random.choice([True, False]) else 'None',
        'Current Use': random.choice(['Office', 'Retail', 'Residential', 'Warehouse']),
        'Occupancy Status': random.choice(['Occupied', 'Vacant']),
        'Environmental Hazards': random.choice(['None', 'Asbestos', 'Lead Paint', 'Mold']) if random.choice([True, False]) else 'None'
    })

property_df = pd.DataFrame(property_data)

# Generate Inspection Data
inspection_data = []
for i in range(50000):
    inspection_data.append({
        'Inspection ID': i + 1,
        'Property ID': random.randint(1, 50000),
        'Date of Last Inspection': fake.date_between(start_date='-3y', end_date='today'),
        'Inspection Results': random.choice(['Passed', 'Failed', 'Passed with minor issues']),
        'Identified Issues': fake.sentence(nb_words=6) if random.choice([True, False]) else 'None',
        'Compliance Status': random.choice(['Compliant', 'Non-compliant'])
    })

inspection_df = pd.DataFrame(inspection_data)

# Generate Quote Data
quote_data = []
for i in range(50000):
    quote_data.append({
        'Quote ID': i + 1,
        'Property ID': random.randint(1, 50000),
        'Service Required': random.choice(['HVAC Installation', 'Roof Repair', 'Interior Painting', 'Plumbing', 'Electrical Work']),
        'Service Cost': round(random.uniform(500, 5000), 2),
        'Date of Quote': fake.date_between(start_date='-1y', end_date='today'),
        'Region': fake.city(),
        'Time Taken to Generate Quote': f"{random.randint(1, 7)} days",
        'Quote Expiry Date': fake.date_between(start_date='today', end_date='+1y'),
        'Quote Closure Status': random.choice(['Pending', 'Converted', 'Expired', 'Closed'])
    })

quote_df = pd.DataFrame(quote_data)

# Generate Company Data
company_data = []
for i in range(50000):
    company_data.append({
        'Company ID': i + 1,
        'Company Name': fake.company(),
        'Service Areas': ', '.join(random.sample([fake.city() for _ in range(10)], k=random.randint(1, 3))),
        'Pricing Models': random.choice(['Flat Rate', 'Hourly Rate', 'Project-based', 'Subscription']),
        'Competitor Pricing': random.choice(['Competitive', 'Higher', 'Lower']),
        'Service Offerings': ', '.join(random.sample(['HVAC', 'Plumbing', 'Electrical', 'Roofing', 'Painting', 'Renovation', 'Maintenance', 'Cleaning'], k=random.randint(1, 5))),
        'Client Feedback and Ratings': round(random.uniform(3.0, 5.0), 1)
    })

company_df = pd.DataFrame(company_data)

# Generate Market Data
market_data = []
for i in range(50000):
    market_data.append({
        'Market Region': fake.city(),
        'Industry Growth Statistics': f"{round(random.uniform(2.0, 5.0), 1)}% annual growth",
        'Regulatory Changes': fake.sentence(nb_words=6),
        'Market Trends': fake.sentence(nb_words=6),
        'Competitor Analysis': fake.sentence(nb_words=6)
    })

market_df = pd.DataFrame(market_data)

# Save individual datasets to CSV
property_df.to_csv('/Users/apostle/Desktop/QAI_DATA_ML/data/property_data.csv', index=False)
inspection_df.to_csv('/Users/apostle/Desktop/QAI_DATA_ML/data/inspection_data.csv', index=False)
quote_df.to_csv('/Users/apostle/Desktop/QAI_DATA_ML/data/quote_data.csv', index=False)
company_df.to_csv('/Users/apostle/Desktop/QAI_DATA_ML/data/company_data.csv', index=False)
market_df.to_csv('/Users/apostle/Desktop/QAI_DATA_ML/data/market_data.csv', index=False)

print("Datasets have been generated and saved to CSV files.")

# Example of joining Property and Inspection data on Property ID
combined_df = pd.merge(property_df, inspection_df, how='left', on='Property ID')

# Further join with Quote data on Property ID
combined_df = pd.merge(combined_df, quote_df, how='left', on='Property ID')

# Perform transformations
# Convert date columns to datetime type
combined_df['Date of Last Inspection'] = pd.to_datetime(combined_df['Date of Last Inspection'])
combined_df['Date of Quote'] = pd.to_datetime(combined_df['Date of Quote'])
combined_df['Quote Expiry Date'] = pd.to_datetime(combined_df['Quote Expiry Date'])

# Create binary flags for fire safety systems
combined_df['Has Alarms'] = combined_df['Fire Safety Systems'].apply(lambda x: 1 if 'Alarms' in x else 0)
combined_df['Has Sprinklers'] = combined_df['Fire Safety Systems'].apply(lambda x: 1 if 'Sprinklers' in x else 0)
combined_df['Has Extinguishers'] = combined_df['Fire Safety Systems'].apply(lambda x: 1 if 'Extinguishers' in x else 0)

# Fill missing values in specific columns
combined_df['Accessibility Features'] = combined_df['Accessibility Features'].fillna('None')
combined_df['Recent Renovations'] = combined_df['Recent Renovations'].fillna('None')
combined_df['Environmental Hazards'] = combined_df['Environmental Hazards'].fillna('None')
combined_df['Identified Issues'] = combined_df['Identified Issues'].fillna('None')

# Drop rows with any remaining missing values
combined_df = combined_df.dropna()

# Save intermediate cleaned data to CSV and read it back
intermediate_csv_path = '/Users/apostle/Desktop/QAI_DATA_ML/data/Intermediate_Combined_Data.csv'
combined_df.to_csv(intermediate_csv_path, index=False)
combined_df = pd.read_csv(intermediate_csv_path)

# Drop rows with any remaining missing values again
combined_df = combined_df.dropna()

# Re-check for null values
print(combined_df.isnull().sum())

# Save final cleaned data to CSV
final_csv_path = '/Users/apostle/Desktop/QAI_DATA_ML/Property_Inspection_Quote_Combined_2024.csv'
combined_df.to_csv(final_csv_path, index=False)

print("Transformed combined dataset has been saved to Property_Inspection_Quote_Combined_2024.csv")


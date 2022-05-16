#imports
import numpy as np
import pandas as pd
import datetime
from datetime import date
from datetime import datetime
from pymongo import MongoClient
from tqdm import tqdm

# Connection to MongoDB
client = MongoClient('mongodb://localhost:27017/')
db = client.Arca
collection = db.data

# Initialise variables
urlFile = '../data/data.txt'
steps = 500000
names = ['timestamp', 'value', 'origin']
day_divider = 86400000

#Initialise count pour reprendre au le fichier s'est arrêté
with open("count.txt", "r") as countFile:
	countFileValue = int(countFile.read())

if countFileValue > 0:
  count = countFileValue
else:
  count = 0

countFile = open("count.txt", "a")

# Recuperation du nombre de ligne du fichier pour le loader
with open(urlFile) as myfile:
    total_lines = sum(1 for line in myfile)

total_lines = total_lines - (count*steps)
# Initialisation de la barre de chargement
pbar = tqdm(total=total_lines)

# Function get_rows
def get_rows(steps,count,names,path=urlFile):
    
    """
    Returns a subset of rows from a CSV. The fist [steps]*[count] 
    rows are skipped and the next [steps] rows are returned. 
    
    params
    ------------
        steps: number of rows returned
        count: count variable updated each iteration 
        names: columns names of dataset
        path: location of csv
    """
    
    if count ==0:
        df = pd.read_csv(path,
                         delimiter = ",",
                         nrows=steps,
                         names=names)
    else: 
        df = pd.read_csv(path,
                         delimiter = ",",
                         skiprows=steps*count,
                         nrows=steps,
                         names=names)
    return df

# Function convertToDate
def convertToDate(timestamp):

    """
    Returns string date format %d/%m/%Y
    
    params 
    ------------
        timestamp: timestamp in milliseconds
    """
    timestampSeconde = timestamp / 1000
    dateString = (date.fromtimestamp(timestampSeconde)).strftime("%d/%m/%Y")
    # dateFormatter = "%d/%m/%Y"
    # return datetime.strptime(dateString, dateFormatter)
    return dateString


#Initialise number of transactions
# n = 0

# Boucle pour inserer le dataframe bloc par bloc dans mongoDB
while True:
    
    #Return subsection of dataset
    df = get_rows(steps,count,names)

    # print(df.head())
    # print(df["timestamp"])

    df['date'] = df['timestamp'].apply(convertToDate)

    df.reset_index(inplace=True)
    df_dict = df.to_dict("records")

    if len(df_dict) > 0 :
        collection.insert_many(df_dict)
    
    #Update number of transactions
    # n+=len(df)

    pbar.update(len(df))
    
    #Update count
    count+=1
    countFile.truncate(0)
    countFile.write(str(count))
    
    #Exit loop
    if len(df)!=steps:
        break

countFile.truncate(0)
countFile.write("0")
countFile.close()



import matplotlib.pyplot as plt

from scipy.io import arff
import pandas as pd

# Load ARFF file
data = arff.loadarff(r'D:\New folder (2)\php8vsf4S.arff')
df = pd.DataFrame(data[0])


for k,row in df.iterrows():


        plt.text(row['Family'],
                row['Happiness Score'],
                row['Country'])

plt.scatter(['Family'], ['Happiness Score'])


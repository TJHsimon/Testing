import cv2
import json
import threading
import numpy as np
from keras.models import load_model

def predict():
    loaded_model = load_model("AI_code\Image_Processing_Burns(CNN)_nobatch.keras")

    img1 = cv2.imread('assets/pictureTaken/captured-photo.jpg')
    img1 = cv2.resize(img1, (100,100))
    input_data = np.expand_dims(img1, axis=0) 

    pred = loaded_model.predict(input_data)
    predicted_labels = pred.argmax(axis=1)
    degree_value = predicted_labels[0]

    results = {
    "result" : str(degree_value)
    }

    with open ("components/testing.json", "w") as outfile:
        json.dump(results,outfile)

    return results

def testin(seconds):
    timer = threading.Event()
    
    while True:
        timer.wait(seconds)
        predict()

if __name__ == "__main__":
    testin(3)


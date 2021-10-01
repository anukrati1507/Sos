import speech_recognition as sr
import pyttsx3
import pywhatkit
import geocoder
from datetime import datetime

g = geocoder.ip('me')


listner = sr.Recognizer()
engine = pyttsx3.init()
trigger = "help"
stop = "stop"
contacts = [
    {
        "name" : "Ishika Dubey",
        "number" : "+917007070964" 
    },
    {
        "name" : "Anukrati Saxena",
        "number" : "+918005038609"
    }
]

def send_text():
    for contact in contacts:
        now = datetime.now()
        current_time = now.strftime("%H:%M:%S")
        hour,mint = int(current_time.split(":")[0]),int(current_time.split(":")[1])
        pywhatkit.sendwhatmsg(contact['number'],str(g.latlng),hour,mint+2)

def listen():

    try:
        with sr.Microphone() as source:
            print("Listening...")
            voice = listner.listen(source)
            command = listner.recognize_google(voice)
            command = command.lower()
            print(command)
            if trigger in command:
                print("Creating SOS Alert!!!")
                send_text()

            elif stop in command:
                raise ValueError("Terminating the application now.")
    
    except sr.UnknownValueError:
        pass

while True:
    listen()

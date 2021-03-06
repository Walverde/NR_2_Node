import paho.mqtt.client as mqtt

import json

# Define Variables
MQTT_HOST = "localhost"
MQTT_PORT = 1883
MQTT_KEEPALIVE_INTERVAL = 45
MQTT_TOPIC = "node"

MQTT_MSG = json.dumps({"sepalLength": "6.4", "sepalWidth":  "3.2",
                       "petalLength": "4.5", "petalWidth":  "1.5"})
# Define on_publish event function


def on_publish(client, userdata, mid):
    # print "Message Published..."


def on_connect(client, userdata, flags, rc):
    client.subscribe(MQTT_TOPIC)
    client.publish(MQTT_TOPIC, MQTT_MSG)


def on_message(client, userdata, msg):
    print(msg.topic)
    print(msg.payload)  # <- do you mean this payload = {...} ?
    # you can use json.loads to convert string to json
    payload = json.loads(msg.payload)
    print(payload['sepalWidth'])  # then you can check the value
    client.disconnect()  # Got message then disconnect


# Initiate MQTT Client
mqttc = mqtt.Client()

# Register publish callback function
mqttc.on_publish = on_publish
mqttc.on_connect = on_connect
mqttc.on_message = on_message

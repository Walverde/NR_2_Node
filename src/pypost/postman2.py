import paho.mqtt.client as mqtt

import json

# call backs


def on_connect(client, userdata, flags, rc):
    print("Conectado:"+str(rc))
    # Topico de inscrição
    client.subscribe("node/#")


def on_message(client, userdata, msg):
    print(str(msg.payload))


client = mqtt.Client()
client.on_connect = on_connect
client.on_message = on_message

client.connect("localhost", 1883, 60, )
client.loop_forever()

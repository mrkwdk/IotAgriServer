#!/usr/bin/env python
from time import sleep
import paho.mqtt.client as mqtt

host = 'localhost'
port = 1883
topic = 'test'

client = mqtt.Client()

client.connect(host, port=port, keepalive=60)

for i in range(3):
    client.publish(topic, 'ham')
    sleep(0.2)

client.disconnect()

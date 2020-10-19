// const control = require('../controllers/controltrack.controller.js')
const control = require('./sback/controllers/controltrack.controller')
const mqtt = require('./sback/mqtt/mqtt')

mqtt.mqtt_messsageReceived(
    control.InsertsMqtt(message)
)

const bodyParser = require('body-parser')
const express = require('express')
const cors = require('cors')



const app = express()
const port = 3000

app
	.use(bodyParser.json())
	.use(cors())


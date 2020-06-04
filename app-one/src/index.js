require("module-alias/register")
const express = require("express")
const app = express()
const test = require("@shared/utils/test")
const faker = require("faker")

app.get("/", (req, res) => {
  console.log(test())
  console.log(faker.random.uuid())
  res.status(204).end()
})

app.listen(3000, () => {
  console.log("app-one listening on port 3000")
})

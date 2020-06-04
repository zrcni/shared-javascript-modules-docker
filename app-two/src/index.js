require("module-alias/register")
const express = require("@shared/node_modules/express")
const app = express()
const test = require("@shared/utils/test")
const { format } = require("date-fns")

app.get("/", (req, res) => {
  console.log(test())
  console.log(format(new Date(), "'Today is a' iiii"))
  res.status(204).end()
})

app.listen(3003, () => {
  console.log("auth listening on port 3003")
})

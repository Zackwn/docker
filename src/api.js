const app = require('express')()
const mysql = require('mysql')

const conn = mysql.createConnection({
  host: process.env.DB_HOST || 'localhost',
  user: 'root',
  password: 'db_password',
  database: 'db',
  port: 3306
})

console.log(process.env.DB_HOST)

app.get('/', async (_, res) => {
  return res.json({
    message: 'Docker 🐳'
  })
})

app.get('/products', async (_, res) => {
  conn.query('SELECT * FROM products', [], (error, results) => {
    if (error) {
      return res.status(500).json(error.stack)
    }

    console.log('test')
    return res.json({ 'products': results })
  })
})

const PORT = process.env.PORT || 8080

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT} 🐳`)
})
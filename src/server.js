// Import the Express application
import app from './app.js'
// Start the server

const PORT = 3000
app.listen(PORT, () => {
    
  console.log(`
    =====================================================
    ||  Server is running on http://localhost:${PORT}  ||
    =====================================================
`)
})

 
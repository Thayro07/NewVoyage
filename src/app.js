// -> Importando o 'express'...
import express from 'express';

// -> Importando as rotas do turista:
import touristRoutes from './routes/touristRoutes.js'

// -> Importando as rotas do admin:
import adminRoutes from './routes/adminRoutes.js'

// -> Importando as rotas do places:
import placesRoutes from './routes/placeRoutes.js'

// -> Variável que recebe o 'express':
const app = express()

// -> Permite que o 'expresse()' entenda '.json' no corpo da req!
app.use(express.json())

// -> ENDPOINT "/tourist" para rotas de turistas:
app.use("/tourist", touristRoutes)

// -> ENDPOINT "/admin" para rotas de administrador:
app.use("/admin", adminRoutes)

// -> ENDPOINT "/" para rotas de places:
app.use("/", placesRoutes)

// -> Exportando a variável 'app'...
export default app
// -> Importando o express...
import express from 'express'

// -> Importando as funções do Tourist..
import { register, login } from '../controllers/touristControllers.js'

// -> Importando os Schemas...
import { registerSchemaTourist,  } from '../schemas/userSchemas.js'

// -> Importando validate...
import validate from '../middleware/validate.js'

// -> Variável do express...
const router = express.Router()

// -> 1. ROTA QUE REGISTRAR UM NOVO TURISTA:
router.post('/auth/register', validate(registerSchemaTourist), register)

// -> 2. ROTA QUE FAZ LOGIN DO TURISTA:
router.post('/auth/login', login)

// -> Exportando...
export default router
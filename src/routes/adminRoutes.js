// -> Importando o express...
import express from 'express'

// -> Importando as funções do Admin...
import { loginAdmin, registerAdmin } from '../controllers/adminControllers.js'

// -> Importando os Schemas...
import { registerSchemaAdmin  } from '../schemas/userSchemas.js'

// -> Importando validate...
import validate from '../middleware/validate.js'

// -> Variável do express...
const router = express.Router()

// -> 1. ROTA QUE REGISTRAR UM NOVO ADMIN:
router.post('/auth/register-adm', validate(registerSchemaAdmin), registerAdmin)

// -> 2. ROTA QUE FAZ LOGIN DO ADMIN:
router.post('/auth/login-adm', loginAdmin)

// -> Exportando...
export default router
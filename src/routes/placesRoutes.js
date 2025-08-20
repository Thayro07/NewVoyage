
// -> Importando o express:
import express from 'express'

// -> Importando a função de validação de dados:
import validate from '../middleware/validate.js'

// -> Importando as funções de Schema:
import { SchemaPlace, UpdateSchemaPlace } from '../schemas/placeSchemas.js'

// -> Importando o authenticate
import { authenticate } from '../middleware/authentication.js'

// -> Importando as funções...
import { deletePlace, getAllPlaces, getPlaceType, postNewPlace, putUptadePlace } from '../controllers/placeControllers.js'

// -> Variável que recebe o express():
const router = express()

// -> 1. (POST) - Criar Local (ADMIN)
router.post("/places", authenticate, validate(SchemaPlace), postNewPlace)

// -> 2. (GET) - Listar Locais (ADMIN/TOURIST)
router.get("/places", getAllPlaces)

// -> 3. (GET) - Listar por Tipo (ADMIN/TOURIST)
router.get("/places/:type", getPlaceType)

// -> 4. (PUT) - Atualizar Local (ADMIN)
router.put("/places/:id", authenticate, validate(UpdateSchemaPlace), putUptadePlace)

// -> 5. (DELETE) - Deletar Local (ADMIN)
router.delete("/places/:id", authenticate, deletePlace)

export default router
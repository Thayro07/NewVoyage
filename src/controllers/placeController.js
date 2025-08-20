
// Importando o PrismaClient...
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient()

// -> 1. (POST) - Criar Local (ADMIN)
export const postNewPlace = async (req, res) => {
    const { name, description, address, type, rating} = req.body
    try {
        const newPlace = await prisma.place.create({
            data: {
                name,
                description,
                address,
                type,
                rating
            }
        })
        res.status(201).json(newPlace)
    } catch (error) {
            res.status(400).json(`
            
            Erro ao criar um novo local:
            name: ${error.name}
            messagem: ${error.message}
        
            `)
    }
}

// -> 2. (GET) - Listar Locais (ADMIN/TOURIST)
export const getAllPlaces = async (req, res) => {
    try {
        const places = await prisma.place.findMany()
        res.status(200).json(places)
    } catch (error) {
        res.status(400).json(`
            
            Erro ao listar todos os locais:
            name: ${error.name}
            messagem: ${error.message}
        
            `)
    }
}

// -> 3. (GET) - Listar por Tipo (ADMIN/TOURIST)
export const getPlaceType = async (req, res) => {
    const type = req.params.type
    try {
        const place = await prisma.place.findMany({
            where: {
                type: type
            }
        })
    res.status(200).json(place)
    } catch (error) {
        res.status(400).json(`
            
            Erro ao procurar o local por tipo:
            name: ${error.name}
            messagem: ${error.message}
        
            `)
    }
}

// -> 4. (PUT) - Atualizar Local (ADMIN)
export const putUptadePlace = async (req, res) => {
    const id = req.params.id
    const { name, description, address, type, rating} = req.body
    try {
        const uptadePlace = await prisma.place.update({
            where: {id: parseInt(id)},
            data: {
                name,
                description,
                address,
                type,
                rating
            }
        })
        res.status(200).json(uptadePlace)
    } catch (error) {
        res.status(400).json(`
            
            Erro ao atualizar local pelo ID:
            name: ${error.name}
            messagem: ${error.message}
        
        `)
    }
}

// -> 5. (DELETE) - Deletar Local (ADMIN)
export const deletePlace = async (req, res) => {
    const id = req.params.id
    const placeDeleted = await prisma.place.delete({
        where: {id: Number(id)}
    })
    res.status(204).json(placeDeleted)
}
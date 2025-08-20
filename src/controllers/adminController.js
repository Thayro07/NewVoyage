// Importando o PrismaClient...
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient()

// -> Importando funções de Hashear Password e Create Token:
import { hashPassword, generateToken, comparePassword } from '../utils/auth.js'

// 1. Função para registrar um novo Admin:
export const registerAdmin = async (req, res) => {
    const {name, email, password} = req.body
    try {
        // -> 1.1 Variável que recebe a senha hasheada:
        const hashedPassword = await hashPassword(password)
        // -> 1.2 Criar o novo Admin no banco de dados:
        const newRegister = await prisma.admin.create({
            data: {
                name: name,
                email: email,
                password: hashedPassword
            }})
        // -> 1.3 Gerando um token JWT para ADMIN:
        const token = generateToken(newRegister)
        res.status(201).json({
            name: newRegister.name,
            email: newRegister.email,
            token: token
        })  
    } catch(error) {
        res.status(400).json(`
            
            Erro ao registrar o usuário:
            nome: ${error.name}
            messagem: ${error.message}
            
            `)
    }
}

// 2. Função para login para Admin:
export const loginAdmin = async (req, res) => {
    const { email, password } = req.body
    try {
        // -> 2.1 Procurando o usuário no banco de dados...
        const user = await prisma.admin.findUnique({
            where: {
                email
            }
        })
        // -> 2.2 Verificando se as credenciais estão válidas:
        if (!user) {
            return res.status(400).json({
                error: 'Credenciais inválidas!'
            })
        }
        // -> 2.4 Verificando se a password está correta:
        const isValid = await comparePassword(password, user.password)
        // -> 2.4.1 Se a password estiver incorreta:
        if (!isValid) {
            return res.status(400).json({
                error: "Credenciais inválidas!"
            })
        }
        // -> 2.6 Gerando o token JWT:
        const token = generateToken(user.id) 

        res.status(201).json({
            name: user.name,
            email: user.email,
            token: token
        })

    } catch (error) {
        res.status(400).json({
           message: 'Erro ao se logar!',
           erros: error.message
        })
    }
}
// -> Importando o Prisma...
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient()

// -> Importando as funções precisas:
import { hashPassword, generateToken, comparePassword } from '../utils/auth.js';

// -> 1. Função para registrar um novo usuário:
export const register = async (req, res) => {
    const { name, email, phone, password } = req.body
  try {
    // -> 1.1 Verificando se o usuário já existe:
    const exists = await prisma.user.findUnique({ 
        where: { email } 
    });
    // -> 1.1.1 Se o usuário existir:
    if (exists) {
        return res.status(400).json({ 
            error: 'Email já registrado' 
        });
    }
    // -> 1.2 Registrando o novo turista:
    const user = await prisma.user.create({
      data: { 
        name, 
        email, 
        phone, 
        password: await hashPassword(password), 
    }
    })
    res.status(201).json({ 
        message: 'Turista criado com sucesso'
    })
  } catch (err) {
    res.status(400).json({ 
        error: err.message 
    });
  }
};

// -> 2. Função para Login do Usuário:
export const login = async (req, res) => {
  const { email, password } = req.body;
 try {  const user = await prisma.user.findUnique({ 
    where: { 
        email
    } 
})

  if (!user) {
    return res.status(400).json({
        error: 'Credenciais inválidas'
    })
  }

  const isPasswordValid = await comparePassword(password, user.password)

  if (!isPasswordValid) {
    return res.status(400).json({
        error: 'Credenciais inválidas'
    })
  }

  const token = generateToken(user.id)

  res.status(201).json({
            name: user.name,
            email: user.email,
            token: token
        })  
      } catch (error) {
        res.status(400).json({
          message: 'Erro ao se logar!',
          erro: error.message
        })
      }
}
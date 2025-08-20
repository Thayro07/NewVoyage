
// -> 1. Importando o bcrypt...
import bcrypt from 'bcryptjs'

// -> 2. Importando o JWT...
import jwt from 'jsonwebtoken'

// -> 3. Variável que recebe o SALT_ROUNDS:
const SALT_ROUNDS = 10;

// -> 4. Variável que recebe o "JWT_SECRET"
const JWT_SECRET = process.env.JWT_SECRET

// -> 5. FUNÇÃO PARA HASHEAR SENHA:
export async function hashPassword(password) {
    return await bcrypt.hash(password, SALT_ROUNDS)
}

// -> 6. FUNÇÃO PARA CRIAR UM TOKEN JWT:
export const generateToken = (userID) => {
    const secret = process.env.JWT_SECRET

    if (!secret) {
        return 'JWT_SECRET não definido!'
    }

    const token = jwt.sign({id: userID}, secret, {expiresIn: '1h'})
    return token
}

// -> 7. FUNÇÃO PARA COMPARAR PASSWORD:
export const comparePassword = async (password, hashedPassword) => {
  return await bcrypt.compare(password, hashedPassword);
}

// -> 8. Função para verificar se o token é válido!
export function verifyToken(token){
    return jwt.verify(token, JWT_SECRET)
}
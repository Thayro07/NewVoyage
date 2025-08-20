import { verifyToken } from "../utils/auth.js"

export const authenticate = (req, res, next) => {
    // -> 1.1. Obter token do header Authorization
    const authHeader = req.headers['authorization']

    const token = authHeader && authHeader.split(' ')[1]

    if (!token) {
        res.status(401).json({
            messagem: 'Não foi possível encontrar o token!'
        })
    }

    try {
        // 1.2.1. Verificar se o token é válido!
            const decoded = verifyToken(token)
        // 1.2.2. Adicionar os dados decodificados do token da requisição!
            req.user = decoded
        // 1.2.3. Próximo middleware...
            next()

    } catch (error) {
        res.status(403).json({
            messagem: "Token inválido ou expirado!",
            error
        })
    }
}
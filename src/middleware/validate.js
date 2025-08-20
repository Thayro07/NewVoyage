export default function validate(schema){
    return (req, res, next) => {
        try {
        // -> 1. Valida o corpo da requisição contra o schema:
        const validatedData = schema.parse(req.body)
        
        // -> 2. Substituir o body pelos dados fornecidos:
        req.body = validatedData

        // -> 3. Chamo o próximo agente (middleware):
        next()

        } catch (error) {
            res.status(400).json({
                messagem: 'Erro de validação!',
                erros: error.errors.map(e => ({
                    path: e.path.join('.'),
                    message: e.message
                }))
            })
}}}
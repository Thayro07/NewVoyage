// -> Importando o Zod...
import { z } from 'zod';

// -> RegisterSchemasTourist...
export const registerSchemaTourist = z.object({
    name: z.string().min(5, "É preciso inserir o nome completo!"), 
    email: z.string().email("Email Inválido!"), 
    phone: z.string().regex(/^\(?\d{2}\)?\s?9?\d{4}-?\d{4}$/,
        "Telefone inválido. Use o formato: (11) 91111-1111 ou 11911111111"),
    password: z.string()
        .min(6, "A senha deve ter no minímo 6 caracteres")
        .regex(/[A-Z]/, "A senha deve ter pelo menos uma letra maiúscula")
})

// -> RegisterSchemasAdmin...
export const registerSchemaAdmin = z.object({
    name: z.string().min(5, "É preciso inserir o nome completo!"), 
    email: z.string().email("Email Inválido!"), 
    password: z.string()
        .min(6, "A senha deve ter no minímo 6 caracteres")
        .regex(/[A-Z]/, "A senha deve ter pelo menos uma letra maiúscula")
})
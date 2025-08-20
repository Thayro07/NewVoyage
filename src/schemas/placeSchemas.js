// -> Importando o Zod...
import { z } from 'zod';
import { optional } from 'zod/v4';

export const SchemaPlace = z.object({
    name: z.string().min(1, "Campo obrigatório para inserir o nome do local!"),
    description: z.string().min(5, "Campo obrigatório para inserir a descrição do local!"),
    address: z.string().min(5, "Campo obrigatório para inserir o endereço do local!"),
    type: z.string().min(3, "Campo obrigatório para inserir o tipo do local!"),
    rating: z.number().min(0).max(5, "Campo para avaliação do local!")
})

export const UpdateSchemaPlace = z.object({
    name: z.string().min(1, "Campo obrigatório para inserir o nome do local!").optional(),
    description: z.string().min(5, "Campo obrigatório para inserir a descrição do local!").optional(),
    address: z.string().min(5, "Campo obrigatório para inserir o endereço do local!").optional(),
    type: z.string().min(3, "Campo obrigatório para inserir o tipo do local!").optional(),
    rating: z.number().min(0).max(5, "Campo para avaliação do local!").optional()
})
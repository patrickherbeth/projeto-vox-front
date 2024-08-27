// src/app/models/empresa.model.ts
export class Empresa {
  id?: number| null;           // Opcional, usado para identificar a empresa
  nome?: string| null;          // Nome da empresa
  endereco?: string| null;       // Endereço da empresa
  cnpj?: string| null;          // CNPJ da empresa
  telefone?: string| null;    // Telefone da empresa, opcional
  email?: string| null;        // Email da empresa, opcional
  descricao?: string| null;        // Descrição da empresa, opcional
}

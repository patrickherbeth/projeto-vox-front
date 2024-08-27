export interface Socio {
  id: number;
  nome: string;
  cargo?: string; // Opcional, se você tiver um campo para cargo ou título
  empresaId?: number; // Opcional, se o sócio estiver associado a uma empresa
  contato?: number; // Opcional, se o sócio estiver associado a uma empresa
}

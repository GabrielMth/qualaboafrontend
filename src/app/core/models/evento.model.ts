export type EventoStatus = 'PENDENTE' | 'APROVADO' | 'REJEITADO';

export interface Evento {
  id: string;
  titulo: string;
  descricao?: string;
  categoria: string;
  emoji: string;          // usado como thumb enquanto não há imagem real
  imagemCapa?: string;
  cidade: string;
  estado: string;
  dataInicio: string;     // ISO string
  dataFim?: string;
  preco: number | null;   // null = gratuito
  destaque?: boolean;
  badge?: 'HOT' | 'NOVO' | 'GRATIS' | null;
  status?: EventoStatus;
}

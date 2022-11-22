import { differenceInDays, format, formatDistanceToNow } from "date-fns";
import { ptBR } from "date-fns/locale";

export default function formatPostDate(postCreationDate: string): string {
  const postDate = new Date(postCreationDate);
  const today = new Date();

  const dayDiff = differenceInDays(today, postDate);
  return dayDiff > 3 ? format(postDate, 'dd/MM/yyyy') :
    'há ' + formatDistanceToNow(postDate, { locale: ptBR });
}
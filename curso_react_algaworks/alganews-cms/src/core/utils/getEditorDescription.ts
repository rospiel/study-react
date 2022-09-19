import { formatDistance } from 'date-fns';
import { ptBR } from 'date-fns/locale';

export default function getEditorDescription(editorCreationDate: Date): string {
  const TODAY: Date = new Date();
  const DISTANCE: string = formatDistance(editorCreationDate, TODAY, {locale: ptBR});

  return `Editor há ${DISTANCE}`;
}
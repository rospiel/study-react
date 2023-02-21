import * as WPC from './WordPriceCounter.styles';

export interface WordPriceCounterProps {
  wordsCount: number;
  pricePerWord: number;
}

function getTotalAndFormatter(props: WordPriceCounterProps) {
  validateWordCounts(props.wordsCount);
  const result = props.pricePerWord * props.wordsCount;

  return (
    (result).toLocaleString('pt-br', {
      style: 'currency',
      currency: 'BRL',
      maximumFractionDigits: 2
    })
  )
}

function validateWordCounts(wordsCount: number) {
  if (wordsCount < 0) {
    throw Error('A quantidade de palavras não pode ser negativa')
  }
}

function WordPriceCounter (props: WordPriceCounterProps) {
  return (
    <WPC.Wrapper>
      <span className="wordCounter">{props.wordsCount} palavra{props.wordsCount === 1 || props.wordsCount === 0 ? "" : "s"}</span>
      <span className="pricePreview">
        {getTotalAndFormatter(props)}
      </span>
    </WPC.Wrapper>
  )
}

export default WordPriceCounter;
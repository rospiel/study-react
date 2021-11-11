import React from 'react';
import { Link } from 'react-router-dom';
import Head from './Head';
import useFetch from './useFetch';
import styles from './Produtos.module.css';

const Produtos = () => {
  const { data, loading, error, request } = useFetch();

  React.useEffect(() => {
    request('https://ranekapi.origamid.dev/json/api/produto');
  }, [request]);

  if (data === null) {
    return null;
  }

  function getFirtsPicture(fotos) {
    return fotos[0].src;
  }

  function getFirtsPictureTitle(fotos) {
    return fotos[0].title;
  }

  return (
    <section className={`${styles.produtos} + animeLeft`}>
      <Head description="Tela de produtos" title="Produtos" />
      {data.map((produto) => (
        <Link
          to={`produto/${produto.id}`}
          key={produto.id}
          className={styles.item}
        >
          <img
            src={getFirtsPicture(produto.fotos)}
            alt={getFirtsPictureTitle(produto.fotos)}
          />
          <h1 className={styles.nome}>{produto.nome}</h1>
        </Link>
      ))}
    </section>
  );
};

export default Produtos;

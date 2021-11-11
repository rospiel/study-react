import React from 'react';
import { useParams } from 'react-router-dom';
import Head from './Head';
import styles from './Produto.module.css';
import useFetch from './useFetch';

const Produto = () => {
  const { id } = useParams();
  const { data, loading, error, request } = useFetch();

  React.useEffect(() => {
    request(`https://ranekapi.origamid.dev/json/api/produto/${id}`);
  }, [request]);

  if (loading) {
    return <div className="loading"></div>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  if (data === null) {
    return null;
  }

  return (
    <section className={`${styles.produto} + animeLeft`}>
      <Head title={data.nome} description={`Esse é o produto.: ${data.nome}`} />
      <div className={styles.fotos}>
        {data.fotos.map((foto) => (
          <img key={foto.src} src={foto.src} alt={foto.titulo} />
        ))}
      </div>

      <div className={styles.dados}>
        <h1>{data.nome}</h1>
        <span className={styles.preco}>R$ {data.preco}</span>
        <p className={styles.descricao}>{data.descricao}</p>
      </div>
    </section>
  );
};

export default Produto;

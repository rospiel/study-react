import React from 'react';
import propTypes from 'prop-types';

/** Cada nova validação do tipo regex adicionar no types
 *  incluindo seu mensagem de erro.
 */
const types = {
  email: {
    regex:
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    message: 'Email inválido',
  },
  required: {
    regex: /^(?!\s*$).+/,
    message: 'Favor preencher o campo',
  },
};

/** Criação do hook, para não validar basta passar um type que
 *  não contenha na lista de types
 */
const useInput = (type) => {
  const [value, setValue] = React.useState('');
  const [error, setError] = React.useState(null);

  function onChange({ target }) {
    if (error) {
      validate(target.value);
    }
    setValue(target.value);
  }

  function validate(value) {
    let validated = isToValidate();
    console.log(validated);
    if (validated) {
      console.log(validated);
      return validated;
    }

    validated = isNotEmpty(value);
    validated = validated ? isCorrectPattern(value) : validated;
    isValidated(validated);
    return validated;
  }

  function isToValidate() {
    return types[type] === undefined;
  }

  function isNotEmpty(value) {
    if (value.length === 0) {
      setError('Preencha um valor!');
      return false;
    }

    return true;
  }

  function isCorrectPattern(value) {
    if (types[type] && types[type].regex.test(value) === false) {
      setError(types[type].message);
      return false;
    }

    return true;
  }

  function isValidated(validated) {
    if (validated) {
      setError(null);
    }
  }

  /** valores retornados para usar no input */
  return {
    value,
    setValue,
    error,
    onChange,
    onBlur: () => validate(value),
    validate: () => validate(value),
  };
};

useInput.propTypes = {
  type: propTypes.string,
};

export default useInput;

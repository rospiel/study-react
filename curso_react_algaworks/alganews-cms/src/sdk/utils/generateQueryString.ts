function generateQueryString(params: 
  {[key: string]: string | number | boolean | string[] | undefined}
  ): string {
  
    const convertedParams = convertParamsToString(params);
    return `?${new URLSearchParams(convertedParams).toString()}`;
}

function convertParamsToString(params: 
  {[key: string]: string | number | boolean | string[] | undefined}): {[key: string]: string} {
    const convertedParams: {[key: string]: string} = {};
  
    Object.keys(params)
    .forEach(key => {
      const param = params[key];
      if (param) {
        convertedParams[key] = String(param);
      }
    });

    return convertedParams;
  }

export default generateQueryString;
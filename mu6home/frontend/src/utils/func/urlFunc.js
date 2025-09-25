function getQueryParams(url) {
  const params = {};
  const queryString = url.split("?")[1];
  if (!queryString) return params;

  const searchParams = new URLSearchParams(queryString);
  for (let [key, value] of searchParams.entries()) {
    params[key] = value;
  }

  return params;
}

function pushParamsToUrl(url, params = {}) {
  const newUrl = new URL(url);

  Object.keys(params).forEach((key) => {
    if (params[key] === null || params[key] === undefined) {
      newUrl.searchParams.delete(key); // remove if null/undefined
    } else {
      newUrl.searchParams.set(key, params[key]); // add/update
    }
  });

  return newUrl.toString();
}

export { getQueryParams, pushParamsToUrl };

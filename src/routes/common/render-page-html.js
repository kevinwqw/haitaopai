const toScriptMarkup = function (urls) {
    if (!urls || urls.length < 1) {
        return [];
    }

    return urls.map((url) => `<script type="text/javascript" src="${url}"></script>`);
};

const toJsonMarkup = function (data) {
    if (!data) {
        return '';
    }
    return `<script type="application/json" id="PAGE_CONFIG">${JSON.stringify(data)}</script>`;
};

const toStyleMarkup = function (urls) {
    if (!urls || urls.length < 1) {
        return [];
    }

    return urls.map((url) => `<link rel="stylesheet" href="${url}">`);
};

const toMetaMarkup = function (metas) {
    if (!metas || metas.length < 1) {
        return [];
    }

    return metas.map((meta) => {
        if (meta.property) {
            return `<meta property="${meta.property}" content="${meta.content}">`;
        }
        return `<meta name="${meta.name}" content="${meta.content}">`;
    });
};

const renderPageHtml = (
    request,
    { title, metas, stylesUrls, data, topScriptUrls, bottomScriptUrls, bodyHtml }
) => {
    const csrfToken = request.plugins.crumb || '';
    /* eslint max-len: 0 */
    return `<!DOCTYPE html>
  <html>
    <head>
      <meta charSet="utf-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"/>
      <meta name="format-detection" content="telephone=no"/>
      <meta name="csrf-token" content="${csrfToken}"/>
      ${toMetaMarkup(metas).join('')}
      <title>${title}</title>
      ${toStyleMarkup(stylesUrls).join('')}
      ${toJsonMarkup(data)}
    </head>
    <body>
      ${toScriptMarkup(topScriptUrls).join('')}
      ${bodyHtml}
      ${toScriptMarkup(bottomScriptUrls).join('')}
    </body>
  </html>`;
};

module.exports = renderPageHtml;

import { load } from 'cheerio';

export const getData = (html) => {
  // Load HTML into Cheerio
  const $ = load(html);

  const extractSection = ($element) => {
    return {
      title: $element.find('> h4').text().trim(),
      content: $element.find('> p').first().text().trim(),
      subsections: $element
        .find('div[id]')
        .map((i, elem) => {
          return {
            title: $(elem).find('> p').attr('data-title'),
            text: $(elem).find('> p').text().trim(),
          };
        })
        .get(),
    };
  };

  const extractSubpart = ($element) => {
    return {
      name: $element.find('> h2').text().trim(),
      sections: $element
        .find('.section')
        .map((i, elem) => {
          return extractSection($(elem));
        })
        .get(),
    };
  };

  const extractParts = ($element) => {
    return {
      name: $element.find('> h1').text().trim(),
      authority: $element.find('.authority h4').next('p').text().trim(),
      source: $element.find('.source h4').next('p').text().trim(),
      subparts: $element
        .find('.subpart')
        .map((i, elem) => {
          return extractSubpart($(elem));
        })
        .get(),
    };
  };

  const jsonData = {
    title: $('div.title > h1').text().trim(),
    subtitles: $('div.subtitle')
      .map((i, elem) => {
        const $elem = $(elem);
        return {
          subtitle: $elem.find('> h2').text().trim(),
          parts: $elem
            .find('.part')
            .map((i, part) => extractParts($(part)))
            .get(),
        };
      })
      .get(),
  };

  return jsonData;
};

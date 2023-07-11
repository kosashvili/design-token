const StyleDictionary = require('style-dictionary');

StyleDictionary.registerFormat({
  name: 'custom/scss-mixins',
  formatter: function (dictionary, platform) {
    const mixinTemplate = (token) => `@mixin ${token.name} {
  ${token.original.value};
}`;

    return dictionary.allTokens
      .map((token) => mixinTemplate(token))
      .join('\n\n');
  },
});

module.exports = StyleDictionary;

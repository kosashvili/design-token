const StyleDictionary = require('style-dictionary');

StyleDictionary.registerTransformGroup({
  name: 'scss-mixins',
  transforms: [
    'attribute/cti',
    'name/cti/kebab',
    'time/seconds',
    'content/icon',
    'color/css',
    'size/rem',
  ],
});

StyleDictionary.registerFormat({
  name: 'scss/mixins',
  formatter: function (dictionary) {
    return dictionary.allProperties
      .map(function (prop) {
        return `@mixin ${prop.name} {
  ${prop.attributes.map((attr) => `  ${attr.name}: ${attr.value};`).join('\n')}
}`;
      })
      .join('\n\n');
  },
});

module.exports = StyleDictionary;

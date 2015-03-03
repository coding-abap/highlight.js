/*
Language: Abap
Author: Pablo Escalada <diesire@gmail.com>
Description: Abap language definition
*/
function(hljs) {
  var KEYWORDS = {
    keyword: 'field-symbols field symbols start-of-selection report form endform data'
  };
  var OTHER = {
    className: 'keyword',
    begin: 'OTHERS',
    //add exceptions
  };
  var LINE_COMMENT_MODE = {
    className: 'comment',
    variants: [
      {begin: '^\\*', end: '$', relevance: 0},
      {begin: '"', end: '$'}
    ]
  };
  var GRAVE_ACENT_STRING = {
    className: 'string',
    begin: '`', end: '`',
    illegal: '\\n',
    contains: [hljs.BACKSLASH_ESCAPE]
  };

  return {
    case_insensitive: true,
    keywords: KEYWORDS,
    contains: [
      LINE_COMMENT_MODE,
      hljs.APOS_STRING_MODE,
      GRAVE_ACENT_STRING,
      OTHER
    ]
  };
}

module.exports = `{{{ imports }}}
{{#if proptypes}}
{{#unless typescript ~}}
  import PropTypes from 'prop-types';
{{/unless}}
{{/if}} 
{{#if typescript }}
{{#if proptypes}}

{{#if export}}export {{/if}}type {{ name }}Props = {
  //
};
{{/if}}
{{/if}}

{{#if export }}export {{/if}}const {{ name }}{{#if typescript}}: React.FC<{{#if proptypes}}{{ name }}Props{{else}}any{{/if}}>{{/if}} = () => {
  return (
    <div>{{name}}</div>
  );
};
{{#if propTypes}}

{{ name }}.propTypes = {
  //
};
{{#unless export}}

{{/unless}}
{{/if}}
{{#unless export }}

export default {{ name }};
{{/unless}}
`;

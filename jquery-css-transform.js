(function(a){function b(a){var b=["transform","WebkitTransform","msTransform","MozTransform","OTransform"],c;while(c=b.shift())if(typeof a.style[c]!="undefined")return c;return"transform"}var c=null,d=a.fn.css;a.fn.css=function(e,f){c===null&&(typeof a.cssProps!="undefined"?c=a.cssProps:typeof a.props!="undefined"?c=a.props:c={}),typeof c.transform=="undefined"&&(e=="transform"||typeof e=="object"&&typeof e.transform!="undefined")&&(c.transform=b(this.get(0)));if(c.transform!="transform")if(e=="transform"){e=c.transform;if(typeof f=="undefined"&&jQuery.style)return jQuery.style(this.get(0),e)}else typeof e=="object"&&typeof e.transform!="undefined"&&(e[c.transform]=e.transform,delete e.transform);return d.apply(this,arguments)}})(jQuery);
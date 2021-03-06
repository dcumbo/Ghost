module.exports = {
    name: 'html',
    type: 'dom',
    render(opts) {
        // use the SimpleDOM document to create a raw HTML section.
        // avoids parsing/rendering of potentially broken or unsupported HTML
        return opts.env.dom.createRawHTMLSection(opts.payload.html);
    }
};

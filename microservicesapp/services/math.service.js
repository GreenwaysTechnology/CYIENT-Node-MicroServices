module.exports = {
    name: 'math',
    actions: {
        add: {
            params: {
                a: 'number',
                b: 'number'
            },
            handler(ctx) {
                const { a, b } = ctx.params
                return a + b;
            }

        }
    }
};
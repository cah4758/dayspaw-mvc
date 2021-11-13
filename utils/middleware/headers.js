const headersFilter = (req, res, next) => {
     req.headers['content-type'] = ['text/css','text/html', 'application/json', 'text/javascript'];
     res.header('Content-Type: text/css', 'Content-Type: application/json');
     next();
}

module.exports = headersFilter;
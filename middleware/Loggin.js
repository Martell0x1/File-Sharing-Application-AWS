import colors from 'colors';


const Logger = (req, res, next) => {
    req.time = new Date().toString();

    res.on('finish', () => {
        const status = res.statusCode;
        const method = req.method;
        const url = `${req.protocol}://${req.get('host')}${req.originalUrl}`;
        const message = `${req.time} :: ${method} ${url} => ${status}`;

        let coloredLog;
        if (status >= 500) coloredLog = colors.magenta(message);
        else if (status >= 400) coloredLog = colors.red(message);
        else if (method === 'GET') coloredLog = colors.green(message);
        else if (method === 'POST') coloredLog = colors.blue(message);
        else coloredLog = colors.white(message);

        console.log(coloredLog);
    });

    next();
};
export default Logger;

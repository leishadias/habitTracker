const rfs=require('rotating-file-stream');
const fs=require('fs');
const path=require('path');

const logDirectory = path.join(__dirname,'../production_logs');
fs.existsSync(logDirectory)||fs.mkdirSync(logDirectory);
const accessLogStream = rfs.createStream('access.log',{
    interval: '1d',
    path: logDirectory
});

const development={
    name: 'development',
    asset_path: '/assets',
    session_cookie_key: 'bu9BthnFajqZjoYdeXv6v89H7CCPpm5r',
    db: 'habitTracker_dev',
    morgan: {
        mode: 'dev',
        options: {stream: accessLogStream}
    }
}

const production={
    name: 'production',
    asset_path: process.env.HT_ASSET_PATH,
    session_cookie_key: process.env.HT_SESSION_COOKIE_KEY,
    db: process.env.HT_DB,
    morgan: {
        mode: 'combined',
        options: {stream: accessLogStream}
    }
}
// module.exports=development;
module.exports=eval(process.env.HT_ENVIRONMENT)==undefined?development:eval(process.env.HT_ENVIRONMENT);
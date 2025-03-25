/**
 * 1. DB 연동 라이브러리 호출 - DB서버주소, user, password, port
 */
import mysql from 'mysql2';

const pool = mysql.createPool({
    host: 'shoppy-redux-db.cfcsuo2oi4f7.ap-northeast-2.rds.amazonaws.com',
    port: 3306,
    user: 'admin',
    password: 'aArkdgusdn2',
    database: 'hrdb2019',
});

export const db = pool.promise();
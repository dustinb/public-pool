drop database publicpool;
create database publicpool;
GRANT ALL PRIVILEGES ON publicpool.* TO 'user'@'%';
FLUSH PRIVILEGES;
create table if not exists goods (
	id int not null auto_increment,
    name varchar(128) not null,
    category varchar(128) not null,
    price int not null,
    description text not null,
    primary key(id)
) engine=InnoDB default charset=utf8;


create table if not exists members (
	id int not null auto_increment,
    username varchar(128) not null,
    password varchar(256) not null,
    primary key(id),
    UNIQUE KEY username(username)
) engine=InnoDB default charset=utf8;


create table if not exists purchases (
	id int(11) not null auto_increment,
    userid int not null,
    goodsid int not null,
    data datetime not null default current_timestamp,
    primary key(id)
) engine=InnoDB default charset=utf8; 


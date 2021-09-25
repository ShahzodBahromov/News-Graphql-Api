create database news;

create table users(
    user_id serial primary key,
    first_name varchar(30) not null,
    last_name varchar(30) not null,
    password varchar(30) not null,
    email varchar(30) not null,
    specialist varchar(30) not null
);

create table languages(
    languages_id serial primary key,
    languages_name varchar(10) not null
);

create table newsdb(
    news_id serial primary key,
    news_title varchar(30) not null,
    news_body text not null,
    time timestamptz default current_timestamp,
    views int not null,
    author_id int not null references users(user_id) on delete cascade,
    categorie_id int not null references categories(categorie_id) on delete cascade,
    lang_id int not null references languages(languages_id) on delete cascade
);

create table categories(
    categorie_id serial primary key,
    name varchar(30) not null,
    lang_id int not null references languages(languages_id) on delete cascade
);


insert into languages(languages_name) values('uzb');
insert into languages(languages_name) values('ru');
insert into languages(languages_name) values('en');

insert into users (first_name, last_name, password, email, specialist) values
('Akbar', 'shavkatov', 'f3616757Sh$', 'akbarov77@gmail.com', 'photogref'),
('Anvar', 'abdurahmonov', '77777777fS$', 'anvar99@gmail.com', 'photogref'),
('abubakr', 'hudoynazarov', '77777777fS$', 'khudoynazarov@gmail.com', 'contentmaker'),
('Abdulhamid', 'shodiyev', '77777777fS$', 'abdulhamid1@gmail.com', 'contentmaker'),
('Abdulatif', 'gulomov', '77777777fS$', 'jone@gmail.com', 'jurnalist');

insert into categories(name, lang_id) values('jahon yangiliklari', 1);
insert into categories(name, lang_id) values('uzb yangiliklari', 1);
insert into categories(name, lang_id) values('sport yangiliklari', 1);
insert into categories(name, lang_id) values('спортивные новости', 2);
insert into categories(name, lang_id) values('Новости мира', 2);
insert into categories(name, lang_id) values('world news', 3);
insert into categories(name, lang_id) values('sports news', 3);

insert into newsdb(news_title, news_body, views, author_id, categorie_id, lang_id) values 
('Jahon Yangililari', '<h1>Salom</h1>', 1, 1, 1, 1),
('Uzb Yangililari', '<h2>Yahshimisan</h2>', 1, 2, 2, 1),
('Sport Yangililari', '<h4>Hayr</h4>', 1, 1, 3, 1),
('world news', '<h1>Hello</h1>', 4, 2, 6, 2),
('Новости мира', '<h1>Привет</h1>', 6, 2, 5, 2),
('спортивные новости', '<h1>Уходите</h1>', 7, 2, 4, 2);









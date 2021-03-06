# StreetBallity

## Описание

Приложение для поиска открытых спортивных площадок в городе Санкт-Петербурге, а также организации спортивных игр по средствам ивентов.

## Функционал
Главная страница, на которой метками представлены открытые баскетбольные площадки города Санкт-Петербурга
![Map](https://user-images.githubusercontent.com/48245816/115680208-0b7d1e80-a35c-11eb-958e-9ae258a45787.png)

У каждого пользователя есть свой личный профиль, в который можно загрузить фотографию или изменить описание
![Profile](https://user-images.githubusercontent.com/48245816/115680333-26e82980-a35c-11eb-9e82-8791066b9bd8.png)

Кликнув по метке на карте, можно перейти на страницу поля. На ней отображена информация о поле,фотографии и календарь для взаимодействия с ивентами
![FieldPage](https://user-images.githubusercontent.com/48245816/115680440-3b2c2680-a35c-11eb-9a9f-b132f252a039.png)

Каждый пользователь может создать ивент в определенный день и в определенное время, который отобразится на таймлайне этого поля в конкретный день, другие пользователи могут присоединиться к событию, кликнув по нику можно перейти на профиль пользователя, для ознакомления
![Timeline](https://user-images.githubusercontent.com/48245816/115680542-5434d780-a35c-11eb-9c60-c3c4d5c90904.png)

При разработке данного приложения мы понимали, что самостоятельно поддерживать актуальную базу полей очень сложно, поэтому было принято решение добавить следующий функционал:
каждый пользователь может отправить заявку на добавление поля на главную карту, которая впоследствии модерируется админом. Заявку в свою очередь можно либо принять, либо отклонить, либюбо принять после редактирования.
![AddMarkPage](https://user-images.githubusercontent.com/48245816/115680747-85150c80-a35c-11eb-8761-0f1deb691400.png)


## Используемые технологии
- TypeScript
- Express
- Node.js
- JWT
- MongoDB
- Cloudinary
- React
- Redux(Thunk)
- Tailwind css
- Bootstrap

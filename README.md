# Movies list - Filter
- Replace `<your_account>` with your Github username in the
 [DEMO LINK](https://Rom911.github.io/react_movies-list-filter/)
- Follow the [React task guideline](https://github.com/mate-academy/react_task-guideline#react-tasks-guideline)
- Use [React TypeScript cheat sheet](https://mate-academy.github.io/fe-program/js/extra/react-typescript)

## Task
You are given movies list and a search field.
1. On every change save the input value into the `state.query`
2. Create a `visibleMovies` variable in the `render` method with the filtered movies
3. Check if `movie.title` or `movie.description` contains `state.query`
4. Search should be case insensitive (`Inception` can be found by entering `inc` or `Inc` or even `iNC`)

Вам предоставляется список фильмов и поле поиска.
1. При каждом изменении сохраняйте входное значение в `state.query`
2. Создайте переменную `visibleMovies` в методе `render` с отфильтрованными фильмами.
3. Проверьте, содержит ли `movie.title` или `movie.description` `state.query`
4. Поиск должен быть нечувствительным к регистру (`Inception` можно найти, введя «`inc`», «`Inc`» или даже «`iNC`»).

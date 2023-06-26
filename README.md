# Movies list - Filter

The `App`contains a `MoviesList` and a search field. Implement filtering using a `useState` hook.

> Here is [the working version](https://mate-academy.github.io/react_movies-list-filter/)

- On every change save the input value into the `query`;
- create a `visibleMovies` variable containing filtered movies;
- check if `movie.title` or `movie.description` contains `query`;
- ignore leading and trailing spaces;
- search should be case insensitive (`Inception` can be found by entering `inc` or `Inc` or even `iNC`).

## Instructions

- Implement a solution following the [React task guideline](https://github.com/mate-academy/react_task-guideline#react-tasks-guideline).
- Open one more terminal and run tests with `npm test` to ensure your solution is correct.
- Replace `<your_account>` with your Github username in the [DEMO LINK](https://<your_account>.github.io/react_movies-list-filter-js/) and add it to the PR description.

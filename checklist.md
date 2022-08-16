1. [CODE STYLE] - Don't use one-letter variable naming. (It could be confusing for another developer, who reads your code. Also, it would really hard to find this variable in the code editor using search)

BAD EXAMPLE:
```jsx
onChange={(e) => setVariable(e.target.value)}
```

GOOD EXAMPLE:
```jsx
onChange={(event) => setVariable(event.target.value)}
```


ALSO GOOD EXAMPLE:
```jsx
onChange={(changeEvent) => setVariable(changeEvent.target.value)}
```

2. [CODE STYLE] - Don't repeat yourself. If you see that you copy/paste some block code, maybe, it's time to create a separate variable/function
3. [CODE KNOWLEDGE] - If you are using a non-mutating array method, you **don't** need to create a copy of the array

BAD EXAMPLE:
```jsx
const filteredCats = [...cats].filter(cat => cat.age > 6);
```

GOOD EXAMPLE:
```jsx
const filteredCats = cats.filter(cat => cat.age > 6);
```

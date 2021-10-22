# Your Honest Game

Pretend to play [Jeopardy!](https://en.wikipedia.org/wiki/Jeopardy!) on your own.

**NB:**  
This is a mere prototype application including several experiments with different technologies.  

## Local development

```sh
yarn install
yarn dev
```

### .env

```
# endpoint
NEXT_PUBLIC_YHG_CATEGORY_EP = "https://jservice.io/api/category"

# your favorite categories
NEXT_PUBLIC_YHG_CATEGORY_IDS = "1 13 42 ..."

# categories to show
NEXT_PUBLIC_YHG_CATEGORY_LIMIT = 6

# question timer in seconds
NEXT_PUBLIC_YHG_CLUE_TIMER = 15
```

### Testing

```sh
yarn test
```

### Theming

See [assets/theme/theme.css] for tweaking theme variables.

## Main tools and services

- [NextJS](https://nextjs.org/)
- [React-Redux](https://react-redux.js.org/)
- [Redux Toolkit](https://redux-toolkit.js.org/)
- [Choom](https://www.npmjs.com/package/choom)
- [jService](https://jservice.io/)

## Notable mentions

- [react-feather](https://feathericons.com/)
- [howler](https://howlerjs.com/)
- [party.js](https://party.js.org/)
## Additional resources

- [Free Sounds Library](https://www.freesoundslibrary.com/)
- [Google Fonts](https://fonts.google.com/)

## [LICENSE](LICENSE)

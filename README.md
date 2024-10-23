# kojo-nav-group-prototype
Prototype for kojo's top bar using html popover and position anchor

## SCRIPTS
### Run for development
1. `nvm use`
2. `npm run dev`

### Build
1. `nvm use`
2. `npm run build`

### Deploy to github pages
1. `nvm use`
2. `npm run deploy`

## TODOS
- [ ] use dialog for the "span"
- [ ] test and Improve a11y
- [ ] Test with large menus / menus and submenus with lots of items
- 👎 Polyfill

## PROBLEMS
- Polyfill (oddbird/css-anchor-positioning) still does not support all the features we need
  - Currently disabled. We need to remove comment from `src/js/main/js`

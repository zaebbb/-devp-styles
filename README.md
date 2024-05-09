
# DEV-UTILS "STYLES"

Полезные утилиты для работы в scss, css модулями
Проект полностью поддерживается Typescript, минимизирован с помощью сборки


[![](https://img.shields.io/npm/v/@devproger/styles)]() 
[![](https://img.shields.io/npm/dy/@devproger/styles)]()
[![](https://img.shields.io/npm/l/@devproger/styles)]()
[![Size](https://img.shields.io/github/repo-size/zaebbb/dev-proger-styles.svg)](https://github.com/zaebbb/dev-proger-styles)
[![Language](https://img.shields.io/github/languages/top/zaebbb/dev-proger-styles.svg)](https://github.com/zaebbb/dev-proger-styles)




## Установка

Необходимые шаги для запуска у себя локально

```bash
  npm install @devproger/styles
```

## Использование, на примере функции classNames

```jsx
import cls from './Main.module.scss'
import { classNames } from '@devproger/styles'

function App() {
  return (
    <div 
      className={
        classNames(cls.Main, { [cls.ModeClass]: true }, [cls.AdditionalClass])
      }
    >
      Test
    </div>
  )
}
```


## 🛠 Используемые технологии
JS, TS, Jest, Eslint, Babel


## Лицензия

[MIT](https://choosealicense.com/licenses/mit/)


## Локальный запуск

Склонируйте проект

```bash
  git clone https://github.com/zaebbb/dev-proger-styles.git
```

Перейдите в директорию

```bash
  cd dev-proger-styles
```

Установите зависимости

```bash
  npm install
```

Запустите сборку или dev-режим

```bash
  npm run dev
```

```bash
  npm run build
```

## Jest тесты

В библиотеке используются Jest тесты на утилиты
Запустите их с помощью

```bash
  npm run test
```


## Документация

[Документация](https://linktodocumentation)


## Авторы

- [@zaebbb](https://www.github.com/zaebbb)


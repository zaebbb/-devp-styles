import { classNames } from '../lib/classNames'

describe('Тестирование функции className', () => {
  test('Использование одного аргумента', () => {
    expect(
      classNames(
        'test-class',
        {},
        []
      )
    ).toBe('test-class')
  })

  test('Использование модов', () => {
    expect(
      classNames(
        'test-class',
        { test: true },
        []
      )
    ).toBe('test-class test')
  })

  test('Использование модов с аругментом false', () => {
    expect(
      classNames(
        'test-class',
        { test: true, main: false, check: true },
        []
      )
    ).toBe('test-class test check')
  })

  test('Использование доп. классов', () => {
    expect(
      classNames(
        'test-class',
        { test: true, main: false, check: true },
        ['master', 'jest']
      )
    ).toBe('test-class test check master jest')
  })

  test('Использование первого аргумента без значения', () => {
    expect(
      classNames(
        '',
        { test: true, main: false, check: true },
        ['master', 'jest']
      )
    ).toBe(' test check master jest')
  })
})

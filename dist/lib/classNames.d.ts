import { type Additional, type Mods } from '../types/classNames';
/**
 * @description
 * Преобразование данных для css класса в строку
 *
 * @param {string} cls Главный класс объекта
 * @param {Mods} mods Моды, использующиеся по условию
 * @param {Additional} additional Массив доп. классов
 * @return {string}
 *
 * @example
 * import cls from 'main.module.scss'
 * classNames(cls.Main, { cls.MainDark: true }, [cls.MainModal])
 * // => 'Main MainDark MainModal'
 * */
export declare const classNames: (cls: string, mods: Mods, additional: Additional) => string;

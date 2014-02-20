declare module "fixtures/test1" {
/// <reference path="../_definitions.d.ts" />

export function thisIsAMethod(param: string, param2: boolean): void;

export var thisIsAVar: string;
}

declare module "fixtures/test2" {
/// <reference path="../_definitions.d.ts" />

export interface TestInterface {
    prop1: string;
    prop2: boolean;
}

export class TestClass implements TestInterface {
    prop1: string;
    prop2: boolean;

    constructor(arg1: string, arg2: string);

    method1(arg: string): boolean;
}
}

declare module "test/fixtures/test1" {
export function thisIsAMethod(param: string, param2: boolean): void;

export var thisIsAVar: string;
}

declare module "test/fixtures/test2" {
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

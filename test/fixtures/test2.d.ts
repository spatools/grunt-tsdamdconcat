/// <reference path="../_definitions.d.ts" />

export interface TestInterface {
    prop1: string;
    prop2: boolean;
}

export declare class TestClass implements TestInterface {
    prop1: string;
    prop2: boolean;

    constructor(arg1: string, arg2: string);

    method1(arg: string): boolean;
}

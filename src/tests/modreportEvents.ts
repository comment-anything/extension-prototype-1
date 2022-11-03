import { TestDomLogs } from "./domlogs";



export class ModReportUITests {
    logs: TestDomLogs
    el: HTMLDivElement;
    nav: HTMLDivElement
    toDestroy: {destroy():void}[]
    reportContainer: HTMLDivElement;
    
}
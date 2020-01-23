import { Level } from "@/area-conocimiento-crud/level.model";
declare class Options {
    host: string;
    context: string;
    requiredLevel: Level;
    constructor(host?: string, context?: string, requiredLevel?: Level);
}
declare const defaultConfig: Options;
export { defaultConfig, Options };

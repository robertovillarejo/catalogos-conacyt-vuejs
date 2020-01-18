import { Level } from "@/area-conocimiento-crud/level.model";

class Options {
    public host: string;
    public context: string;
    public requiredLevel: Level
    constructor(
        host?: string,
        context?: string,
        requiredLevel?: Level
    ) {
        this.host = host || '';
        this.context = context || '/services/catalogos/api';
        this.requiredLevel = requiredLevel || Level.ESPECIALIDAD;
    }
}

const defaultConfig = new Options();

export { defaultConfig, Options };
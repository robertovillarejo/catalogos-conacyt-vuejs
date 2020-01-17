
export interface IAreaDeConocimiento {
    id?: number;
    idArea?: number;
    area?: string;
    idCampo?: number;
    campo?: string;
    idDisciplina?: number;
    disciplina?: string;
    idSubdisciplina?: number;
    subdisciplina?: string;
    especialidad?: string;
}

export class AreaDeConocimiento implements IAreaDeConocimiento {
    constructor(
        public id?: number,
        public idArea?: number,
        public area?: string,
        public idCampo?: number,
        public campo?: string,
        public idDisciplina?: number,
        public disciplina?: string,
        public idSubdisciplina?: number,
        public subdisciplina?: string,
        public especialidad?: string
    ) { }
}

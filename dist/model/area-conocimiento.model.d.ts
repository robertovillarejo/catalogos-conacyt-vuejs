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
export declare class AreaDeConocimiento implements IAreaDeConocimiento {
    id?: number | undefined;
    idArea?: number | undefined;
    area?: string | undefined;
    idCampo?: number | undefined;
    campo?: string | undefined;
    idDisciplina?: number | undefined;
    disciplina?: string | undefined;
    idSubdisciplina?: number | undefined;
    subdisciplina?: string | undefined;
    especialidad?: string | undefined;
    constructor(id?: number | undefined, idArea?: number | undefined, area?: string | undefined, idCampo?: number | undefined, campo?: string | undefined, idDisciplina?: number | undefined, disciplina?: string | undefined, idSubdisciplina?: number | undefined, subdisciplina?: string | undefined, especialidad?: string | undefined);
}

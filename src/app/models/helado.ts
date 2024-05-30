export enum Tipo{
    Agua = 'agua',
    Crema = 'crema'
}

export class Helado {
    sabor !: string;
    tipo !: Tipo;
    precio !: number;
    peso !: number;
}

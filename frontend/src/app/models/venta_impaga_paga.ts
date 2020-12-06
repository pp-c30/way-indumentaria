export interface IVentaImpagaPaga
{
    id_impaga_paga?:number;
    fecha_carga:Date;
    vendedor:number;
    total:number;
    debe:number;
    estado:number;
}
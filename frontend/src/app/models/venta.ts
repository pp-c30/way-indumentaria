export interface IVenta
{
    id_venta?:number;
    producto:number;
    cantidad:number;
    importe:number;
    fecha_venta:any;
    fecha_venta_formateada:any;
    importe_unitario:string;
    estado:number;
    forma_pago:number;
    descuento_aplicado:number;
    planilla:number;
    vendedor:number;
    producto_descripcion:string;
    vendedor_venta:number;
    nombre:string;
    month?:number;
    year?:number;
    day?:number;
}
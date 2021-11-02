import {Entity, model, property, hasOne} from '@loopback/repository';
import {Factura} from './factura.model';

@model()
export class Venta extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id?: number;

  @property({
    type: 'string',
    required: true,
  })
  descripcion: string;

  @property({
    type: 'number',
    generated: true,
  })
  cantidad: number;

  @property({
    type: 'number',
    required: true,
  })
  id_cliente: number;

  @property({
    type: 'number',
    required: true,
  })
  id_platillo: number;

  @property({
    type: 'number',
    required: true,
  })
  id_repartidor: number;

  @hasOne(() => Factura, {keyTo: 'id_venta'})
  factura: Factura;

  constructor(data?: Partial<Venta>) {
    super(data);
  }
}

export interface VentaRelations {
  // describe navigational properties here
}

export type VentaWithRelations = Venta & VentaRelations;

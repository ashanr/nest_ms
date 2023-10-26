import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type CoordinateDocument = Coordinate & Document;

@Schema()
export class Coordinate {
  @Prop()
  latitude: number;

  @Prop()
  longitude: number;
}

export const CoordinateSchema = SchemaFactory.createForClass(Coordinate);

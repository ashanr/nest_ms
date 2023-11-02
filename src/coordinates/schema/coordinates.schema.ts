import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import * as mongoose from 'mongoose';

export type CoordinateDocument = Coordinates & Document;

@Schema()
export class Coordinates extends Document {
  @Prop()
  routeId: string;

  @Prop({ type: String, required: true })
  latitude: string;

  @Prop({ type: String, required: true })
  longitude: string;

  @Prop()
  name: string;
}

export const CoordinatesSchema = SchemaFactory.createForClass(Coordinates);

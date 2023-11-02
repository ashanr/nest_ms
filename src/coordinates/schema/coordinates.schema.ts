import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import * as mongoose from 'mongoose';

export type CoordinateDocument = Coordinates & Document;



@Schema()
export class Coordinates extends Document {
  @Prop()
  routeId: string;

  @Prop({
    type: {
      type: String,
      enum: ['Point'],
      default: 'Point',
    },
    coordinates: {
      type: [String],
      required: true,
    }

  })
  location: Record<string, any>;

  @Prop()
  name: string;
}



export const CoordinatesSchema = SchemaFactory.createForClass(Coordinates);

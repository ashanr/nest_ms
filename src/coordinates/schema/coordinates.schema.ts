import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import * as mongoose from 'mongoose';
import { isValidLatitude, isValidLongitude } from '../utils/coordinateValidation';


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


CoordinatesSchema.pre<Coordinates>('save', function(next) {
  if (!isValidLatitude(this.latitude)) {
    next(new Error('Invalid latitude provided. Latitude must be between -90 and 90.'));
  } else if (!isValidLongitude(this.longitude)) {
    next(new Error('Invalid longitude provided. Longitude must be between -180 and 180.'));
  } else {
    next();
  }
});
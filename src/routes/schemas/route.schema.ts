import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ timestamps: true })
export class Route extends Document {
  @Prop({ required: true })
  routeId: string;

  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  city: string;

  @Prop({ required: true })
  country: string;
}

export const RouteSchema = SchemaFactory.createForClass(Route);

import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, ValidationError } from 'mongoose';

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
      type: [Number],
      validate: {
        validator: function (values: Array<number>) {
          return values.length == 2;
        },
        message: (props: ValidationError) =>
          `${props.value} should have exactly 2 items where index 0 is lng & index 1 is lat`,
      },
      required: true,
    },
  })
  location: Record<string, any>;

  @Prop()
  name: string;
}

export const CoordinatesSchema = SchemaFactory.createForClass(Coordinates);

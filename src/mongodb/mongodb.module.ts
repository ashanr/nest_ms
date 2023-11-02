import { Module, Global } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { MongoDBService } from './mongodb.service';
import * as dotenv from 'dotenv';

dotenv.config({ path: './.env' });


@Global()
@Module({
  imports: [
    MongooseModule.forRoot(process.env['MONGODB_URI'], {
      serverSelectionTimeoutMS: 5000,
    }),
  ],
  providers: [MongoDBService],
  exports: [MongoDBService], 
})
export class MongoDBModule {}

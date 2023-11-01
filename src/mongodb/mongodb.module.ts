import { Module, Global } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { MongoDBService } from './mongodb.service';

@Global()
@Module({
  imports: [
    MongooseModule.forRoot(process.env.MONGODB_URI, {
      serverSelectionTimeoutMS: 5000,
    }),
  ],
  providers: [MongoDBService],
  exports: [MongoDBService], 
})
export class MongoDBModule {}

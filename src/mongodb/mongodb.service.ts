import { Injectable, Logger } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Document } from 'mongoose';  // Import Document from mongoose

@Injectable()
export class MongoDBService<T extends Document> {  // Make the service generic
  private readonly logger = new Logger(MongoDBService.name);

  constructor(
    @InjectModel('MODEL_NAME') private model: Model<T>,  // Inject a generic model
  ) {}

  async saveDocument(document: any): Promise<T> {  // Generic method to save any document
    try {
      const createdDocument = new this.model(document);
      const result = await createdDocument.save();
      this.logger.log(`Document saved: ${JSON.stringify(result)}`);
      return result;
    } catch (error) {
      this.logger.error(`Error saving document: ${error.message}`);
      throw new Error('Failed to save document');
    }
  }

  // Add more generic methods for other CRUD operations if needed
}

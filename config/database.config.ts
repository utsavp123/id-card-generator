// database.config.ts

import { MongooseModuleOptions } from '@nestjs/mongoose';

export const databaseConfig: MongooseModuleOptions = {
  uri: 'mongodb+srv://utsavparmar72:Jd8BwE28jstdmn0g@cluster0.cuqhjid.mongodb.net/id-card', // Replace with your MongoDB connection string
  connectionFactory: (connection) => {
    // Enable the useNewUrlParser and useUnifiedTopology options directly on the connection instance
    connection.options = {
      ...connection.options,
      useNewUrlParser: true,
      useUnifiedTopology: true,
    };
    return connection;
  },
};

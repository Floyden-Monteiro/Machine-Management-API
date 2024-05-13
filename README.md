# Machine Management API

A RESTful API for managing machines in a collection.

2. Use the API endpoints to manage machines:

- **Add Machine**: Create a new machine in the collection.
- **Update Machine**: Update an existing machine in the collection.
- **Delete Machine**: Delete a machine from the collection.
- **Get Machines**: Retrieve machines from the collection with support for pagination, filtering, sorting, searching, and projection.

## API Documentation

- See the Postman collection documentation for detailed information on each API endpoint: [API Documentation](https://speeding-sunset-295149.postman.co/workspace/Team-Workspace~44cd9f79-6622-4f5a-8da8-2ae3196e5e95/collection/15699605-b1ce9ce9-d36e-40ca-b5eb-54536475e3f8?action=share&creator=15699605)

## Start the server by running the following command:

`npm run dev`

## Environment Configuration

- `MONGODB_URI`: MongoDB connection URI.
- `PORT`: Port number for the server to listen on.

## Technologies Used

- Node.js
- Express.js
- MongoDB
- Mongoose
- mongoose-paginate-v2

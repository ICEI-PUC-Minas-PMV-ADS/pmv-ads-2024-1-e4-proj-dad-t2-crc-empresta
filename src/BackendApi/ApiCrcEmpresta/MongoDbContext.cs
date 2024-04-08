using ApiCrcEmpresta.Models;
using MongoDB.Driver;

namespace ApiCrcEmpresta
{
    public class MongoDbContext
    {
        private readonly IMongoDatabase _database;
        public IMongoCollection<User> Users => _database.GetCollection<User>("Usuarios");

        public MongoDbContext(IConfiguration configuration)
        {
            var connectionString = configuration.GetConnectionString("MongoDB");
            var mongoClient = new MongoClient(connectionString);
            _database = mongoClient.GetDatabase("CrcEmpresta");
        }
    }
}

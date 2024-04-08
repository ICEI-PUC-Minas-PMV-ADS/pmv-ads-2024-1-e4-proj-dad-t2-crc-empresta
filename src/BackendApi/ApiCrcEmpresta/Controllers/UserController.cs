using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using MongoDB.Driver;
using ApiCrcEmpresta.Models;
using ApiCrcEmpresta.Services;
using ApiCrcEmpresta.Enums;

namespace ApiCrcEmpresta.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        private readonly MongoDbContext _MongoDbContext;

        public UserController(MongoDbContext context)
        {
            _MongoDbContext = context;
        }
 
        [HttpPost("Create")]
        public async Task<ActionResult> Create(User user)
        {
            if (user.Perfil != Perfil.Administrador)
            {
                return Unauthorized("Apenas administradores têm permissão para criar usuários.");
            }
            await _MongoDbContext.Users.InsertOneAsync(user);
            return Ok(user);
        }

        [AllowAnonymous]
        [HttpPost("authenticate")]
        public async Task<ActionResult> Authenticate(AuthenticateDto model)
        {
            var filter = Builders<User>.Filter.Eq(u => u.Name, model.Name);
            var userDb = await _MongoDbContext.Users.Find(filter).FirstOrDefaultAsync();
            if (userDb == null || userDb.Password != model.Password) return Unauthorized();
            JwtTokenGenerate jwtTokenGenerate = new JwtTokenGenerate();
            var jwt = jwtTokenGenerate.Generate(userDb);

            return Ok(new { JwtToken = jwt });
        }

        [HttpGet("GetAllUsers")]
        public async Task<ActionResult> GetAll()
        {
            var model = await _MongoDbContext.Users.Find(_ => true).ToListAsync();
            return Ok(model);
        }
    }
}

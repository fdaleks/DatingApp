using Microsoft.AspNetCore.Mvc;

namespace API.Controllers;

[ApiController]
[Route("api/[controller]")] // /api/{{controller_name}}
public class BaseApiController : ControllerBase
{

}

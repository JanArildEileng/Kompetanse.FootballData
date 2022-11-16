using FootballData.WebApi.Models;
using FootballData.WebApi.Services;
using Microsoft.AspNetCore.Mvc;

namespace FootballData.WebApi.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class FootballResultController : ControllerBase
    {
        private static readonly string[] Summaries = new[]
        {
        "Freezing", "Bracing", "Chilly", "Cool", "Mild", "Warm", "Balmy", "Hot", "Sweltering", "Scorching"
    };

        private readonly ILogger<FootballResultController> _logger;
        private readonly ReadResultsFromFileService readResultsFromFileService;

        public FootballResultController(ILogger<FootballResultController> logger, ReadResultsFromFileService readResultsFromFileService)
        {
            _logger = logger;
            this.readResultsFromFileService = readResultsFromFileService;
        }

        [HttpGet(Name = "GetResultlt")]
        public FootballResults Get(int fromMatchNumber=1)
        {
           List<FootballResult> results= readResultsFromFileService.GetResults(fromMatchNumber);

            return new FootballResults(results);

        }
    }
}
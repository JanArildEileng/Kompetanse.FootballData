namespace FootballData.WebApi.Models
{
    public class FootballResults
    {
        public FootballResults(List<FootballResult> results)
        {
            this.results = results;
        }


        public List<FootballResult>  results { get; init; }
    }
}

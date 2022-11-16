using FootballData.WebApi.Models;

namespace FootballData.WebApi.Services;

public class ReadResultsFromFileService
{
    const int MAXMatcher = 380;

    public List<FootballResult> GetResults(int fromMatchNumber)
    {
        List<FootballResult> results = new();

        if (fromMatchNumber> MAXMatcher) return results;

        using (var stream = File.OpenText(@".\DataFiles\E02017.csv"))
        {
            string? line = stream.ReadLine(); //skip header
            int matchNumber = 0;

            while (matchNumber< fromMatchNumber)
            {
                (matchNumber, line) = Next(matchNumber, stream);
            }
            FootballResult firstResult = ToFootballResult(matchNumber, line);
            results.Add(firstResult);
       
            while (matchNumber < MAXMatcher) 
            {
                (matchNumber, line) = Next(matchNumber, stream);
                var resultNext = ToFootballResult(matchNumber, line);
                if (resultNext.DatePlayed == firstResult.DatePlayed)
                    results.Add(resultNext);
                else
                    break;
            } 
        }
        return results;
    }

    private static (int,string?) Next(int matchNumber, StreamReader stream)
    {
        return (matchNumber+1, stream.ReadLine()); 
    }

    private static FootballResult ToFootballResult(int matchNumber,string? line)
    {
        var splitted = line!.Split(',');
        return new FootballResult(matchNumber, splitted[1], splitted[2], splitted[3], int.Parse(splitted[4]), int.Parse(splitted[5]));
    }
}

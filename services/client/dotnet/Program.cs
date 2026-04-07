var builder = WebApplication.CreateBuilder(args);
builder.Services.AddTransient<LoggingHandler>();
builder.Services.AddHttpClient("default").AddHttpMessageHandler<LoggingHandler>();
var app = builder.Build();

app.MapGet("/", async (string target_url, IHttpClientFactory httpClientFactory) =>
{
    var client = httpClientFactory.CreateClient("default");
    try
    {
        await client.GetAsync(target_url);
        return Results.Text("Success\n");
    }
    catch
    {
        return Results.Text("Error\n");
    }
});

app.Run();

class LoggingHandler : DelegatingHandler
{
    protected override async Task<HttpResponseMessage> SendAsync(HttpRequestMessage request, CancellationToken cancellationToken)
    {
        Console.WriteLine($"> {request.Method} {request.RequestUri}");
        foreach (var header in request.Headers)
        {
            Console.WriteLine($"> {header.Key}: {string.Join(", ", header.Value)}");
        }

        var response = await base.SendAsync(request, cancellationToken);

        foreach (var header in response.Headers)
        {
            Console.WriteLine($"< {header.Key}: {string.Join(", ", header.Value)}");
        }
        foreach (var header in response.Content.Headers)
        {
            Console.WriteLine($"< {header.Key}: {string.Join(", ", header.Value)}");
        }
        Console.WriteLine();

        return response;
    }
}

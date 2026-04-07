var builder = WebApplication.CreateBuilder(args);
var app = builder.Build();

app.Use(async (context, next) =>
{
    var req = context.Request;
    Console.WriteLine($"> {req.Method} {req.Path}");
    foreach (var header in req.Headers)
    {
        Console.WriteLine($"> {header.Key}: {header.Value}");
    }

    await next();

    var res = context.Response;
    foreach (var header in res.Headers)
    {
        Console.WriteLine($"< {header.Key}: {header.Value}");
    }
    Console.WriteLine();
});

app.MapGet("/", () => Results.Text("Hello, World!\n"));

app.Run();

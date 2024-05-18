using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using UnDB.Data;
using UnDB.Models;
var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddRazorPages();
builder.Services.AddDbContext<UnDBContext>(options =>
    options.UseSqlServer(builder.Configuration.GetConnectionString("UnDBContext") ?? throw new InvalidOperationException("Connection string 'UnDBContext' not found.")));

var app = builder.Build();

using (var scope = app.Services.CreateScope())
{
    var services = scope.ServiceProvider;

    Seed_data.Initialize(services);
}

if (!app.Environment.IsDevelopment())
{
    app.UseExceptionHandler("/Error");
    app.UseHsts();
}

app.UseHttpsRedirection();
app.UseStaticFiles();

app.UseRouting();

app.UseAuthorization();

app.MapRazorPages();

app.Run();

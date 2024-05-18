using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using UnDB.Models;

namespace UnDB.Data
{
    public class UnDBContext : DbContext
    {
        public UnDBContext (DbContextOptions<UnDBContext> options)
            : base(options)
        {
        }

        public DbSet<UnDB.Models.University> University { get; set; } = default!;
    }
}

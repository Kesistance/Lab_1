using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using Microsoft.EntityFrameworkCore;
using UnDB.Data;
using UnDB.Models;

namespace UnDB.Pages.Universitys
{
    public class IndexModel : PageModel
    {
        private readonly UnDB.Data.UnDBContext _context;

        public IndexModel(UnDB.Data.UnDBContext context)
        {
            _context = context;
        }

        public IList<University> University { get;set; } = default!;

        public async Task OnGetAsync()
        {
            University = await _context.University.ToListAsync();
        }
    }
}

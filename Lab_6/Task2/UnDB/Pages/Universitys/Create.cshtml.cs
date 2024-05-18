using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using Microsoft.AspNetCore.Mvc.Rendering;
using UnDB.Data;
using UnDB.Models;

namespace UnDB.Pages.Universitys
{
    public class CreateModel : PageModel
    {
        private readonly UnDB.Data.UnDBContext _context;

        public CreateModel(UnDB.Data.UnDBContext context)
        {
            _context = context;
        }

        public IActionResult OnGet()
        {
            return Page();
        }

        [BindProperty]
        public University University { get; set; } = default!;

        // To protect from overposting attacks, see https://aka.ms/RazorPagesCRUD
        public async Task<IActionResult> OnPostAsync()
        {
            if (!ModelState.IsValid)
            {
                return Page();
            }

            _context.University.Add(University);
            await _context.SaveChangesAsync();

            return RedirectToPage("./Index");
        }
    }
}

using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using WebNote.Core.Entities;

namespace WebNote.Infrastructure.Data
{
    public class AppContextSeed
    {
        public static async Task SeedAsync(AppDbContext appDbContext)
        {
            appDbContext.Database.EnsureCreated();

            #region Seed Notes
            if (!appDbContext.NoteItems.Any())
            {
                appDbContext.NoteItems.AddRange(
                    GetPreconfiguredItems());

                await appDbContext.SaveChangesAsync();
            }
            #endregion

        }

        static IEnumerable<NoteItem> GetPreconfiguredItems()
        {
            return new List<NoteItem>()
            {
                new NoteItem ("First", "I must finish project."),
                new NoteItem ("Happy Birthday", "18.12.1996"),
                new NoteItem ("C#", "Lazy<> - lazy initialize instance of obj.")
            };
        }
    }
}

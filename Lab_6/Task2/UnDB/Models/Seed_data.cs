using Microsoft.EntityFrameworkCore;
using UnDB.Data;
using static System.Runtime.InteropServices.JavaScript.JSType;

namespace UnDB.Models
{
    public class Seed_data
    {
        public static void Initialize(IServiceProvider serviceProvider)
        {
            using (var context = new UnDBContext(
                serviceProvider.GetRequiredService<
                    DbContextOptions<UnDBContext>>()))
            {
                if (context == null || context.University == null)
                {
                    throw new ArgumentNullException("Null RazorPagesAppContext");
                }

                // Look for any movies.
                if (context.University.Any())
                {
                    return;   // DB has been seeded
                }

                context.University.AddRange(
                    new University
                    {
                        Un_title = "Владивостокский государственный университет",
                        Address = "ул. Гоголя, 41, Владивосток",
                        Department = "ИНСТИТУТ ИНФОРМАЦИОННЫХ ТЕХНОЛОГИЙ И АНАЛИЗА ДАННЫХ",
                        Group = "A",
                        Number = 1,
                        Headman = "Анашкин К. К.",
                        Course = 1,
                        Sub_group = "AA",
                        Sub_number = 2,
                        Count = 3
                    },

                    new University
                    {
                        Un_title = "Национальный исследовательский университет «МЭИ»",
                        Address = "Красноказарменная ул., 14, Москва",
                        Department = "Гуманитарно-прикладной",
                        Group = "B",
                        Number = 2,
                        Headman = "Аськин А. А.",
                        Course = 2,
                        Sub_group = "BB",
                        Sub_number = 3,
                        Count = 4
                    },

                    new University
                    {
                        Un_title = "Университет Синергия",
                        Address = "Ленинградский просп., 80, корп. 8, Москва",
                        Department = "Юридический факультет",
                        Group = "C",
                        Number = 3,
                        Headman = "Бабельянц Б. Б.",
                        Course = 3,
                        Sub_group = "CC",
                        Sub_number = 4,
                        Count = 5
                    },

                    new University
                    {
                        Un_title = "Южный федеральный университет",
                        Address = "Большая Садовая ул., 105/42, Ростов-на-Дону",
                        Department = "Факультет управления",
                        Group = "D",
                        Number = 4,
                        Headman = "Бабинчик С. С.",
                        Course = 4,
                        Sub_group = "DD",
                        Sub_number = 5,
                        Count = 6
                    }
                );
                context.SaveChanges();
            }
        }
    }
}

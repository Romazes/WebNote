using System;
using System.Collections.Generic;
using System.Text;

namespace WebNote.Core.Entities
{
    public class NoteItem: BaseEntity
    {
        public string Name { get; set; }
        public string Description { get; set; }

        public NoteItem(string name, string description)
        {
            Name = name;
            Description = description;
        }

        public NoteItem()
        {

        }
    }
}

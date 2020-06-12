using System;
using System.Collections.Generic;
using System.Text;

namespace WebNote.Core.Entities
{
    public class NoteItem: BaseEntity
    {
        public string Name { get; private set; }
        public string Description { get; private set; }

        public NoteItem(string name, string description)
        {
            Name = name;
            Description = description;
        }
    }
}

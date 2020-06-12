using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using WebNote.Core.Entities;
using WebNote.Core.Interfaces;

namespace WebNote.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class NotesController : ControllerBase
    {
        private readonly IAsyncRepository<NoteItem> _noteItemRepository;

        public NotesController(IAsyncRepository<NoteItem> noteItemRepository)
        {
            _noteItemRepository = noteItemRepository;
        }

        // GET: api/[controller]
        [HttpGet]
        public async Task<IReadOnlyList<NoteItem>> GetNote()
        {
            return await _noteItemRepository.ListAllAsync();
        }

        // GET: api/[controller]/5
        [HttpGet("{id}")]
        public async Task<ActionResult<NoteItem>> Get(int id)
        {
            var note = await _noteItemRepository.GetByIdAsync(id);
            if (note == null)
            {
                return NotFound();
            }
            return note;
        }

        // PUT: api/[controller]/5
        [HttpPut("{id}")]
        public async Task<IActionResult> Put(int id, NoteItem noteItem)
        {
            if (id != noteItem.Id)
            {
                return BadRequest();
            }
            await _noteItemRepository.UpdateAsync(noteItem);
            return NoContent();
        }

        // POST: api/[controller]
        [HttpPost]
        public async Task<ActionResult<NoteItem>> Post(NoteItem noteItem)
        {
            await _noteItemRepository.AddAsync(noteItem);
            return CreatedAtAction("Get", new { id = noteItem.Id }, noteItem);
        }

        // DELETE: api/[controller]/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<NoteItem>> Delete(int id)
        {
            var note = await _noteItemRepository.DeleteAsync(id);
            if (note == null)
            {
                return NotFound();
            }
            return note;
        }
    }
}
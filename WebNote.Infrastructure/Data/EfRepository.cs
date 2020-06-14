using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using WebNote.Core.Entities;
using WebNote.Core.Interfaces;

namespace WebNote.Infrastructure.Data
{
    public class EfRepository<T> : IAsyncRepository<T> where T : BaseEntity
    {
        protected readonly AppDbContext _appDbContext;

        public EfRepository(AppDbContext appDbContext)
        {
            _appDbContext = appDbContext;
        }

        public async Task<T> AddAsync(T entity)
        {
            await _appDbContext.Set<T>().AddAsync(entity);
            await _appDbContext.SaveChangesAsync();

            return entity;
        }

        public async Task<T> DeleteAsync(int? id)
        {
            var entity = await _appDbContext.Set<T>().FindAsync(id);
            if (entity == null)
            { 
                return entity;
            }

            _appDbContext.Set<T>().Remove(entity);
            await _appDbContext.SaveChangesAsync();
            return entity;
        }

        public async Task<T> GetByIdAsync(int? id)
        {
            return await _appDbContext.Set<T>().FindAsync(id);
        }

        public async Task<IReadOnlyList<T>> ListAllAsync()
        {
            return await _appDbContext.Set<T>().ToListAsync();
        }

        public async Task UpdateAsync(T entity)
        {
            _appDbContext.Entry(entity).State = EntityState.Modified;
            await _appDbContext.SaveChangesAsync();
        }
    }
}

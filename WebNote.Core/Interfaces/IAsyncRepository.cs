using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using WebNote.Core.Entities;

namespace WebNote.Core.Interfaces
{
    public interface IAsyncRepository<T> where T : BaseEntity
    {
        Task<T> GetByIdAsync(int? id);
        Task<IReadOnlyList<T>> ListAllAsync();
        Task<T> AddAsync(T entity);
        Task UpdateAsync(T entity);
        Task<T> DeleteAsync(int? id);
    }
}

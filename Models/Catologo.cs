using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace GERADOR_CATALOGOS.Models
{
    public class Catologo
    {
        [Key]
        public int Id { get; set; }
        public string Nome { get; set; }
        public DateTime DataCriacao { get; set; }

        #region Relações
        [NotMapped]
        public List<CatologoComponentes> CatologoComponentes { get; set; }
        #endregion
    }
}

using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace GERADOR_CATALOGOS.Models
{
    public class CatologoComponentes
    {
        [Key]
        public int IdComponente { get; set; }
        public int IdCatologo { get; set; }
        public int Sequencia { get; set; }
        public string? Tipo { get; set; }

        #region Relação
        [NotMapped]
        public Catologo Catologo { get; set; }
        #endregion

    }
}

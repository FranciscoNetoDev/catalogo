using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace GERADOR_CATALOGOS.Models
{
    public class CatologoComponentesVariaveis
    {
        [Key]
        public int IdVariavel { get; set; }
        public int IdCatologoComponentes { get; set; }
        public int Sequencia { get; set; }
        public decimal? Preco { get; set; }
        public decimal? PrecoPromocao { get; set; }
        public string? CaminhoAnexo { get; set; }
        public string? Descricao { get; set; }
        public string? Unidade { get; set; }
        #region Relações
        [NotMapped]
        public CatologoComponentes catologoComponentes { get; set; }
        #endregion
    }
}

using EtfDashboard.DTO;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EtfDashboard.BLL.Interfaces
{
    public interface IChartService
    {
        ICollection<PieChartObjectModel> GetPieChartData(int? godina=null, string ciklus=null);
        ICollection<ColumnChartObjectModel> GetColumnChartData(int? godina=null, string ciklus=null);
        ICollection<StudyYearModel> GetStudyYears();
    }
}

using EtfDashboard.BLL.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using EtfDashboard.DTO;
using Oracle.ManagedDataAccess.Client;
using EtfDashboard.DAL;

namespace EtfDashboard.BLL.Services
{
    public class ChartService : IChartService
    {
        private OracleDBConnection _context=new OracleDBConnection();
        public ICollection<PieChartObjectModel> GetPieChartData(int? g=null, string c=null)
        {
            //TODO:Dobavi podatke iz baze
            //string godina = null;
            //if(g==1)
            //{
            //    godina = "First";
            //}
            //else if(g==2)
            //{
            //    godina = "Second";
            //}
            //else if(g==3)
            //{
            //    godina = "Third";
            //}

            //string searchterm = godina + c;
            //OracleConnection connection = _context.OpenConnection();
            //OracleCommand cmd = connection.CreateCommand();
            //cmd.CommandText = "Select id from BP07.studyyear where title='" + searchterm + "'";
            //OracleDataReader reader = cmd.ExecuteReader();
            //string yearId = reader.GetString(0);


            PieChartObjectModel o1 = new PieChartObjectModel { Name = "RI", Y = 37 };
            PieChartObjectModel o2 = new PieChartObjectModel { Name = "AIE", Y = 13 };
            PieChartObjectModel o3 = new PieChartObjectModel { Name = "TK", Y = 10 };
            PieChartObjectModel o4 = new PieChartObjectModel { Name = "EE", Y = 40 };
            ICollection<PieChartObjectModel> lista = new List<PieChartObjectModel>();
            lista.Add(o1);
            lista.Add(o2);
            lista.Add(o3);
            lista.Add(o4);
            return lista;
        }
        public ICollection<ColumnChartObjectModel> GetColumnChartData(int? godina=null, string ciklus=null)
        {
            //TODO:Dobavi podatke iz baze

            ICollection<Double> lista1 = new List<Double>();
            lista1.Add(10);//januar
            lista1.Add(20);//jul
            lista1.Add(30);//decembar
            ICollection<Double> lista2 = new List<Double>();
            lista2.Add(25);//januar
            lista2.Add(25);//jul
            lista2.Add(50);//decembar
            ICollection<Double> lista3 = new List<Double>();
            lista3.Add(15);//januar
            lista3.Add(15);//jul
            lista3.Add(70);//decembar
            ColumnChartObjectModel o1 = new ColumnChartObjectModel { Name = "RI", Data = lista1 };
            ColumnChartObjectModel o2 = new ColumnChartObjectModel { Name = "AIE", Data = lista2 };
            ColumnChartObjectModel o3 = new ColumnChartObjectModel { Name = "EE", Data = lista3 };
            ColumnChartObjectModel o4 = new ColumnChartObjectModel { Name = "TK", Data = lista1 };
            ICollection<ColumnChartObjectModel> lista = new List<ColumnChartObjectModel>();
            lista.Add(o1);
            lista.Add(o2);
            lista.Add(o3);
            lista.Add(o4);
            return lista;
        }

        public ICollection<StudyYearModel> GetStudyYears()
        {
            ICollection<StudyYearModel> lista = new List<StudyYearModel>();
            try
            {
                OracleConnection connection = _context.OpenConnection();
                OracleCommand cmd = connection.CreateCommand();
                cmd.CommandText = "Select id, title from BP07.studyyear";
                OracleDataReader reader = cmd.ExecuteReader();
                while (reader.Read())
                {
                    int yearId = reader.GetInt32(0);
                    string title = reader.GetString(1);
                    StudyYearModel studyYear = new StudyYearModel { ID = yearId, Title = title };
                    lista.Add(studyYear);
                }
                return lista;
            }
            catch(Exception e) {
            }
            return null;
        }
    }
}

using EtfDashboard.BLL.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace EtfDashboard.WebAPI.Controllers
{
    public class ChartsController : ApiController
    {
        private IChartService _chartService;
        public ChartsController(IChartService chartService)
        {
            _chartService = chartService;
        }


        [HttpGet]
        [Route("api/Charts/PieChart")]
        public IHttpActionResult PieChart(int? godina=null,string ciklus=null)
        {
            var lista = _chartService.GetPieChartData(godina,ciklus);

            return Ok(lista);
        }
        [HttpGet]
        [Route("api/Charts/StudyYears")]
        public IHttpActionResult GetStudyYears()
        {
            var lista = _chartService.GetStudyYears();

            return Ok(lista);
        }


        [HttpGet]
        [Route("api/Charts/ColumnChart")]
        public IHttpActionResult ColumnChart(int? godina=null, string ciklus=null)
        {
            var lista = _chartService.GetColumnChartData(godina, ciklus);

            return Ok(lista);
        }
        // GET: api/Charts/5
        public string Get(int id)
        {
            return "value";
        }

        // POST: api/Charts
        public void Post([FromBody]string value)
        {
        }

        // PUT: api/Charts/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE: api/Charts/5
        public void Delete(int id)
        {
        }
    }
}

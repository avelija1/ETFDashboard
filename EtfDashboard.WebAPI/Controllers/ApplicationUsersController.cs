using EtfDashboard.BLL.Interfaces;
using EtfDashboard.DTO;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace EtfDashboard.WebAPI.Controllers
{
    public class ApplicationUsersController : ApiController
    {
        private IApplicationUserService _applicationUserService;
        public ApplicationUsersController(IApplicationUserService applicationUserService)
        {
            _applicationUserService = applicationUserService;
        }
        //// GET: api/ApplicationUsers
        //public IEnumerable<string> Get()
        //{
        //    return new string[] { "value1", "value2" };
        //}

        //// GET: api/ApplicationUsers/5
        //public string Get(int id)
        //{
        //    return "value";
        //}

        // POST: api/ApplicationUsers
        public void Post([FromBody]ApplicationUserModel newUser)
        {
            _applicationUserService.RegisterUser(newUser);
        }

        //// PUT: api/ApplicationUsers/5
        //public void Put(int id, [FromBody]string value)
        //{
        //}

        //// DELETE: api/ApplicationUsers/5
        //public void Delete(int id)
        //{
        //}
    }
}

using EtfDashboard.DAL;
using EtfDashboard.DomainModel;
using EtfDashboard.DTO;
using Microsoft.AspNet.Identity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EtfDashboard.BLL.Interfaces
{
   public interface IApplicationUserService
    {
        void RegisterUser(ApplicationUserModel newUser);
        ApplicationUser CreateOrRetrieveUser(ApplicationDbContext context, UserManager<ApplicationUser> userManager, string userName, string firstName, string lastName, string password);


    }
}

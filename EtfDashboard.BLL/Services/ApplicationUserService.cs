using EtfDashboard.BLL.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using EtfDashboard.DAL;
using EtfDashboard.DomainModel;
using EtfDashboard.DTO;
using Microsoft.AspNet.Identity;
using Microsoft.AspNet.Identity.EntityFramework;

namespace EtfDashboard.BLL.Services
{
    public class ApplicationUserService : IApplicationUserService
    {
        private ApplicationDbContext _context;

        public ApplicationUserService(ApplicationDbContext context)
        {
            _context = context;
        }
        public void RegisterUser(ApplicationUserModel newUserModel)
        {
            var roleStore = new RoleStore<IdentityRole>(_context);
            var roleManager = new RoleManager<IdentityRole>(roleStore);

            var userStore = new UserStore<ApplicationUser>(_context);
            var userManager = new UserManager<ApplicationUser>(userStore);

            // Roles
            string newUserRole = newUserModel.Role;
            if (!_context.Roles.Any(r => r.Name == newUserRole))
                roleManager.Create(new IdentityRole { Name = newUserModel.Role });


            //Adding users and roles to users
            var registeredUser = CreateOrRetrieveUser(_context, userManager, newUserModel.UserName, newUserModel.FirstName, newUserModel.LastName, newUserModel.Password);
            userManager.AddToRole(registeredUser.Id, newUserRole);
        }

        public ApplicationUser CreateOrRetrieveUser(ApplicationDbContext context, UserManager<ApplicationUser> userManager, string userName, string firstName, string lastName, string password)
        {
            var user = context.Users.Where(x => x.UserName == userName).FirstOrDefault();
            if (user == null)
            {
                user = new ApplicationUser
                {
                    FirstName = firstName,
                    LastName = lastName,
                    UserName = userName,
                };
                userManager.Create(user, password);
            }
            return user;
        }
    }
}
